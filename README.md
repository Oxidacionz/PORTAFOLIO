<<<<<<< HEAD
# 🚀 Portafolio de Joseph Bracho

<div align="center">

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://oxidacionz.github.io/PORTAFOLIO/)
[![GitHub](https://img.shields.io/badge/GitHub-Oxidacionz-181717?logo=github)](https://github.com/Oxidacionz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-josephbrachoxz-0077B5?logo=linkedin)](https://www.linkedin.com/in/josephbrachoxz/)

**Desarrollador Full Stack | React • TypeScript • Python**

[Ver Demo](https://oxidacionz.github.io/PORTAFOLIO/) • [Reportar Bug](https://github.com/Oxidacionz/PORTAFOLIO/issues) • [Contacto](mailto:josephbrachovillanueva2@gmail.com)

</div>
# 🚀 Portafolio de Joseph Bracho

<div align="center">

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://oxidacionz.github.io/PORTAFOLIO/)
[![GitHub](https://img.shields.io/badge/GitHub-Oxidacionz-181717?logo=github)](https://github.com/Oxidacionz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-josephbrachoxz-0077B5?logo=linkedin)](https://www.linkedin.com/in/josephbrachoxz/)

**Desarrollador Full Stack | React • TypeScript • Python**

[Ver Demo](https://oxidacionz.github.io/PORTAFOLIO/) • [Reportar Bug](https://github.com/Oxidacionz/PORTAFOLIO/issues) • [Contacto](mailto:josephbrachovillanueva2@gmail.com)

</div>

---

## 👨‍💻 Sobre Mí

¡Hola! Soy **Joseph Bracho**, un desarrollador full stack apasionado por crear experiencias digitales modernas y eficientes. Con 28 años y una mentalidad de crecimiento continuo, me especializo en construir aplicaciones web escalables y hermosas.

🎯 **Mi Enfoque:**
- Desarrollo de aplicaciones completas con arquitectura limpia
- Experiencia de usuario excepcional y diseño moderno
- Código mantenible y buenas prácticas
- Aprendizaje continuo y adaptación a nuevas tecnologías

🌟 **Actualmente:**
- Buscando oportunidades en equipos innovadores
- Desarrollando proyectos personales con React y TypeScript
- Mejorando habilidades en desarrollo cloud-ready

---

## ✨ Características del Portafolio

- 🎨 **Diseño Moderno**: Interfaz limpia con efectos glassmorphism y animaciones suaves
- 🌓 **Modo Oscuro/Claro**: Tema adaptable según preferencias del usuario
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Build optimizado con Vite y Tailwind CSS
- 🎯 **Interactivo**: Modal de email con función de copiar al portapapeles
- 🎭 **Fondo Dinámico**: Animaciones de píxeles generativas

---

## 🛠️ Stack Tecnológico

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Herramientas
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Oxidacionz/PORTAFOLIO.git

# Navegar al directorio
cd PORTAFOLIO

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

---

## 📦 Despliegue en GitHub Pages (Automatizado)

Este repositorio incluye un workflow de GitHub Actions que construye y despliega el sitio a GitHub Pages cuando se hace push a la rama `master`.

- El workflow instala dependencias (`npm ci`), ejecuta `npm run typecheck` (verificación de tipos) y `npm run build`, y finalmente publica la carpeta `dist` en Pages.
- Para usar un dominio personalizado, añade un archivo `CNAME` con tu dominio dentro de la carpeta `public/` y súbelo al repositorio (será copiado a `dist/`).
	- He incluido un `public/CNAME.example` como plantilla. Renombralo a `CNAME` y coloca tu dominio (por ejemplo `midominio.com`) si quieres usar un dominio personalizado.
	- Añadí `public/404.html` para facilitar el comportamiento SPA en GitHub Pages (redirige al `index` cuando hay rutas de cliente). También se genera `public/robots.txt`.
- Si prefieres desplegar con la herramienta local `gh-pages`, existe el script `npm run deploy` que usa `gh-pages -d dist`.

Permisos y ajustes en GitHub:
- En `Settings → Pages` revisa que la fuente está configurada según tu preferencia (Actions / branch). El workflow actual publica usando Pages Actions.
- El workflow requiere los permisos de `pages: write` para publicar; la action usa `GITHUB_TOKEN` automáticamente.

Si quieres que despliegue en otra rama o bajo otra configuración dime y lo ajusto.

---

## ✅ Checklist final antes del despliegue

Sigue esta lista para dejar el repositorio en un estado cercano al 100% antes de publicar visualmente:

- [ ] Confirmar que la rama de despliegue es `master` (o cambiar en `.github/workflows/deploy.yml`).
- [ ] Revisar GitHub → Settings → Pages: permitir que Actions publique y confirmar `pages:write` permisos en Actions settings.
- [ ] (Opcional) Añadir `public/CNAME` con tu dominio y asegurarte de que el DNS apunta al dominio de GitHub Pages.
- [ ] Verificar que `public/404.html` funciona correctamente para rutas de SPA.
- [ ] Confirmar `public/robots.txt` y `public/sitemap.xml` (ya añadidos) — si quieres más rutas, puedo generarlas automáticamente.
- [ ] Revisar logs de GitHub Actions tras el push para asegurarse de que `npm run typecheck` y `npm run build` pasan correctamente.
- [ ] Probar la URL de Pages (https://oxidacionz.github.io/PORTAFOLIO/) y revisar que no hay 404s para assets en la consola del navegador.
- [ ] (Opcional) Añadir `tsc --noEmit` como check obligatorio en CI branch protection o pull request checks.

Si quieres que ejecute alguno de estos pasos automáticamente (por ejemplo generar un `sitemap` con todas las rutas del proyecto, añadir `CNAME` con tu dominio, o incluir ESLint en CI), dime cuál y lo hago.

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Previsualiza build de producción
npm run deploy   # Despliega a GitHub Pages
```

---

## 📂 Estructura del Proyecto

```
PORTAFOLIO/
├── components/
│   ├── atoms/          # Componentes básicos reutilizables
│   ├── molecules/      # Componentes compuestos
│   └── organisms/      # Componentes complejos
├── services/           # Servicios y APIs
├── public/             # Archivos estáticos
├── index.css           # Estilos globales con Tailwind
├── App.tsx             # Componente principal
└── vite.config.ts      # Configuración de Vite
```

---

## 🎨 Características Destacadas

### 🖼️ Carrusel de Proyectos
Navegación fluida entre proyectos con animaciones suaves y diseño card moderno.

### 📜 Certificaciones
Visualización elegante de certificados profesionales con enlaces directos.

### 💼 Tecnologías
Grid interactivo mostrando el stack tecnológico con iconos y efectos hover.

### 📧 Modal de Contacto
Sistema de contacto mejorado con:
- Visualización del email
- Botón de copiar al portapapeles
- Enlace directo a cliente de correo
- Diseño responsive y accesible

---

## 🌐 Demo en Vivo

Visita mi portafolio en: **[oxidacionz.github.io/PORTAFOLIO](https://oxidacionz.github.io/PORTAFOLIO/)**

---

## 📬 Contacto

¿Interesado en colaborar o tienes alguna pregunta?

- 📧 Email: [josephbrachovillanueva2@gmail.com](mailto:josephbrachovillanueva2@gmail.com)
- 💼 LinkedIn: [josephbrachoxz](https://www.linkedin.com/in/josephbrachoxz/)
- 🐙 GitHub: [Oxidacionz](https://github.com/Oxidacionz)
- 📘 Facebook: [oxidacionze](https://www.facebook.com/oxidacionze)
- 📸 Instagram: [josephbrachovillanueva](https://www.instagram.com/josephbrachovillanueva/)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar este código como inspiración para tu propio portafolio.

---

<div align="center">

**Hecho con ❤️ por Joseph Bracho**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

</div>
