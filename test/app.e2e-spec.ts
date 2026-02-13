import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Auth & Tasks (e2e)', () => {
  let app: INestApplication;
  let accessToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
  });

  it('1. Register User Baru', () => {
    return request(app.getHttpServer())
      .post('/users/register')
      .send({ email: 'test@gmail.com', password: 'password123' })
      .expect(201);
  });

  it('2. Login & Ambil Token', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@gmail.com', password: 'password123' })
      .expect(201);

    accessToken = response.body.access_token;
    expect(accessToken).toBeDefined();
  });

  it('3. Gagal akses Tasks tanpa Token (401)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(401);
  });

  it('4. Sukses akses Tasks dengan Token Valid', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
