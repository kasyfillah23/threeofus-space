/* ========================================
   THREEOFUS SPACE
   Interactive DOM & Event Handling
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTeamModal();
  initContactForm();
});

/* =========================================================
   1. FITUR DARK / LIGHT MODE TOGGLE (GLOBAL)
   ========================================================= */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");

  // Cek preferensi tema yang tersimpan di localStorage atau system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

  if (isDark) {
    document.body.classList.add("dark-mode");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    document.documentElement.setAttribute("data-theme", "light");
  }

  const updateLabel = () => {
    if (!themeToggleBtn) return;
    const activeDark = document.body.classList.contains("dark-mode");
    themeToggleBtn.textContent = activeDark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
  };

  updateLabel();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const activeDark = document.body.classList.contains("dark-mode");

      document.documentElement.setAttribute("data-theme", activeDark ? "dark" : "light");
      localStorage.setItem("theme", activeDark ? "dark" : "light");
      updateLabel();
    });
  }
}

/* =========================================================
   2. FITUR MODAL POP-UP DETAIL BIO (HALAMAN ABOUT)
   ========================================================= */
function initTeamModal() {
  const bioModal = document.getElementById("bio-modal");
  const modalName = document.getElementById("modal-name");
  const modalNim = document.getElementById("modal-nim");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.querySelector(".close-btn");
  const detailBtns = document.querySelectorAll(".btn-detail");

  if (!bioModal || detailBtns.length === 0) return;

  // Data biografi lengkap 3 anggota kelompok
  const memberData = {
    afaan: {
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

  const openModal = (memberKey) => {
    const data = memberData[memberKey];
    if (data) {
      modalName.textContent = data.name;
      modalNim.textContent = data.nim;
      modalDesc.textContent = data.desc;
      bioModal.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    bioModal.classList.add("hidden");
  };

  detailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const memberKey = btn.getAttribute("data-member");
      openModal(memberKey);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Tutup modal jika area di luar kotak modal diklik
  bioModal.addEventListener("click", (e) => {
    if (e.target === bioModal) {
      closeModal();
    }
  });

  // Tutup modal dengan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !bioModal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

/* =========================================================
   3. FITUR VALIDASI FORMULIR KONTAK (HALAMAN CONTACT)
   ========================================================= */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const feedbackMsg = document.getElementById("form-feedback");

  if (!contactForm || !feedbackMsg) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    // Regex pola validasi format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

    if (messageInput.length < 10) {
      feedbackMsg.style.color = "#e74c3c";
      feedbackMsg.textContent = "⚠️ Pesan minimal 10 karakter.";
      return;
    }

    // Jika validasi sukses
    feedbackMsg.style.color = "#2ecc71";
    feedbackMsg.textContent = "🎉 Pesan kamu berhasil dikirim! Terima kasih sudah menghubungi kami.";

    contactForm.reset();
  });
}