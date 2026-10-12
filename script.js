/* =========================================================
   1. DARK / LIGHT MODE TOGGLE
   ========================================================= */
// Diterapkan langsung (sebelum DOM selesai) agar tidak berkedip.
(function applySavedTheme() {
  let theme = null;
  try { theme = localStorage.getItem("theme"); } catch (e) {}
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTeamModal();
  initContactForm();
});

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const root = document.documentElement;
  const updateLabel = () => {
    btn.textContent = root.getAttribute("data-theme") === "dark" ? "☀️ Light" : "🌙 Dark";
  };
  updateLabel();

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateLabel();
  });
}

/* =========================================================
   2. DOM MANIPULATION / MODAL DETAIL ANGGOTA TIM
   ========================================================= */
const teamMembers = [
  { name: "Andi Pratama", role: "Frontend Developer", bio: "Suka membangun antarmuka yang rapi dan responsif.", email: "andi@example.com" },
  { name: "Sinta Dewi", role: "UI/UX Designer", bio: "Fokus pada pengalaman pengguna dan desain yang konsisten.", email: "sinta@example.com" },
  { name: "Budi Santoso", role: "Backend Developer", bio: "Mengurus API, database, dan keamanan sistem.", email: "budi@example.com" }
];

function initTeamModal() {
  const overlay = document.getElementById("modal-overlay");
  const buttons = document.querySelectorAll("[data-member]");
  if (!overlay || buttons.length === 0) return;

  const closeBtn = overlay.querySelector(".modal-close");
  const avatar = document.getElementById("modal-avatar");
  const nameEl = document.getElementById("modal-name");
  const roleEl = document.getElementById("modal-role");
  const bioEl = document.getElementById("modal-bio");
  const emailEl = document.getElementById("modal-email");
  let lastFocused = null;

  function openModal(index) {
    const m = teamMembers[index];
    if (!m) return;
    avatar.textContent = m.name.charAt(0);
    nameEl.textContent = m.name;
    roleEl.textContent = m.role;
    bioEl.textContent = m.bio;
    emailEl.textContent = m.email;
    emailEl.href = "mailto:" + m.email;
    lastFocused = document.activeElement;
    overlay.classList.add("open");
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("open");
    if (lastFocused) lastFocused.focus();
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.member)));
  });
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal(); // klik area gelap
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });
}

/* =========================================================
   3. FORM VALIDATION (HALAMAN CONTACT)
   ========================================================= */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: form.elements["name"],
    email: form.elements["email"],
    message: form.elements["message"]
  };
  const successEl = document.getElementById("form-success");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const validators = {
    name: v => (v.trim() === "" ? "Nama wajib diisi." : ""),
    email: v => {
      if (v.trim() === "") return "Email wajib diisi.";
      if (!emailRegex.test(v.trim())) return "Format email tidak valid.";
      return "";
    },
    message: v => {
      if (v.trim() === "") return "Pesan tidak boleh kosong.";
      if (v.trim().length < 10) return "Pesan minimal 10 karakter.";
      return "";
    }
  };

  function validateField(key) {
    const input = fields[key];
    const error = validators[key](input.value);
    const wrapper = input.closest(".field");
    wrapper.classList.toggle("invalid", error !== "");
    wrapper.querySelector(".error-msg").textContent = error;
    return error === "";
  }

  // Validasi saat user meninggalkan kolom, dan koreksi langsung saat mengetik
  Object.keys(fields).forEach(key => {
    fields[key].addEventListener("blur", () => validateField(key));
    fields[key].addEventListener("input", () => {
      if (fields[key].closest(".field").classList.contains("invalid")) validateField(key);
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    successEl.textContent = "";

    const results = Object.keys(fields).map(validateField);
    const allValid = results.every(Boolean);

    if (!allValid) {
      const firstInvalid = form.querySelector(".field.invalid input, .field.invalid textarea");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Di sini kirim data ke server (fetch) jika sudah ada backend.
    successEl.textContent = "Terima kasih! Pesan Anda berhasil dikirim.";
    form.reset();
  });
}