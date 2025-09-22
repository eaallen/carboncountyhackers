# Carbon County Hackathon Website

A modern, responsive website for the Carbon County Hackathon announcements and information.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Bootstrap 5.3.3 for a clean, professional look
- **Interactive Animations**: Smooth transitions, hover effects, and scroll animations
- **Announcements Section**: Card-based layout with modern styling
- **Event Information**: Comprehensive hackathon details and guidelines
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Contact Information**: Easy-to-find contact details and social links
- **Particle Effects**: Dynamic background animations
- **Newsletter Signup**: Interactive subscription form

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **Bootstrap 5.3.3**: Latest version of the popular CSS framework
- **Bootstrap Icons**: Modern icon library
- **Google Fonts**: Inter font family for typography
- **Vanilla JavaScript**: Lightweight interactivity with modern ES6+ features
- **CSS3**: Custom animations and effects

## 📁 Project Structure

```
website/
├── index.html          # Main website file
├── README.md          # Project documentation
└── .gitignore         # Git ignore rules
```

## 🎨 Customization

The website uses Bootstrap 5.3.3 with a custom color scheme and modern design:
- **Primary**: Bootstrap blue (#0d6efd)
- **Gradients**: Modern gradient combinations
- **Typography**: Inter font family for clean, modern text
- **Animations**: Smooth transitions and hover effects

To customize colors, modify the CSS variables in `assets/styles.css`:
```css
:root {
    --primary-color: #0d6efd;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-hero: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}
```

## 📝 Content Management

### Adding New Announcements

To add new announcements, copy the announcement card structure in the announcements section:

```html
<div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm announcement-card">
        <div class="card-body p-4">
            <div class="d-flex align-items-center mb-3">
                <div class="bg-primary text-white rounded-circle p-2 me-3">
                    <i class="bi bi-icon-name"></i>
                </div>
                <small class="text-muted">Date</small>
            </div>
            <h5 class="card-title fw-bold">Title</h5>
            <p class="card-text text-muted">Description</p>
            <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
        </div>
    </div>
</div>
```

### Updating Event Information

Modify the event details in the "Hackathon Information" section to reflect current dates, locations, and other details.

## 🌐 Deployment

This website is deployed on GitHub Pages and is live at:
**https://eaallen.github.io/carboncountyhackers/**

To deploy updates, simply push changes to the main branch and GitHub Pages will automatically rebuild the site.

## 📞 Contact

For questions about this website or the Carbon County Hackathon, please contact:
- Email: info@carboncountyhackathon.com
- Phone: (555) 123-4567

## 📄 License

This project is open source and available under the [MIT License](LICENSE).