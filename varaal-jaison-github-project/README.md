# V araal-Jaison Friends Website

A static website project suitable for GitHub Pages. The photo and song are fixed assets; there are no visitor-facing upload, replacement, or deletion controls.

## 1. Add your original media

Put your own files in the `assets` folder and use these exact filenames:

- `assets/friend-photo.jpg` — the original photo
- `assets/entry-song.mp3` — the entry song

If your photo is PNG or WebP, either convert it to JPG or update the image path in `index.html`. If your audio is not MP3, update the `<source>` path and MIME type in `index.html`.

## 2. Preview the website

Open `index.html` in a browser. For the most reliable preview, use a local development server or the preview provided by your code editor.

## 3. Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Media access note

The website has no visitor upload controls. The photo and song are static files maintained by the repository owner. On a public website, visitors can still view or copy media files; this setup prevents changing them through the website, not copying them. Anyone with write access to the GitHub repository can change the files, so keep repository write access limited.

## Customizing text and appearance

Edit the text in `index.html` and colors, spacing, and typography in `style.css`. This is a clean reconstruction starter, not a verified copy of the original Google AI Studio source; the original site's exact design and features could not be inspected from the live URL.
