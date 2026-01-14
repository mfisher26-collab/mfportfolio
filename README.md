# Matthew Fisher - Journalism Portfolio

A professional portfolio website for showcasing journalism work, built for GitHub Pages.

## Quick Start Guide

### Updating Your Profile Picture

1. Save your profile picture in this folder as `profile.jpg` (or `profile.png`)
2. If using a different filename, update line 26 in `index.html`:
   ```html
   <img src="your-image-name.jpg" alt="Matthew Fisher" class="profile-image" id="profileImage">
   ```

### Updating Your Bio

1. Open `config.js`
2. Find the `profileConfig` section (around line 8)
3. Edit the bio text between the backticks
4. Save the file

Example:
```javascript
const profileConfig = {
    bio: `Your bio text here.
    You can add multiple paragraphs by separating them with blank lines.

    This is another paragraph.`
};
```

### Adding Articles to "My Work"

1. Open `config.js`
2. Find the `articles` array (around line 17)
3. Add your article using this format:

```javascript
{
    title: "Your Article Title",
    url: "https://publication.com/your-article",
    description: "A brief one-sentence description of your article."
},
```

**Example:**
```javascript
const articles = [
    {
        title: "How Climate Change Affects Local Communities",
        url: "https://example-publication.com/climate-article",
        description: "An investigative piece exploring the direct impact of climate change on rural Massachusetts towns."
    },
    {
        title: "The Future of College Journalism",
        url: "https://example.com/college-journalism",
        description: "A feature examining how student newspapers are adapting to the digital age."
    }
];
```

**Important:** Don't forget the comma after each article entry!

## Deploying to GitHub Pages

### Initial Setup

1. Make sure all your changes are saved
2. Commit your files:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. Go to your GitHub repository settings
4. Navigate to "Pages" in the left sidebar
5. Under "Source", select "Deploy from a branch"
6. Select `main` branch and `/ (root)` folder
7. Click "Save"

Your site will be live at: `https://willfisher.github.io/matthewfisher/`

### Updating Your Live Site

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages will automatically rebuild your site within a few minutes.

## File Structure

```
matthewfisher/
├── index.html          # Home page with profile
├── work.html           # My Work page
├── styles.css          # All styling
├── config.js           # EDIT THIS - Your content (bio, articles)
├── script.js           # Loads content from config.js
├── profile.jpg         # REPLACE THIS - Your profile picture
├── .nojekyll          # Required for GitHub Pages
└── README.md          # This file
```

## Customization Tips

### Changing Colors

Edit `styles.css` to customize the color scheme:
- Main background: Line 10 (`background-color: #f9f9f9;`)
- Navigation bar: Line 15 (`background-color: #1a1a1a;`)
- Accent color: Line 132 (`border-left: 4px solid #1a1a1a;`)

### Adding More Pages

1. Create a new HTML file (e.g., `contact.html`)
2. Copy the structure from `index.html` or `work.html`
3. Add a navigation link to all pages:
   ```html
   <li><a href="contact.html" class="nav-link">Contact</a></li>
   ```

## Support

For issues or questions, refer to [GitHub Pages documentation](https://docs.github.com/en/pages).

## License

© 2026 Matthew Fisher. All rights reserved.
