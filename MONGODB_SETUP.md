# 🗄️ MongoDB Local Setup Guide

## Instalasi MongoDB Community Edition

### macOS

#### Menggunakan Homebrew (Recommended)
```bash
# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Verify MongoDB is running
mongosh
```

#### Manual Download
1. Download dari: https://www.mongodb.com/try/download/community
2. Extract dan ikuti instruksi instalasi
3. Start MongoDB:
```bash
mongod --config /usr/local/etc/mongod.conf
```

### Windows

#### Menggunakan Installer
1. Download MongoDB Community Edition dari: https://www.mongodb.com/try/download/community
2. Jalankan installer (.msi file)
3. Pilih "Complete" installation
4. Install MongoDB as a Service (recommended)
5. Install MongoDB Compass (optional GUI tool)

#### Start MongoDB Service
```bash
# Via Services
net start MongoDB

# Or via Command Prompt (as Administrator)
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg"
```

### Linux (Ubuntu/Debian)

```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Create list file for MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod
```

## Verifikasi Instalasi

```bash
# Connect to MongoDB shell
mongosh

# Check version
db.version()

# Show databases
show dbs

# Exit
exit
```

## Konfigurasi Project

### 1. File `.env` sudah dikonfigurasi untuk MongoDB local:
```env
MONGODB_URI=mongodb://localhost:27017/Assignment3
```

### 2. Default Port MongoDB: `27017`

### 3. Database Name: `Assignment3`

## Membuat Database dan Collection (Optional)

MongoDB akan otomatis membuat database dan collection saat pertama kali insert data. Tapi jika ingin manual:

```bash
# Connect to MongoDB
mongosh

# Switch to database (akan dibuat jika belum ada)
use Assignment3

# Create collections (optional, akan auto-create saat insert)
db.createCollection("users")
db.createCollection("products")
db.createCollection("carts")
db.createCollection("orders")
db.createCollection("categories")
db.createCollection("couriers")
db.createCollection("reviews")

# Verify collections
show collections

# Exit
exit
```

## Testing Connection

```bash
# Start your application
pnpm start

# Jika berhasil connect, akan muncul:
# DB connection established
# Connected to: localhost:27017/Assignment3
```

## MongoDB Compass (GUI Tool)

MongoDB Compass adalah GUI tool untuk manage MongoDB secara visual.

### Install
- Download dari: https://www.mongodb.com/try/download/compass
- Atau sudah terinstall saat install MongoDB Community Edition

### Connect
1. Buka MongoDB Compass
2. Connection String: `mongodb://localhost:27017`
3. Klik "Connect"
4. Pilih database "Assignment3"

## Troubleshooting

### Error: "MongoServerError: connect ECONNREFUSED"
**Solusi**: MongoDB service belum running
```bash
# macOS
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod
```

### Error: "command not found: mongosh"
**Solusi**: MongoDB shell belum terinstall atau belum di PATH
```bash
# macOS
brew install mongosh

# Windows/Linux
Download dari: https://www.mongodb.com/try/download/shell
```

### Error: "Data directory not found"
**Solusi**: Buat data directory
```bash
# macOS/Linux
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db

# Windows
mkdir C:\data\db
```

### Port 27017 sudah digunakan
**Solusi**: Gunakan port lain
```env
# .env
MONGODB_URI=mongodb://localhost:27018/Assignment3
```

Lalu start MongoDB dengan port custom:
```bash
mongod --port 27018
```

## Migrasi dari MongoDB Atlas ke Local

Jika Anda memiliki data di MongoDB Atlas dan ingin migrasi ke local:

### Menggunakan mongodump & mongorestore

```bash
# Export dari Atlas
mongodump --uri="mongodb+srv://username:password@cluster.mongodb.net/Assignment3" --out=./backup

# Import ke Local
mongorestore --db=Assignment3 ./backup/Assignment3
```

### Menggunakan MongoDB Compass
1. Connect ke MongoDB Atlas
2. Export collection (JSON/CSV)
3. Connect ke MongoDB Local
4. Import collection

## Kembali ke MongoDB Atlas

Jika ingin kembali menggunakan MongoDB Atlas, ubah `.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/Assignment3?retryWrites=true&w=majority
```

## Best Practices

1. **Backup Regular**: Backup database secara berkala
   ```bash
   mongodump --db=Assignment3 --out=./backup/$(date +%Y%m%d)
   ```

2. **Authentication**: Untuk production, enable authentication
   ```bash
   # Create admin user
   mongosh
   use admin
   db.createUser({
     user: "admin",
     pwd: "password",
     roles: ["root"]
   })
   ```

3. **Monitoring**: Monitor performance dengan MongoDB Compass atau tools lain

4. **Indexes**: Buat indexes untuk query yang sering digunakan
   ```javascript
   db.products.createIndex({ title: 1 })
   db.users.createIndex({ email: 1 }, { unique: true })
   ```

## Resources

- MongoDB Documentation: https://docs.mongodb.com/
- MongoDB University (Free Courses): https://university.mongodb.com/
- MongoDB Community Forums: https://www.mongodb.com/community/forums/

---

**MongoDB Local sudah siap digunakan!** 🚀
