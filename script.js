/* =========================================================
   Centro Ecoturístico El Jícaro – script.js
   Funcionalidades:
     1. Navbar: scroll + menú hamburguesa
     2. Smooth scroll con anclas
     3. Animaciones al hacer scroll (AOS manual)
     4. Validación de formulario con JS
     5. Año dinámico en el footer
     6. Botón "volver arriba"
     7. Fecha mínima en campo de fecha
   ========================================================= */

"use strict";

/* ─────────────────────────────────────────
   1. DOM REFERENCES
───────────────────────────────────────── */
const navbar      = document.getElementById("navbar");
const hamburger   = document.getElementById("hamburger");
const navLinks    = document.getElementById("navLinks");
const backTop     = document.getElementById("backTop");
const reservaForm = document.getElementById("reservaForm");
const formSuccess = document.getElementById("formSuccess");
const resetFormBtn= document.getElementById("resetFormBtn");
const yearSpan    = document.getElementById("year");

/* ─────────────────────────────────────────
   2. AÑO DINÁMICO EN FOOTER  (DOM interaction ✔)
───────────────────────────────────────── */
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────────
   3. NAVBAR – scroll & hamburger
───────────────────────────────────────── */
function onScroll() {
  // Clase "scrolled" cuando se ha bajado más de 50px
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  // Botón "volver arriba"
  backTop.classList.toggle("visible", window.scrollY > 400);
}
window.addEventListener("scroll", onScroll, { passive: true });

// Hamburger – abrir / cerrar menú
hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
  }
});

/* ─────────────────────────────────────────
   4. BOTÓN VOLVER ARRIBA
───────────────────────────────────────── */
backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ─────────────────────────────────────────
   5. ANIMACIONES AL SCROLL (AOS manual)  (DOM interaction ✔)
───────────────────────────────────────── */
const aosElements = document.querySelectorAll("[data-aos]");

const aosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Retraso escalonado para tarjetas hermanas
        const siblings = [...entry.target.parentElement.querySelectorAll("[data-aos]")];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.09}s`;
        entry.target.classList.add("aos-animate");
        aosObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

aosElements.forEach(el => aosObserver.observe(el));

/* ─────────────────────────────────────────
   6. FECHA MÍNIMA EN FORMULARIO  (DOM interaction ✔)
───────────────────────────────────────── */
const fechaInput = document.getElementById("fecha");
if (fechaInput) {
  const today = new Date();
  // Formato YYYY-MM-DD
  const yyyy = today.getFullYear();
  const mm   = String(today.getMonth() + 1).padStart(2, "0");
  const dd   = String(today.getDate()).padStart(2, "0");
  fechaInput.min = `${yyyy}-${mm}-${dd}`;
}

/* ─────────────────────────────────────────
   7. VALIDACIÓN DEL FORMULARIO
───────────────────────────────────────── */

/** Muestra un error en un campo */
function showError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`error-${fieldId}`);
  if (field)  field.classList.add("error");
  if (field)  field.classList.remove("success");
  if (error)  error.textContent = msg;
}

/** Limpia el error de un campo y lo marca como válido */
function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`error-${fieldId}`);
  if (field)  { field.classList.remove("error"); field.classList.add("success"); }
  if (error)  error.textContent = "";
}

/** Validaciones individuales */
const validators = {
  nombre(value) {
    if (!value.trim())               return "El nombre es obligatorio.";
    if (value.trim().length < 3)     return "Ingresa al menos 3 caracteres.";
    if (!/^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s'-]+$/i.test(value.trim()))
                                     return "Solo se permiten letras y espacios.";
    return null;
  },
  email(value) {
    if (!value.trim())               return "El correo es obligatorio.";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRe.test(value.trim())) return "Ingresa un correo electrónico válido.";
    return null;
  },
  telefono(value) {
    if (!value.trim())               return "El teléfono es obligatorio.";
    const cleaned = value.replace(/[\s\-()]/g, "");
    if (!/^\d{7,15}$/.test(cleaned)) return "Ingresa un número válido (7-15 dígitos).";
    return null;
  },
  cabana(value) {
    if (!value)                      return "Selecciona un tipo de cabaña.";
    return null;
  },
  fecha(value) {
    if (!value)                      return "Selecciona la fecha de llegada.";
    const chosen = new Date(value + "T00:00:00");
    const today  = new Date(); today.setHours(0,0,0,0);
    if (chosen < today)              return "La fecha no puede ser en el pasado.";
    return null;
  }
};

const fieldIds = ["nombre", "email", "telefono", "cabana", "fecha"];

/** Valida un campo individual y retorna true si es válido */
function validateField(id) {
  const field    = document.getElementById(id);
  const errorMsg = validators[id](field.value);
  if (errorMsg) {
    showError(id, errorMsg);
    return false;
  }
  clearError(id);
  return true;
}

/** Validación en tiempo real al perder foco */
fieldIds.forEach(id => {
  const field = document.getElementById(id);
  if (!field) return;

  field.addEventListener("blur", () => validateField(id));
  field.addEventListener("input", () => {
    // Si ya tiene error, re-validar en tiempo real
    if (field.classList.contains("error")) validateField(id);
  });
});

/** Submit del formulario */
if (reservaForm) {
  reservaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar todos los campos
    const allValid = fieldIds.map(id => validateField(id)).every(Boolean);

    if (!allValid) {
      // Scroll al primer error
      const firstError = reservaForm.querySelector(".error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        firstError.focus();
      }
      return;
    }

    // Simular envío (animación)
    const submitBtn  = document.getElementById("submitBtn");
    const btnText    = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");

    submitBtn.disabled  = true;
    btnText.hidden      = true;
    btnLoading.hidden   = false;

    setTimeout(() => {
      // Mostrar éxito
      reservaForm.hidden  = true;
      formSuccess.hidden  = false;
      submitBtn.disabled  = false;
      btnText.hidden      = false;
      btnLoading.hidden   = true;
    }, 1600);
  });
}

/** Resetear formulario */
if (resetFormBtn) {
  resetFormBtn.addEventListener("click", () => {
    reservaForm.reset();
    formSuccess.hidden  = true;
    reservaForm.hidden  = false;

    // Limpiar estilos de validación
    fieldIds.forEach(id => {
      const field = document.getElementById(id);
      const error = document.getElementById(`error-${id}`);
      if (field) { field.classList.remove("error", "success"); }
      if (error)  error.textContent = "";
    });
  });
}

/* ─────────────────────────────────────────
   8. SMOOTH SCROLL para anclas  (por si acaso el navegador no lo soporta)
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset  = navbar ? navbar.offsetHeight : 70;
      const top     = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

/* ─────────────────────────────────────────
   9. NAVBAR activa enlace según sección visible
───────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkEls.forEach(link => {
          link.style.color = "";
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.style.color = "var(--verde-accent)";
          }
        });
      }
    });
  },
  { rootMargin: `-${(navbar ? navbar.offsetHeight : 70) + 10}px 0px -60% 0px` }
);

sections.forEach(sec => sectionObserver.observe(sec));

/* ─────────────────────────────────────────
   10. INICIALIZACIÓN
───────────────────────────────────────── */
onScroll(); // Aplicar estado inicial del navbar
