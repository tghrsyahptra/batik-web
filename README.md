# Sistem Informasi Penjualan & Manajemen Stok Batik H.M. Akmal

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

Sistem Informasi Penjualan & Manajemen Stok untuk UMKM Batik H.M. Akmal. Aplikasi web berbasis React.js yang membantu mengelola operasional penjualan, stok, dan reseller untuk bisnis batik cap & printing.

## 📋 Tentang Project

**Batik H.M. Akmal** adalah perusahaan keluarga berskala kecil-menengah (UMKM) yang bergerak di bidang produksi dan penjualan batik cap & printing melalui dua saluran distribusi. Sistem ini dirancang khusus untuk membantu mengoptimalkan operasional bisnis dengan fitur-fitur manajemen penjualan, stok, dan reseller yang terintegrasi.

## ✨ Fitur Utama

### 1. Dashboard Utama
- Ringkasan statistik penjualan bulanan
- Unit terjual dan reseller aktif
- Grafik penjualan dan transaksi terbaru
- Produk terlaris

### 2. Penjualan & Reseller Management
- Pencatatan seluruh transaksi toko & reseller
- Input pesanan reseller langsung melalui web
- Notifikasi otomatis ketika:
  - Pesanan sudah diproses
  - Pesanan sudah dikirim
  - Stok kosong

### 3. Stok & Gudang
- Input stok masuk dari pabrik
- Input stok keluar ke pelanggan/reseller
- Sinkronisasi otomatis antara stok toko dan stok online
- Laporan stok menipis
- Laporan produk terlaris

### 4. Laporan & Analisis
- Laporan penjualan harian/bulanan
- Analisis produk terlaris
- Laporan stok dan inventori
- Grafik dan visualisasi data

### 5. Profil & Pengaturan
- Manajemen informasi admin
- Pengaturan platform dan akun
- Notifikasi dan pesan
- Manajemen produk batik

### 6. Autentikasi
- Halaman Sign In
- Halaman Sign Up
- Manajemen akun pengguna

## 🚀 Teknologi yang Digunakan

- **React.js** - Library JavaScript untuk membangun user interface
- **Chakra UI** - Framework React untuk komponen UI yang modern
- **React Router** - Routing untuk aplikasi React
- **ApexCharts** - Library untuk membuat grafik dan visualisasi data
- **Sass** - Preprocessor CSS

## 📦 Instalasi

### Prasyarat
- Node.js (v14 atau lebih tinggi)
- npm atau yarn

### Langkah Instalasi

1. Clone repository:
```bash
git clone https://github.com/your-username/batik-web.git
cd batik-web
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan aplikasi:
```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📁 Struktur Project

```
batik-web/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── img/
│   │   └── svg/
│   ├── components/
│   │   ├── Card/
│   │   ├── Charts/
│   │   ├── Configurator/
│   │   ├── Icons/
│   │   ├── Layout/
│   │   ├── Menu/
│   │   ├── Navbars/
│   │   ├── Sidebar/
│   │   └── Tables/
│   ├── layouts/
│   │   ├── Admin.js
│   │   ├── Auth.js
│   │   └── RTL.js
│   ├── theme/
│   │   ├── components/
│   │   ├── foundations/
│   │   └── theme.js
│   ├── variables/
│   │   ├── charts.js
│   │   └── general.js
│   ├── views/
│   │   ├── Auth/
│   │   │   ├── SignIn.js
│   │   │   └── SignUp.js
│   │   └── Dashboard/
│   │       ├── Dashboard/
│   │       ├── Penjualan/
│   │       ├── Stok/
│   │       ├── Laporan/
│   │       └── Profile/
│   ├── index.js
│   └── routes.js
├── package.json
└── README.md
```

## 🎯 Halaman yang Tersedia

- **Dashboard** (`/admin/dashboard`) - Halaman utama dengan statistik dan grafik
- **Penjualan** (`/admin/penjualan`) - Manajemen penjualan dan reseller
- **Stok** (`/admin/stok`) - Manajemen stok dan gudang
- **Laporan** (`/admin/laporan`) - Laporan dan analisis data
- **Profil** (`/admin/profile`) - Pengaturan profil dan akun
- **Sign In** (`/auth/signin`) - Halaman login
- **Sign Up** (`/auth/signup`) - Halaman registrasi

## 🔧 Konfigurasi

### Environment Variables
Untuk konfigurasi tambahan, buat file `.env` di root project:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_NAME=Batik H.M. Akmal
```

### Menjalankan di Development Mode

```bash
npm start
```

### Build untuk Production

```bash
npm run build
```

File build akan tersedia di folder `build/`.

## 📱 Browser Support

Aplikasi ini mendukung browser modern terbaru:
- Chrome (versi terbaru)
- Firefox (versi terbaru)
- Safari (versi terbaru)
- Edge (versi terbaru)

## 🤝 Kontribusi

Kontribusi untuk project ini sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lisensi

Project ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## 👥 Tim

**Batik H.M. Akmal**
- Sistem Informasi Penjualan & Manajemen Stok

## 📞 Kontak

Untuk pertanyaan atau dukungan, silakan hubungi:
- Email: admin@batik-hmakmal.com
- Website: [Batik H.M. Akmal](https://batik-hmakmal.com)

## 🙏 Acknowledgments

- [Chakra UI](https://www.chakra-ui.com) - Open source ReactJS framework
- [ApexCharts.js](https://apexcharts.com) - Modern & Interactive Open-source charts
- [ReactJS](https://reactjs.org) - A popular JavaScript library for building user interfaces

---

**Sistem Informasi Penjualan & Manajemen Stok Batik H.M. Akmal** - Membantu UMKM Batik mengoptimalkan operasional bisnis dengan teknologi modern.
