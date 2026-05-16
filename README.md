# 🌿 Centro Ecoturístico El Jícaro – Landing Page

> Landing page oficial de las **Cabañas El Jícaro**, ubicadas en **Atiquizaya, Ahuachapán, El Salvador**.  
> Desarrollada con HTML5, CSS3 y JavaScript puro (Vanilla JS). Publicada en GitHub Pages.

---

## 🔗 Demo en vivo

**[Ver sitio →](https://josenicolastrejo-commits.github.io/el-jicaro/)**  
*(Reemplaza `TU-USUARIO` con tu nombre de usuario en GitHub)*

---

## 📸 Vista general

| Sección | Imagen utilizada | Descripción |
|---|---|---|
| **Hero** | `Imagen3.jpg` – Vista aérea del centro | Fondo fullscreen con título, subtítulo y botones CTA |
| **Navbar** | — | Fija, con anclas a secciones y menú hamburguesa en móvil |
| **Nosotros** | `Imagen6.jpg` – Rancho sobre el lago | Descripción del negocio con foto real y lista de atributos |
| **Servicios** | `Cabañas_Dúo.jpg`, `Imagen4.jpg`, `Imagen8.jpg`, `Imagen7.jpg`, `Imagen5.jpg`, `Imagen3.jpg` | 6 tarjetas con foto, CSS Grid y hover effects |
| **Cabañas** | `Cabañas_Dúo.jpg` / `Cabañas_familiar.jpg` | Dos opciones: Cabaña Dúo y Cabaña Familiar con fotos reales |
| **Formulario** | — | Validación completa con JavaScript |
| **Footer** | — | Redes sociales, año dinámico y créditos |

---

## 🗂️ Estructura del proyecto

```
el-jicaro/
├── index.html               → Estructura HTML5 semántica
├── styles.css               → Estilos CSS3 con variables y responsive design
├── script.js                → Lógica JavaScript: validación, DOM, animaciones
├── README.md                → Documentación del proyecto
└── img/                     → Fotografías reales del centro
    ├── Imagen3.jpg          → Hero + tarjeta Ubicación
    ├── Imagen4.jpg          → Tarjeta Experiencia Ecoturística (piscinas)
    ├── Imagen5.jpg          → Tarjeta Laberinto Natural
    ├── Imagen6.jpg          → Sección Nosotros (rancho sobre el lago)
    ├── Imagen7.jpg          → Tarjeta Escapada Romántica (torre mirador)
    ├── Imagen8.jpg          → Tarjeta Planes Familiares (tirolesa)
    ├── Cabañas_Dúo.jpg      → Tarjeta Cabañas + Sección Cabañas Dúo
    └── Cabañas_familiar.jpg → Sección Cabaña Familiar
```

---

### Secciones obligatorias
- [x] **Hero** – Foto real a pantalla completa (`Imagen3.jpg`), título con Playfair Display, subtítulo y dos CTA buttons
- [x] **Navbar** – Fija (`position: fixed`), enlaces ancla (`href="#seccion"`), menú hamburguesa animado para móvil
- [x] **Nosotros** – Descripción del negocio con foto real del rancho (`Imagen6.jpg`) y lista de atributos
- [x] **Servicios** – 6 tarjetas con fotos reales usando `CSS Grid` (`repeat(3, 1fr)`) y hover effects
- [x] **Formulario** – Validación completa con JavaScript: nombre, email, teléfono, tipo de cabaña, fecha
- [x] **Footer** – Redes sociales (Facebook, Instagram, WhatsApp), año dinámico con JS, créditos

### Funcionalidades JavaScript
- [x] **Validación de formulario** con mensajes de error en tiempo real
- [x] **Manipulación del DOM** – año dinámico, clases de scroll, estados de formulario
- [x] **IntersectionObserver** – animaciones AOS (Animate On Scroll) al hacer scroll
- [x] **Navbar activa** – resalta el enlace de la sección visible
- [x] **Fecha mínima** – establece dinámicamente el atributo `min` del input de fecha
- [x] **Menú hamburguesa** – toggle de clase, aria-expanded, cierre al clic afuera
- [x] **Botón volver arriba** – visible al bajar 400px

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura (`header`, `nav`, `section`, `footer`) |
| CSS3 Custom Properties | Variables de color, tipografía y espaciado |
| CSS Grid | Layout de servicios (`repeat(3,1fr)`) y footer |
| Flexbox | Navbar, tarjetas de cabañas, contacto |
| CSS Animations | Animaciones del hero, hover effects, scroll |
| JavaScript ES6+ | Validación, DOM, IntersectionObserver, eventos |
| Google Fonts | Playfair Display + Nunito |
| Fotografías propias | Imágenes reales del Centro Ecoturístico El Jícaro |
| GitHub Pages | Despliegue en producción |

---

## 📦 Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/josenicolastrejo-commits.github.io/el-jicaro.git

# 2. Entrar a la carpeta
cd el-jicaro

# 3. Abrir en el navegador
# Opción A: doble clic en index.html
# Opción B: con Live Server en VS Code (recomendado)
# Opción C: con Python
python -m http.server 8000
# → Abrir http://localhost:8000
```

> ⚠️ **Nota:** Usar Live Server o servidor local es recomendable para que las imágenes de la carpeta `img/` carguen correctamente.

---

## 🚀 Despliegue en GitHub Pages

### Paso 1 – Inicializar y subir el repositorio

```bash
# Inicializar Git en la carpeta del proyecto
git init

# Agregar todos los archivos (incluida la carpeta img/)
git add .

# Primer commit
git commit -m "feat: estructura inicial del proyecto El Jícaro"

# Conectar con GitHub (reemplaza TU-USUARIO y el nombre del repo)
git remote add origin https://github.com/TU-USUARIO/el-jicaro.git
git branch -M main
git push -u origin main
```

### Paso 2 – Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** (Configuración)
3. Menú lateral → **Pages**
4. En *Branch*, selecciona `main` → carpeta `/ (root)`
5. Clic en **Save**
6. En 1-2 minutos tu sitio estará en: `https://TU-USUARIO.github.io/el-jicaro`

---

## 📝 Historial de commits documentados

```
commit 1 – feat: estructura inicial HTML5 con secciones base
commit 2 – feat: hero section fullscreen con foto real y animaciones CSS
commit 3 – feat: navbar fija con anclas y menú hamburguesa responsive
commit 4 – feat: secciones nosotros, servicios y cabañas con CSS Grid
commit 5 – feat: formulario de reserva con validación JavaScript completa
commit 6 – feat: footer con redes sociales y año dinámico con JS
```

# Commit 1 – Estructura inicial
git add index.html
git commit -m "feat: estructura inicial HTML5 con secciones base"

# Commit 2 – Hero con foto real
git add styles.css
git commit -m "feat: hero section fullscreen con foto real y animaciones CSS"

# Commit 3 – Navbar
git add index.html styles.css
git commit -m "feat: navbar fija con anclas y menú hamburguesa"

# Commit 4 – Secciones de contenido
git add index.html styles.css
git commit -m "feat: secciones nosotros, servicios y cabañas con grid"

# Commit 5 – Formulario y JS
git add index.html script.js
git commit -m "feat: formulario validado con JavaScript vanilla"

# Commit 6 – Footer
git add index.html styles.css
git commit -m "feat: footer con redes sociales y año dinámico con JS"

# Commit 7 – Imágenes reales
git add img/ index.html styles.css
git commit -m "feat: integración de fotografías reales del centro ecoturístico"

# Commit 8 – Responsive
git add styles.css
git commit -m "fix: responsive design para tablet (900px) y móvil (640px)"

# Commit 9 – README final
git add README.md
git commit -m "docs: README actualizado con estructura de imágenes y commits"

# Push final
git push origin main
```

---

## 🎨 Paleta de colores

| Variable CSS | Color | Uso |
|---|---|---|
| `--verde-oscuro` | `#1a3c2e` | Navbar, footer, textos principales |
| `--verde-medio` | `#2d6a4f` | Botones primarios, check marks |
| `--verde-claro` | `#52b788` | Acentos, bordes activos |
| `--verde-accent` | `#74c69d` | Hover, badges del hero |
| `--tierra` | `#6b4f3a` | Toques tierra |
| `--arena` | `#f4e4c1` | Fondos cálidos |
| `--crema` | `#fdf6ec` | Fondo principal |

---

## 🔍 Validación JavaScript – Campos del formulario

| Campo | Validación |
|---|---|
| **Nombre** | Obligatorio, mínimo 3 caracteres, solo letras y espacios |
| **Email** | Obligatorio, formato válido con `@` y dominio |
| **Teléfono** | Obligatorio, 7-15 dígitos (acepta guiones y espacios) |
| **Tipo de cabaña** | Obligatorio, seleccionar una opción |
| **Fecha de llegada** | Obligatorio, no puede ser fecha pasada |
| **Mensaje** | Opcional |

---

## 📱 Responsive Breakpoints

| Breakpoint | Cambios |
|---|---|
| `< 900px` (tablet) | Grid de servicios 2 columnas, nosotros en columna, footer 2 cols |
| `< 640px` (móvil) | Menú hamburguesa activo, grid 1 columna, form-row en columna, footer 1 col |

---

## 🖼️ Créditos fotográficos

Todas las fotografías utilizadas son propiedad del **Centro Ecoturístico El Jícaro** y fueron tomadas en sus instalaciones ubicadas en Atiquizaya, Ahuachapán, El Salvador.

---

## 👨‍💻 Créditos de desarrollo

Desarrollado como proyecto educativo para integrar HTML5, CSS3, JavaScript y GitHub Pages.

**Centro Ecoturístico El Jícaro** · Atiquizaya, Ahuachapán, El Salvador 🇸🇻

---

*© 2026 El Jícaro – Todos los derechos reservados.*
