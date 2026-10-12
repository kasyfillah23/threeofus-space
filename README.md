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

Dokumentasi ini disusun untuk menjelaskan implementasi teknis dari elemen HTML, styling CSS, dan fungsi JavaScript yang digunakan pada repositori ini.

---

### 1. Struktur & Pengorganisasian HTML
Struktur HTML dibangun menggunakan HTML5 semantik sesuai standar W3C untuk menjamin struktur dokumen yang rapi, *accessible*, dan terorganisir di 3 file utama (`index.html`, `about.html`, `contact.html`):
- **Tag Semantik Utama:**
  - `<header>` & `<nav>`: Digunakan secara konsisten di seluruh halaman sebagai area navigasi utama, logo tim `ThreeOfUsSpace`, serta tempat sakelar tema `#theme-toggle`.
  - `<main>` & `<section>`: Membagi area konten utama secara hierarkis (misalnya `.hero`, `.skills-overview`, `.member-card`, dan `.contact-section`).
  - `<footer>`: Menyajikan informasi hak cipta institusi secara seragam di bagian bawah dokumen.
- **Pengorganisasian Halaman:**
  - `index.html`: Menggunakan elemen `.hero` sebagai salam pembuka dan `.grid-container` berisi kartu elemen untuk ikhtisar keahlian tim.
  - `about.html`: Mengorganisasi profil 3 anggota tim dalam blok `<section class="member-card">`. Penggunaan kombinasi kelas `.member-card.reverse` membuat susunan foto dan biografi tampil selang-seling secara estetis.
  - `contact.html`: Menggunakan elemen `<form id="contact-form">` yang memuat tag `<input>`, `<textarea>`, dan `<button type="submit">` lengkap dengan atribut `id` unik untuk diakses oleh skrip validasi.
- **Elemen Modal Pop-up (`#bio-modal`):** Ditempatkan di bagian bawah `about.html` sebagai wadah kosong yang siap disuntikkan data biografi interaktif via DOM JavaScript.

---

### 2. Penerapan Desain & Responsivitas CSS
Desain visual dibangun secara terpisah pada file `style.css` dengan menerapkan prinsip responsif dan estetika *Modern Space*:
- **CSS Variables (`:root`):**
  Menggunakan variabel global (seperti `--primary`, `--bg`, `--surface`, `--text`) untuk mengelola skema warna, durasi transisi, dan bayangan (*box-shadow*). Hal ini mempermudah sistem pergantian tema secara terpusat.
- **Layouting Flexbox (`display: flex`):**
  - Diterapkan pada `<header>` untuk meratakan logo, menu navigasi, dan tombol sakelar tema secara horizontal (`justify-content: space-between`).
  - Diterapkan pada `.member-card` untuk menyajikannya secara sejajar (foto di samping teks biografi).
  - Diterapkan pada `.action-buttons` agar tombol "Detail Bio" dan link "Instagram" tersusun rapi.
- **Layouting CSS Grid (`display: grid`):**
  - Diterapkan pada `.grid-container` di halaman Beranda dengan properti `grid-template-columns: repeat(3, minmax(0, 1fr))` untuk membagi 3 kartu keahlian secara simetris dan presisi.
- **Responsivitas Layar (Media Queries):**
  - **Desktop (>900px):** Menampilkan layout penuh (3 kolom Grid dan Flexbox horizontal).
  - **Tablet (≤900px):** Menyesuaikan *padding*, memperkecil *font*, dan mengubah Grid menjadi 2 kolom.
  - **Mobile (≤600px):** Mengubah susunan Grid menjadi 1 kolom tumpuk, mereset Flexbox kartu profil menjadi vertikal (`flex-direction: column`), serta menata tombol agar memenuhi lebar layar.
- **Efek Visual & Efek Khusus:**
  - Navigasi melayang menggunakan `position: sticky` dengan efek transparan `backdrop-filter: blur(14px)`.
  - Transisi halus (`transition: 0.3s ease`) dan transformasi posisi (`transform: translateY()`) saat elemen kartu atau tombol disorot *cursor* (*hover*).

---

### 3. Fungsionalitas & Interaktivitas JavaScript
Seluruh logika interaksi pada web dikelola secara eksplisit pada file `script.js` menggunakan Vanilla JavaScript *Client-Side*:
- **Sakelar Tema (Dark / Light Mode Toggle):**
  - Mengikat *Event Listener* `click` pada tombol `#theme-toggle`.
  - Memanipulasi atribut `class` pada `document.body` menggunakan metode `classList.toggle('dark-mode')`.
  - Mengubah teks dan ikon tombol secara real-time berdasarkan status tema aktif.
- **Manipulasi DOM & Event Handling (Modal Pop-up Detail Bio):**
  - Menangkap seluruh tombol dengan kelas `.btn-detail` menggunakan `querySelectorAll()`.
  - Saat tombol diklik, JavaScript membaca atribut `data-member`, mengambil data biografi yang sesuai dari objek data internal, lalu menyuntikkan isi teks secara dinamis ke elemen `#modal-name`, `#modal-nim`, dan `#modal-desc` menggunakan `.innerText`.
  - Menghapus kelas `.hidden` pada elemen `#bio-modal` untuk menampilkan jendela pop-up ke layar.
  - Jendela pop-up dapat ditutup kembali saat pengguna menekan tombol `.close-btn` atau mengklik area di luar kotak modal.
- **Validasi Formulir Kontak (Real-time Feedback):**
  - Menangkap *event submission* form (`#contact-form`) dan menghentikan aksi bawaan browser menggunakan `e.preventDefault()`.
  - Memeriksa nilai dari *input* Nama, Email, dan Pesan.
  - Jika terdapat kolom yang kosong atau format email tidak sesuai, JavaScript menampilkan pesan peringatan berwarna merah pada `#form-feedback`.
  - Jika validasi berhasil, sistem menampilkan notifikasi sukses "Pesan berhasil dikirim!" dan mengosongkan kembali seluruh isi form.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal
*Clone* repositori ini ke komputer lokal kamu:
   ```bash
   git clone https://github.com/kasyfillah23/threeofus-space.git
