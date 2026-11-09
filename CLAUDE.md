# NEXOS · notas para trabajar en este repositorio

- Trabajar solo en la rama `develop`. Pasar a `main` (sitio en vivo en Hostinger, somosnexos.org) solo con el OK explícito de Isis.
- Los `.jsx` no se cargan en el navegador: después de editar cualquiera, correr `npm install` (una vez) y `npm run compilar`, que regenera `app.js`. Subir `app.js` en el mismo commit.
- En cada publicación cambiar el sello `?v=AAAAMMDDx` de `index.html` para que nadie vea archivos viejos guardados.
- Las fotos van como archivos optimizados (≤1600 px, JPG calidad ~76), nunca incrustadas en el código.
- Datos: Google Sheet + Apps Script (`/exec`). La página guarda una copia en el navegador (`nexos-datos-v1`) y la actualiza al responder el Sheet.
- `_ds_bundle.js` trae solo los componentes del sistema de diseño (se quitaron las copias viejas del sitio que pedían los datos de más).
