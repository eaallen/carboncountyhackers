# Carbon County Hackathon Website

A modern, responsive website for the Carbon County Hackathon announcements and information.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Announcements Section**: Card-based layout for easy content management
- **Event Information**: Comprehensive hackathon details and guidelines
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Contact Information**: Easy-to-find contact details and social links

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Professional icons
- **Vanilla JavaScript**: Lightweight interactivity

## 📁 Project Structure

```
website/
├── index.html          # Main website file
├── README.md          # Project documentation
└── .gitignore         # Git ignore rules
```

## 🎨 Customization

The website uses Tailwind CSS with a custom color scheme:
- **Primary**: Carbon-themed grays (#2d3748, #4a5568, #1a202c)
- **Accent**: Teal colors (#38b2ac, #4fd1c7)

To customize colors, modify the Tailwind config in the HTML file:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'carbon': '#2d3748',
                'carbon-light': '#4a5568',
                'carbon-dark': '#1a202c',
                'accent': '#38b2ac',
                'accent-light': '#4fd1c7'
            }
        }
    }
}
```

## 📝 Content Management

### Adding New Announcements

To add new announcements, copy the announcement card structure in the announcements section:

```html
<div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent">
    <div class="p-6">
        <div class="flex items-center mb-4">
            <div class="bg-accent text-white rounded-full p-2 mr-3">
                <i class="fas fa-icon-name"></i>
            </div>
            <span class="text-sm text-gray-500">Date</span>
        </div>
        <h4 class="text-xl font-semibold text-carbon mb-3">Title</h4>
        <p class="text-gray-600 mb-4">Description</p>
        <a href="#" class="text-accent hover:text-accent-light font-medium">
            Read More <i class="fas fa-arrow-right ml-1"></i>
        </a>
    </div>
</div>
```

### Updating Event Information

Modify the event details in the "Hackathon Information" section to reflect current dates, locations, and other details.

## 🌐 Deployment

This website is designed to be deployed on GitHub Pages. Simply push the repository to GitHub and enable Pages in the repository settings.

## 📞 Contact

For questions about this website or the Carbon County Hackathon, please contact:
- Email: info@carboncountyhackathon.com
- Phone: (555) 123-4567

## 📄 License

This project is open source and available under the [MIT License](LICENSE).