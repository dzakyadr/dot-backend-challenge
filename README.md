# NestJS Task Management API - DOT Challenge

## Fitur Utama
* **User Authentication**: Registrasi dan Login menggunakan hashing password.
* **JWT Authorization**: Pengamanan akses API menggunakan JSON Web Token (JWT).
* **Task CRUD**: Manajemen data tugas (Create, Read, Delete).
* **Validation**: Validasi input menggunakan `class-validator`.
* **Database Management**: Menggunakan Prisma ORM dengan PostgreSQL.

## Design Pattern
Aplikasi ini menerapkan **Modular Pattern**, di mana setiap domain (Auth, User, Task) dipisahkan ke dalam modul tersendiri untuk memastikan kode tetap terorganisir dan memudahkan pengembangan di masa depan.

## Teknologi yang Digunakan
- **Framework**: NestJS 
- **Database**: PostgreSQL 
- **ORM**: Prisma
- **Language**: TypeScript

## Syarat
- Node.js (v24 atau versi terbaru)
- PostgreSQL terpasang dan berjalan di lokal

## Cara Menjalankan
1. **Clone Repository**
   ```bash
   git clone [https://github.com/dzakyadr/dot-backend-challenge]

2. **Install dependensi**
- npm install

3. **Konfigurasi Environment**
- Buat file .env di root folder dan sesuaikan isinya:
  DATABASE_URL="postgresql://user:password@localhost:5432/nama_db?schema=public"
  JWT_SECRET="test_password"

4. **Migrasi Database**
- npx prisma migrate dev --name init

5. **Jalankan aplikasi**
- npm run start:dev
- Aplikasi akan berjalan di http://localhost:3000

## API ENDPOINTS
**Auth & User**
- POST /users/register -> Mendaftarkan user baru
- POST /auth/login -> Login dan mendapatkan JWT Token

**Tasks (Membutuhkan Bearer Token)**
- POST /tasks -> Membuat tugas baru
- GET /tasks -> Menampilkan semua tugas milik user yang sedang login
- DELETE /tasks/:id -> Menghapus tugas berdasarkan ID


                                      ------ Muhammad Dzaky Adrian ------