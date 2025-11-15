# Damian's Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite, showcasing professional experience, projects, and skills.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Navigation**: Smooth scrolling between sections
- **Portfolio Showcase**: Display of professional projects
- **Skills Section**: Technical competencies and expertise
- **Contact Form**: Easy way to get in touch
- **Resume Download**: Downloadable resume functionality
- **Modern UI**: Clean, professional design with neon city aesthetics

## 🚀 Live Demo

Visit the live website: [https://damiandeleon.github.io/damianwebsite/](https://damiandeleon.github.io/damianwebsite/)

## 🛠️ Built With

- **React** 19.1.1 - Frontend framework
- **Vite** 7.1.7 - Build tool and development server
- **JavaScript/JSX** - Programming language
- **CSS3** - Styling and animations
- **HTML5** - Markup structure
- **html2pdf.js** - PDF generation for resume
- **ESLint** - Code linting and formatting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/damiandeleon/damianwebsite.git
   cd damianwebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📜 Available Scripts

In the project directory, you can run:

### Development

- `npm run dev` - Starts the development server
- `npm run preview` - Preview the production build locally

### Build & Deploy

- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm run predeploy` - Runs automatically before deploy

### Code Quality

- `npm run lint` - Runs ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── AboutMe.jsx     # Personal information
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Website footer
│   ├── Home.jsx        # Landing page
│   ├── Navigation.jsx  # Site navigation
│   ├── Project.jsx     # Individual project component
│   ├── ProjectList.jsx # Projects showcase
│   ├── Resume.jsx      # Resume section
│   ├── Skills.jsx      # Skills display
│   └── Wrapper.jsx     # Main content wrapper
├── assets/             # Static assets
│   ├── Icons/          # Icon files
│   └── Images/         # Image files
├── App.jsx             # Main App component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Updating Content

- Modify component files in `src/components/` to update content
- Replace images in `src/assets/Images/` with your own
- Update personal information in relevant components

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are inline or in respective component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `Wrapper.jsx`
3. Update navigation in `Navigation.jsx`

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

1. **Automatic Deployment**

   ```bash
   npm run deploy
   ```

2. **Manual Build**
   ```bash
   npm run build
   ```
   The `dist` folder contains the production build.

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch as source

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👤 Author

**Damian De Leon**

- GitHub: [@damiandeleon](https://github.com/damiandeleon)
- Portfolio: [https://damiandeleon.github.io/damianwebsite/](https://damiandeleon.github.io/damianwebsite/)

## 🙏 Acknowledgments

- React community for excellent documentation
- Vite team for the amazing build tool
- Open source contributors for various packages used

## 📞 Support

If you have any questions or issues, please feel free to:

- Open an issue on GitHub
- Contact me through the website's contact form
- Reach out via the contact information on the portfolio

---

⭐ **Star this repository if you found it helpful!**
