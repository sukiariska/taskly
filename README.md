Taskly/
├── client/
│   ├── node_modules/         # Folder untuk dependensi frontend
│   ├── src/                  # Folder utama untuk file kode sumber frontend
│   │   ├── pages/            # Folder yang berisi komponen halaman React
│   │   │   ├── App.jsx       # Komponen utama aplikasi React
│   │   │   ├── main.jsx      # Entry point untuk merender aplikasi
│   │   ├── util.js           # File utilitas untuk frontend
│   ├── .env                  # File untuk variabel lingkungan frontend
│   ├── .gitignore            # File untuk mengecualikan file dari Git
│   ├── eslint.config.js      # File konfigurasi ESLint untuk memastikan kualitas kode
│   ├── index.html            # Template HTML utama untuk frontend
│   ├── package.json          # File konfigurasi npm untuk dependensi frontend
│   ├── vite.config.js        # File konfigurasi Vite sebagai bundler frontend
├── server/
│   ├── node_modules/         # Folder untuk dependensi backend
│   ├── config/               # Folder untuk file konfigurasi backend
│   │   ├── db.js             # File konfigurasi database MongoDB
│   ├── controllers/          # Folder untuk logika bisnis aplikasi
│   │   ├── auth.controller.js # Controller untuk autentikasi
│   │   ├── user.controller.js # Controller untuk manajemen pengguna
│   ├── routes/               # Folder untuk mendefinisikan endpoint API
│   │   ├── auth.route.js     # Route untuk autentikasi
│   │   ├── user.route.js     # Route untuk manajemen pengguna
│   ├── .env                  # File untuk variabel lingkungan backend
│   ├── index.js              # Entry point untuk backend
│   ├── seed.js               # Script untuk memasukkan data awal ke database
│   ├── package.json          # File konfigurasi npm untuk dependensi backend