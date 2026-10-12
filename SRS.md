```markdown
# Software Requirements Specification (SRS)
## Proyek Website Profile "ThreeOfUsSpace"

**Mata Kuliah:** Pemrograman Web  
**Program Studi:** D4 Manajemen Informatika - Universitas Negeri Surabaya  
**Dosen Pengampu:** Faris Abdi El Hakim, S.Kom., M.Tr.Kom.  
**Tanggal:** 12 Oktober 2026  

---

### 1. Pendahuluan
#### 1.1 Tujuan
Dokumen SRS ini disusun untuk mengidentifikasi, merancang, dan mendokumentasikan seluruh kebutuhan fungsional maupun non-fungsional dalam pembangunan website profil "ThreeOfUsSpace" kami.

#### 1.2 Lingkup Masalah
Aplikasi web ini mencakup halaman informasi profil kelompok, keahlian teknis, portofolio profil individu 3 anggota, serta formulir kontak interaktif yang dapat diakses secara *online* melalui domain GitHub Pages.

---

### 2. Deskripsi Umum
#### 2.1 Perspektif Produk
"ThreeOfUsSpace" adalah website *front-end* berbasis *Client-Side Programming* yang menggunakan kombinasi HTML5, CSS3, dan Vanilla JavaScript tanpa bantuan *framework* luar.

#### 2.2 Karakteristik Pengguna
- **Pengguna Umum / Pengunjung:** Dosen, mahasiswa, atau pihak luar yang ingin melihat profil dan informasi kontak tim.
- **Pengembang (Kelompok 7):** Pemilik proyek yang mengelola pembaruan kode pada repositori GitHub.

#### 2.3 Batasan Sistem
- Sistem berjalan secara *client-side* tanpa pemrosesan *database* *back-end*.
- Fitur pengiriman pesan pada formulir kontak diproses menggunakan validasi JavaScript berbasis simulasi *feedback* DOM.

---

### 3. Kebutuhan Fungsional (Functional Requirements)

| Kode FR | Nama Fitur | Deskripsi Kebutuhan |
| :--- | :--- | :--- |
| **FR-01** | Navigasi Multi-Page | Sistem wajib menyediakan menu navigasi antarhalaman yang konsisten (`index.html`, `about.html`, `contact.html`). |
| **FR-02** | Mode Gelap / Terang | Sistem dapat beralih tema warna (*Light/Dark Mode*) secara instant saat pengguna menekan tombol sakelar. |
| **FR-03** | Layout Profil Scrolling | Halaman *About Us* menampilkan profil 3 anggota tim secara berurutan dengan tata letak berganti arah (*alternate flex*). |
| **FR-04** | Modal Detail Biografi | Sistem dapat menampilkan jendela *pop-up modal* berisi rincian biografi anggota tim saat tombol "Detail Bio" diklik. |
| **FR-05** | Validasi Form Kontak | Sistem mengecek keabsahan input nama, email, dan pesan pada halaman kontak, serta menampilkan pesan peringatan atau konfirmasi. |

---

### 4. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| Kode NFR | Parameter | Spesifikasi Standar |
| :--- | :--- | :--- |
| **NFR-01** | *Usability* & Responsivitas | Tampilan web harus dapat menyesuaikan ukuran layar secara otomatis di perangkat HP (≤600px), Tablet (≤900px), dan Desktop (>900px). |
| **NFR-02** | Performa | Waktu muat halaman harus cepat (<2 detik) karena seluruh aset script dan style dimuat secara *client-side*. |
| **NFR-03** | *Maintainability* | Kode HTML, CSS, dan JS wajib dipisah dalam file modular serta ditulis dengan identasi yang rapi. |
| **NFR-04** | Ketersediaan (*Deployment*) | Website wajib di-hosting dan dapat diakses publik selama 24/7 melalui GitHub Pages. |
