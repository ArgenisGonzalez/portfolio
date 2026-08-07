# Portfolio — Argenis José González García

Portafolio personal de una sola página: HTML, CSS y JavaScript puros (sin dependencias ni build). Los proyectos se cargan automáticamente desde la API pública de GitHub (`@ArgenisGonzalez`).

🔗 Demo local: abre `index.html` en el navegador.

## 🚀 Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en tu cuenta llamado **`portfolio`** (o **`ArgenisGonzalez.github.io`** si lo quieres en la raíz de tu dominio).
2. Sube estos archivos:

```bash
cd portfolio
git init
git add .
git commit -m "feat: new portfolio design"
git branch -M main
git remote add origin https://github.com/ArgenisGonzalez/portfolio.git
git push -u origin main
```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. En 1–2 minutos tu sitio estará en `https://argenis809.github.io/portfolio/`.

## 📄 Tu CV

El botón "Download CV" apunta a `cv.pdf`. Copia tu CV actualizado en la raíz del repo con ese nombre:

```bash
cp Argenis_CV_2_0.pdf cv.pdf
```

## ✏️ Personalización rápida

- **Colores**: edita las variables CSS en `:root` dentro de `index.html` (`--teal`, `--mango`, etc.).
- **Textos**: todo el contenido está en el mismo `index.html`, sección por sección.
- **Proyectos**: se obtienen solos de GitHub; si la API falla, se usa la lista `FALLBACK` del script.
