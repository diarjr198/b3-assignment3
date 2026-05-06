# E-Commerce Backend API

REST API backend untuk aplikasi e-commerce yang dibangun dengan TypeScript, Express.js, dan MongoDB.

## 🚀 Teknologi

- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web framework
- **MongoDB + Mongoose** - Database
- **JWT** - Authentication
- **Swagger** - API Documentation
- **bcryptjs** - Password hashing

## 📦 Instalasi

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env sesuai konfigurasi Anda

# Build project
pnpm run build

# Start server
pnpm start
```

## 🔧 Environment Variables

Buat file `.env` di root project (atau copy dari `.env.example`):

```env
# Server Configuration
PORT=4000
API_BASE_URL=http://localhost:4000

# MongoDB Configuration (Local)
MONGODB_URI=mongodb://localhost:27017/Assignment3

# JWT Configuration
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=86400

# CORS Configuration
CORS_ORIGIN=*
```

### Environment Variables Explanation

- **PORT**: Port untuk server (default: 4000)
- **API_BASE_URL**: Base URL untuk Swagger API documentation (penting untuk production dengan reverse proxy)
- **MONGODB_URI**: Connection string MongoDB
- **JWT_SECRET**: Secret key untuk JWT token
- **JWT_EXPIRES_IN**: JWT token expiration time (dalam detik)
- **CORS_ORIGIN**: Allowed CORS origin (* untuk allow all, atau specific domain)

### MongoDB Setup

**Untuk MongoDB Local (Community Edition):**
```env
MONGODB_URI=mongodb://localhost:27017/Assignment3
```

**Untuk MongoDB Atlas (Online):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/Assignment3?retryWrites=true&w=majority
```

📖 **Panduan lengkap setup MongoDB local**: Lihat [MONGODB_SETUP.md](MONGODB_SETUP.md)

### Production Setup

**Untuk production dengan custom port dan domain:**
```env
PORT=39918
API_BASE_URL=https://yourdomain.com
NODE_ENV=production
```

📖 **Panduan lengkap production deployment**: Lihat [PRODUCTION_DEPLOYMENT.md](PRODUCTION_DEPLOYMENT.md)

## 📚 API Documentation

Setelah server berjalan, akses dokumentasi Swagger UI di:

```
http://localhost:4000/api-docs
```

Swagger UI menyediakan:
- ✅ Dokumentasi lengkap semua endpoint
- ✅ Try it out - Test API langsung dari browser
- ✅ Request/Response schema
- ✅ Authentication testing

## 🔐 Authentication

Sebagian besar endpoint memerlukan JWT token. Cara menggunakan:

1. **Register** user baru via `POST /api/auth/signup`
2. **Login** via `POST /api/auth/signin` untuk mendapatkan token
3. Gunakan token di header request:
   ```
   x-access-token: <your-jwt-token>
   ```

Di Swagger UI, klik tombol **Authorize** dan masukkan token Anda.

## 📋 API Endpoints

### Authentication (Public)
- `POST /api/auth/signup` - Register user baru
- `POST /api/auth/signin` - Login dan dapatkan JWT token

### Products (Public)
- `GET /api/product` - List semua produk
- `GET /api/product/:id` - Detail produk
- `POST /api/product/create` - Buat produk baru

### Cart (Protected - Requires JWT)
- `POST /api/cart/create` - Tambah produk ke cart
- `GET /api/cart/user/:idUser` - List cart user
- `DELETE /api/cart/delete/:id` - Hapus item dari cart

### Orders (Protected - Requires JWT)
- `GET /api/order` - List semua order
- `GET /api/order/:id` - Detail order
- `GET /api/order/user/:id` - Order by user
- `POST /api/order/create` - Buat order baru
- `PUT /api/order/update/:id` - Update order address
- `PUT /api/order/updateStatus/:id` - Update order status

### Categories (Protected - Requires JWT)
- `GET /api/category` - List semua kategori
- `POST /api/category/create` - Buat kategori baru

### Couriers (Protected - Requires JWT)
- `GET /api/courier` - List semua courier
- `POST /api/courier/create` - Buat courier baru

### Reviews (Protected - Requires JWT)
- `GET /api/review` - List semua review
- `POST /api/review/create/:idProduct` - Buat review untuk produk

## 🧪 Testing dengan Swagger

1. Buka `http://localhost:4000/api-docs`
2. Untuk endpoint yang memerlukan authentication:
   - Klik tombol **Authorize** di kanan atas
   - Masukkan JWT token yang didapat dari login
   - Klik **Authorize**
3. Pilih endpoint yang ingin di-test
4. Klik **Try it out**
5. Isi request body/parameters
6. Klik **Execute**
7. Lihat response di bawah

## 📝 Example Request

### Register User
```json
POST /api/auth/signup
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123",
  "role": "USER"
}
```

### Login
```json
POST /api/auth/signin
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "role": "USER"
  }
}
```

### Create Product
```json
POST /api/product/create
{
  "title": "Laptop Gaming ASUS ROG",
  "description": "High performance gaming laptop",
  "imagePath": "https://example.com/laptop.jpg",
  "stock": 10,
  "price": 15000000,
  "weight": 2500,
  "category": "507f1f77bcf86cd799439011",
  "courier": "507f1f77bcf86cd799439012"
}
```

## 🔒 Security Notes

✅ **Sudah Diimplementasikan:**
- Environment variables untuk sensitive data
- JWT secret dari .env
- MongoDB URI dari .env
- .gitignore untuk .env files

⚠️ **Untuk Production:**
- Gunakan JWT secret yang kuat dan unik
- Enable MongoDB authentication
- Implementasi rate limiting
- Tambahkan input validation
- Enable HTTPS
- Implementasi proper error handling
- Regular security audits

## 📄 License

ISC

## 👨‍💻 Author

Assignment 3 - Backend E-Commerce API
