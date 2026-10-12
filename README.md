# ThreeOfUsSpace - Web Profile Interactive 🚀

Website profil kelompok interaktif ini kami kembangkan menggunakan HTML5 semantik, CSS3 modern (Flexbox, Grid, & CSS Variables), serta Vanilla JavaScript untuk memenuhi Tugas Proyek UTS Mata Kuliah Pemrograman Web (D4 Manajemen Informatika UNESA).

---

## 🔗 Link Live Website & Domain
- **URL Domain (GitHub Pages):** [https://kasyfillah23.github.io/threeofus-space/](https://kasyfillah23.github.io/threeofus-space/)
- **Repositori GitHub:** [https://github.com/kasyfillah23/threeofus-space](https://github.com/kasyfillah23/threeofus-space)

---

## 👥 Identitas Anggota Kelompok 7
| Nama | NIM | Peran Utama |
| :--- | :--- | :--- |
| **Zharfan Kasy'fillah** | `25091397156` | Project Lead, HTML Architect & Git Specialist |
| **Adia Dinara Ivorynda Malik** | `25091397123` | UI/UX Designer, CSS Stylist & Responsive Layouting |
| **Panji Elang Akhsani** | `25091397136` | JavaScript Developer, DOM Manipulation & Event Handling |

---

## 📑 Penjelasan Kode & Arsitektur Sistem

### 1. Penjelasan Struktur HTML
Struktur HTML dibangun secara semantik sesuai standar W3C untuk kemudahan aksesibilitas dan kemudahan pembacaan kode:
- **`<header>` & `<nav>`:** Wadah navigasi utama yang konsisten di 3 halaman (`index.html`, `about.html`, `contact.html`) beserta tombol sakelar tema.
- **`<main>` & `<section>`:** Mengelompokkan konten secara hirarkis, seperti `.hero`, `.skills-overview`, `.member-card`, dan `.contact-section`.
- **`<footer>`:** Bagian kaki halaman yang berisi hak cipta dan informasi institusi.
- **`<form>`:** Form interaktif di halaman kontak yang dilengkapi elemen `<input>`, `<textarea>`, dan `<button>`.
- **Modal Container (`#bio-modal`):** Elemen khusus yang disiapkan untuk menampung *pop-up* detail biografi anggota.

### 2. Penjelasan Desain CSS
Desain visual dibangun terpisah pada file `style.css` menggunakan prinsip responsif dan estetika *Modern Space*:
- **CSS Variables (`:root`):** Menyimpan skema warna, bayangan, font, dan durasi transisi agar konsisten dan mempermudah implementasi Dark Mode.
- **CSS Flexbox (`display: flex`):** Mengatur tata letak 1 dimensi pada navigasi, tombol interaktif, dan kartu profil anggota halaman About.
- **CSS Grid (`display: grid`):** Mengatur tata letak 2 dimensi pada kartu fokus keahlian di halaman Beranda (`grid-template-columns: repeat(3, 1fr)`).
- **Media Queries (`@media`):** Menjamin responsivitas halaman di berbagai ukuran layar: Desktop (>900px), Tablet (≤900px), dan Mobile (≤600px).
- **Positioning & Backdrop Filter:** Menggunakan `position: sticky` pada header serta `backdrop-filter: blur()` pada *modal pop-up*.

### 3. Penjelasan Fungsionalitas JavaScript
Interaksi dinamis dikelola penuh melalui file `script.js`:
- **Dark / Light Mode Toggle:** Memanfaatkan *Event Handling* `click` pada tombol `#theme-toggle` untuk menambah/menghapus *class* `.dark-mode` pada elemen `<body>`.
- **DOM Manipulation (Modal Pop-up Bio):** Menangkap *event click* pada tombol `.btn-detail` untuk membaca atribut `data-member`, kemudian menyuntikkan data bio secara dinamis ke dalam elemen `#bio-modal`.
- **Form Validation:** Memvalidasi input nama, email, dan pesan pada form kontak sebelum dikirim, serta menampilkan notifikasi *feedback* secara *real-time* tanpa *reload* halaman.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal
*Clone* repositori ini ke komputer lokal kamu:
   ```bash
   git clone [https://github.com/kasyfillah23/threeofus-space.git](https://github.com/kasyfillah23/threeofus-space.git)
