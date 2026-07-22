# Emiliano Leal — Sitio oficial

Sitio de una sola página para Emiliano Leal, compositor e intérprete de regional
mexicano originario de Colima, México.

## Qué resuelve

Un solo enlace, pensado para la biografía de Instagram, que reúne:

- Catálogo completo de música (reproductor de Spotify + enlaces por sencillo)
- Diez videos reproducibles sin salir de la página
- Colaboraciones con El Conjunto Fénix, Perdidos de Sinaloa y Grupo Dual
- Contacto directo por WhatsApp con mensaje previo según el tipo de consulta
  (letras, colaboraciones o eventos)

## Estructura

```
.
├── index.html              Página completa
├── assets/
│   ├── styles.css          Estilos
│   ├── main.js             Animaciones al hacer scroll
│   ├── emiliano-leal.jpg   Retrato (900 × 1125)
│   └── favicon.svg         Icono del sitio
├── vercel.json             Cabeceras de seguridad y caché
├── robots.txt              Indexación
├── sitemap.xml             Mapa del sitio
└── README.md
```

## Stack

HTML, CSS y JavaScript sin dependencias ni proceso de compilación.
Tipografías: Archivo Black, Archivo y Bitter, servidas por Google Fonts.

## Ver en local

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000`.

## Publicar

1. Subir esta carpeta a un repositorio de GitHub
2. En Vercel: **Add New → Project → Import** el repositorio
3. Deploy — Vercel detecta el sitio estático sin configuración adicional

A partir de ahí, cada cambio subido a la rama `main` se publica automáticamente.

## Mantenimiento

**Cambiar la foto**
Reemplazar `assets/emiliano-leal.jpg` conservando el nombre.
Proporción 4:5, mínimo 800 px de ancho.

**Agregar un video**
Duplicar un bloque `<article class="vid">` dentro de la sección `#videos` y
sustituir el identificador en la URL del iframe. El identificador es la parte
que sigue a `watch?v=` en el enlace de YouTube.

**Agregar un sencillo**
Duplicar un bloque `<a class="track">` dentro de la sección `#musica` con el
enlace del álbum en Spotify.

**Cambiar el número de WhatsApp**
Buscar y reemplazar `523141474258` en `index.html`. Aparece en seis lugares.

**Activar TikTok o Facebook**
En la sección `#redes`, cambiar `<span class="social soon">` por
`<a class="social" href="URL" target="_blank" rel="noopener">` y ajustar el texto.

## Créditos

Diseño y desarrollo: Antonio Gil
