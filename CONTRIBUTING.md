# 🛠️ Development Guide

## Setting Up Your Development Environment

1. **Clone and install:**
   ```bash
   git clone https://github.com/mdiviesti/ttrpgkit.git
   cd ttrpgkit
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   # Opens browser at http://localhost:8080
   ```

## Creating New Tools

### 1. Use the Template
Copy `TEMPLATE.html` to create a new tool:
```bash
cp TEMPLATE.html my-new-tool/index.html
```

### 2. Follow the Design Pattern
All tools should follow this structure:
- **Navigation**: Home button using `.nav-home` class
- **Container**: Wrap content in `.tool-container`
- **Header**: Use `.tool-header`, `.tool-title`, `.tool-subtitle`
- **Content**: Information sections in `.content-area`
- **Results**: Display generated content in `.result-area`
- **Buttons**: Use `.btn-primary` and `.btn-secondary` classes

### 3. CSS Classes Reference

#### Layout Classes
- `.tool-container` - Main wrapper for all tool pages
- `.tool-header` - Header section with title and subtitle
- `.content-area` - Information and instruction sections
- `.result-area` - Generated content display area

#### Typography Classes
- `.tool-title` - Main page title (h1)
- `.tool-subtitle` - Subtitle/description text

#### Button Classes
- `.btn-primary` - Main action buttons (generate, roll, etc.)
- `.btn-secondary` - Secondary actions (clear, reset, etc.)

#### Navigation Classes
- `.nav-home` - Home navigation button (fixed position)

### 4. Color Variables
Use CSS custom properties for consistent theming:
```css
:root {
    --primary-color: #8B4513;      /* Brown */
    --secondary-color: #D2B48C;    /* Tan */
    --accent-color: #CD853F;       /* Peru */
    --text-dark: #2C1810;          /* Dark brown */
    --text-light: #F5F5DC;         /* Beige */
    --card-bg: rgba(245, 245, 220, 0.95); /* Semi-transparent beige */
    --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    --hover-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}
```

## File Organization

### Directory Structure
```
my-new-tool/
├── index.html          # Main tool page
├── tool-logic.js       # Tool-specific JavaScript
├── data.json          # Tool data (if needed)
└── README.md          # Tool-specific documentation
```

### JavaScript Patterns
- Keep tool logic in separate `.js` files
- Use descriptive function names
- Add error handling for user inputs
- Include loading states for complex operations

Example:
```javascript
function generateContent() {
    const resultDiv = document.getElementById('result-content');
    const resultsSection = document.getElementById('results');
    
    try {
        // Show loading state
        resultDiv.innerHTML = '<div class="loading"></div>';
        resultsSection.style.display = 'block';
        
        // Generate content
        const result = yourGenerationLogic();
        
        // Display result
        resultDiv.innerHTML = result;
    } catch (error) {
        resultDiv.innerHTML = 'Error generating content. Please try again.';
        console.error('Generation error:', error);
    }
}
```

## Adding Tools to Main Index

When you create a new tool, add it to the main `index.html`:

1. Choose the appropriate category section
2. Add a new tool card with proper icon and description
3. Follow the existing pattern for consistency

Example:
```html
<a href="/my-new-tool/index.html" class="tool-card">
    <div class="tool-icon">🎲</div>
    <div class="tool-title">My New Tool</div>
    <div class="tool-description">Description of what this tool does and how it helps.</div>
</a>
```

## Best Practices

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

### Performance
- Optimize images and assets
- Minimize JavaScript bundle size
- Use efficient algorithms for generators
- Implement caching where appropriate

### User Experience
- Provide clear instructions
- Show loading states for slow operations
- Include error handling and user feedback
- Make tools work on mobile devices

### Code Quality
- Use consistent naming conventions
- Comment complex logic
- Keep functions small and focused
- Test edge cases

## Testing Your Tool

1. **Cross-browser testing**: Test in Chrome, Firefox, Safari, Edge
2. **Mobile testing**: Verify responsive design works
3. **Accessibility testing**: Use browser accessibility tools
4. **Performance testing**: Check load times and responsiveness

## Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/my-new-tool`
3. **Follow the style guide** and use the template
4. **Test thoroughly** across devices and browsers
5. **Update documentation** including the main README
6. **Submit a pull request** with a clear description

## Common Patterns

### Random Generation
```javascript
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
```

### Local Storage
```javascript
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
```

### API Integration
```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
```

## Resources

- [Foundation CSS Framework](https://get.foundation/sites/docs/)
- [FontAwesome Icons](https://fontawesome.com/v5.15/icons)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

Happy coding! 🎲✨
