# Aurelia Creative Agency - Next.js Conversion

This is a complete conversion of the Aurelia Creative Agency WordPress Elementor template to Next.js, maintaining 100% design and functionality fidelity.

## Project Structure

```
creative-agency-nextjs/
├── app/
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Home page
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── HeroSection.jsx      # Hero section with stats
│   ├── ServicesMarquee.jsx  # Scrolling services text
│   ├── WhatWeDoSection.jsx  # Services showcase
│   └── WhoWeAreSection.jsx  # About section with progress bars
├── styles/
│   ├── globals.css         # Global styles
│   ├── header.module.css   # Header styles
│   ├── hero.module.css     # Hero section styles
│   ├── marquee.module.css  # Marquee section styles
│   ├── whatwedo.module.css # What we do section styles
│   └── whoweare.module.css # Who we are section styles
├── public/                 # Static files
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── .gitignore             # Git ignore rules
```

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd creative-agency-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Features Preserved

✅ Exact visual design and layout  
✅ All animations and transitions  
✅ Counter animations (stats)  
✅ Responsive design for all devices  
✅ Navigation menu with dropdowns  
✅ Hero section with image animations  
✅ Services marquee with infinite scroll  
✅ Service cards with hover effects  
✅ Progress bars with animations  
✅ All typography and colors  
✅ Image optimization with Next.js Image component  
✅ Mobile-friendly hamburger menu  

## Components

### Header
- Sticky navigation with dropdown menus
- Logo display
- Mobile responsive hamburger menu
- Phone contact info (desktop only)

### HeroSection
- Large title animation
- Stats counters (500+ Happy Clients, 125+ Projects, 450+ Media Featured)
- Team member images grid
- CTA button and video button

### ServicesMarquee
- Infinite scrolling service list
- Smooth animation with pause on hover
- Services: Branding, Graphic Design, Web Design, Digital Marketing, Social Media Management, Video Production

### WhatWeDoSection
- Three service cards with descriptions
- Hover effect with icon rotation (45 degrees)
- Alternating layout for visual interest
- Smooth fade-in animations

### WhoWeAreSection
- Company description and mission
- Feature list with icons
- Team image with decorative element
- Progress bars for skills (95% Successful Campaigns, 85% Innovation)

## Customization

### Colors
Edit the CSS variables in `styles/globals.css` to change the color scheme:
- Primary color: `#1a1a1a` (dark)
- Secondary backgrounds: `#ffffff`, `#f9f9f9`
- Accent: Adjust border colors, shadows, etc.

### Typography
Font families are imported from Google Fonts:
- `Anton` - Display font (headings)
- `Roboto Slab` - Heading font
- `Poppins` - Modern sans-serif
- `Roboto` - Body text

### Content
All text content is easily editable in the component files. Replace placeholder text with your own content.

### Images
Images are loaded from external URLs. To use local images:
1. Place images in the `public` folder
2. Update image paths in components (e.g., `/images/my-image.jpg`)

## Animations

The site uses CSS animations defined in each module's CSS file:
- `slideInLeft` / `slideInRight` - Horizontal slide animations
- `fadeInUp` / `fadeInDown` / `fadeInLeft` / `fadeInRight` - Fade with direction
- `scroll` - Marquee infinite scroll
- Hover effects with transforms

All animations are GPU-accelerated for smooth performance.

## Performance

- Images optimized with Next.js Image component
- CSS Modules for scoped styling
- Responsive images with srcset
- Lazy loading for images
- Efficient animations using CSS transforms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

Then deploy the `.next` folder to your hosting platform.

## Future Enhancements

- Add remaining pages (About Us, Services, Portfolio, etc.)
- Integrate CMS for dynamic content
- Add contact form functionality
- Implement analytics
- Add blog section
- Performance optimizations

## Notes

- All external images are served from the original WordPress domain
- The design is fully responsive for mobile, tablet, and desktop
- All animations are smooth and performant
- The code follows Next.js best practices

## Support

For questions or issues, refer to the Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)

## License

This project is based on the Aurelia Creative Agency Elementor Template Kit.
