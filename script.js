/* ========================================
   THREEOFUS SPACE
   Interactive DOM & Event Handling
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* 1. FITUR DARK / LIGHT MODE TOGGLE (GLOBAL) */

    const themeToggleBtn = document.getElementById("theme-toggle");

    /* Mengecek preferensi tema yang tersimpan di localStorage */
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Mode Terang";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDarkMode = document.body.classList.contains("dark-mode");

            /* Update teks tombol & simpan state ke localStorage */
            if (isDarkMode) {
                themeToggleBtn.textContent = "☀️ Mode Terang";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggleBtn.textContent = "🌙 Mode Gelap";
                localStorage.setItem("theme", "light");
            }
        });
    }


    /* 2. FITUR MODAL POP-UP DETAIL BIO (HALAMAN ABOUT) */

    const bioModal = document.getElementById("bio-modal");
    const modalName = document.getElementById("modal-name");
    const modalNim = document.getElementById("modal-nim");
    const modalDesc = document.getElementById("modal-desc");
    const closeBtn = document.querySelector(".close-btn");
    const detailBtns = document.querySelectorAll(".btn-detail");

    /* Data biografi lengkap 3 anggota kelompok */
    const memberData = {
        afan: {
            name: "Zharfan Kasy'fillah",
            nim: "NIM: 25091397156",
            desc: "Project Lead & HTML Architect di ThreeOfUs Space. Bertanggung jawab atas struktur semantik HTML5, arsitektur repositori GitHub, serta penyusunan dokumentasi teknis SRS. Berfokus pada penulisan kode yang rapi, accessible, dan memenuhi standar W3C."
        },
        adia: {
            name: "Adia Dinara Ivorynda Malik",
            nim: "NIM: 25091397123",
            desc: "UI/UX Specialist & CSS Stylist di ThreeOfUs Space. Ahli dalam merancang layout responsif berbasis Flexbox & Grid, CSS Variables, serta estetika Modern Space. Berfokus pada pengalaman pengguna yang intuitif dan visual antarmuka yang menarik."
        },
        panji: {
            name: "Panji Elang Akhsani",
            nim: "NIM: 25091397136",
            desc: "JavaScript & Interactive Engineer di ThreeOfUs Space. Bertanggung jawab mengelola manipulasi DOM, event listener, validasi form, dan logika interaktif web client-side untuk menghidupkan antarmuka statis menjadi dinamis."
        }
    };

    /* Buka modal saat tombol "Detail Bio" diklik */
    if (detailBtns.length > 0 && bioModal) {
        detailBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const memberKey = btn.getAttribute("data-member");
                const data = memberData[memberKey];

                if (data) {
                    modalName.textContent = data.name;
                    modalNim.textContent = data.nim;
                    modalDesc.textContent = data.desc;
                    bioModal.classList.remove("hidden");
                }
            });
        });
    }

    /* Tutup modal lewat tombol silang (X) */
    if (closeBtn && bioModal) {
        closeBtn.addEventListener("click", () => {
            bioModal.classList.add("hidden");
        });
    }

    /* Tutup modal jika area di luar box modal diklik */
    if (bioModal) {
        window.addEventListener("click", (e) => {
            if (e.target === bioModal) {
                bioModal.classList.add("hidden");
            }
        });
    }


    /* 3. FITUR VALIDASI FORMULIR KONTAK (HALAMAN CONTACT) */

    const contactForm = document.getElementById("contact-form");
    const feedbackMsg = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); /* Mencegah reload halaman otomatis */

            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const messageInput = document.getElementById("message").value.trim();

            /* Regex pola validasi format email */
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nameInput || !emailInput || !messageInput) {
                feedbackMsg.style.color = "#e74c3c";
                feedbackMsg.textContent = "⚠️ Harap isi semua kolom formulir sebelum mengirim!";
                return;
            }

            if (!emailPattern.test(emailInput)) {
                feedbackMsg.style.color = "#e74c3c";
                feedbackMsg.textContent = "⚠️ Format email tidak valid! Masukkan email yang benar.";
                return;
            }

            /* Jika validasi sukses */
            feedbackMsg.style.color = "#2ecc71";
            feedbackMsg.textContent = "🎉 Pesan kamu berhasil dikirim! Terima kasih sudah menghubungi kami.";
            
            /* Mengosongkan isian form */
            contactForm.reset();
        });
    }
});
