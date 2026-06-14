# Portfolio contact replacement

These are full replacements for the GitHub Pages portfolio files:

- index.html
- styles.css
- script.js

Use them on your dev branch:

```bash
git checkout dev-branch
cp /path/to/replacements/index.html ./index.html
cp /path/to/replacements/styles.css ./styles.css
cp /path/to/replacements/script.js ./script.js
git add index.html styles.css script.js
git commit -m "Redesign contact section"
git push origin dev-branch
```

The contact form is static-site safe. It builds a `mailto:` link with the entered name, email, phone, and message.
