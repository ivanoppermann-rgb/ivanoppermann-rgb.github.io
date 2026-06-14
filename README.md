# Portfolio contact section full replacements

Replace these three files in your `dev-branch`:

- `index.html`
- `styles.css`
- `script.js`

The contact section now includes:

- Ivan Oppermann
- ivanoppermann@gmail.com
- 573-469-2853
- A two-column contact form styled like the reference image
- A static-site compatible form submission target using FormSubmit

Important: the first live form submission will trigger a confirmation email from FormSubmit to `ivanoppermann@gmail.com`. Confirm it once, then future submissions should be emailed to you.

Suggested commands:

```bash
git checkout dev-branch
cp index.html styles.css script.js /path/to/your/repo/
cd /path/to/your/repo
git add index.html styles.css script.js
git commit -m "Add contact form section"
git push origin dev-branch
```
