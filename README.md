# Parroquia Cristo Rey - Sitio Web

Refactor del sitio con estructura modular de estilos, JavaScript separado y organización de imágenes por tipo.

## Estructura del proyecto

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── custom/
│   │       ├── tokens.css
│   │       ├── base.css
│   │       ├── layout.css
│   │       ├── components.css
│   │       └── responsive.css
│   ├── js/
│   │   └── app.js
│   └── img/
│       ├── branding/
│       ├── hero/
│       ├── pastorales/
│       ├── sections/
│       ├── social/
│       └── legacy/
└── Readme.txt
```

## Convención de CSS

- `tokens.css`: variables globales (colores, tipografías, spacing, radios, sombras).
- `base.css`: reset básico, tipografía global y estilos base de secciones.
- `layout.css`: estructura principal (header, hero, footer, distribución general).
- `components.css`: componentes reutilizables (cards, botones, listas, formularios).
- `responsive.css`: breakpoints y ajustes para tablet/móvil + `prefers-reduced-motion`.

Regla: no usar CSS inline ni etiquetas `<style>` en `index.html`.

## Convención de imágenes

- `assets/img/branding/`: logos, favicon, iconos institucionales.
- `assets/img/hero/`: imágenes del slider principal.
- `assets/img/pastorales/`: tarjetas de pastorales.
- `assets/img/sections/`: imágenes de secciones activas del sitio.
- `assets/img/social/`: recursos visuales de redes.
- `assets/img/legacy/`: imágenes antiguas/no usadas actualmente.

Regla de nombres: usar `kebab-case` y evitar espacios en nombres de archivo.

## Librerías externas (CDN)

- Bootstrap 5.3.3 (CSS/JS)
- Bootstrap Icons 1.11.3
- Swiper 11
- Google Fonts (`Itim`, `Poppins`)

## Cómo editar contenido

1. Textos y estructura: editar `index.html`.
2. Estilos: editar solo archivos en `assets/css/custom/`.
3. Comportamiento JS: editar `assets/js/app.js`.
4. Nuevas imágenes: colocarlas en la carpeta correspondiente dentro de `assets/img/`.

## Checklist de mantenimiento

- Verificar que no existan estilos inline: buscar `style=` o `<style>`.
- Verificar que no existan rutas rotas de imágenes.
- Mantener un solo import por librería (sin duplicados).
- Si cambias nombres de imágenes, actualizar sus referencias en `index.html`.

## Deploy estático

Este proyecto es estático. Puede publicarse en GitHub Pages, Netlify, Vercel o cualquier hosting de archivos.
