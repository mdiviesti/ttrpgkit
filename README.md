
# 🎲 TTRPG Toolkit

**Your Complete Game Master's Arsenal**

A curated collection of creative tools to help Game Masters and world builders stay inspired. Whether you're running a campaign, writing a story, or building entire worlds, these tools will spark your creativity when you need it most.

## 🌟 Features

### 🗺️ World Building & Maps
- **[Azgaar Fantasy Map Generator](https://azgaar.github.io/Fantasy-Map-Generator/)** - Create detailed fantasy world maps with countries, cities, and cultures
- **[Name & Place Generators](/random/index.html)** - Generate names for places, people, and locations including biblical places, terrain features, and town names

### ⚡ Story & Plot Tools
- **[Idea Prompts](/ideaprompt/index.html)** - Get creative writing prompts and story ideas using random FontAwesome icons
- **[Plot Device Generator](/plotdevice/index.html)** - Generate interesting plot devices to move your story forward
- **[Plot Twist Generator](/plottwist/index.html)** - Add unexpected turns to your story with randomly generated plot twists
- **[Random Sentence Generator](/sentence/index.html)** - Generate random sentences for inspiration, dialogue, or quick story starters

### 🎲 Character & Chaos
- **[Character Background](/background/index.html)** - Generate rich backstories and backgrounds for NPCs and player characters
- **[Chaos Generator](/nlrme/index.html)** - When you need something unexpected to happen - let chaos decide!
- **[Arcmage Tools](/arcmage/index.html)** - Random magic-related generators for spellcasters and magical elements

### 📚 Reference & Research
- **[Dream Dictionary](/dreams/index.html)** - Explore dream symbolism and meanings for mysterious dream sequences and prophetic visions
- **[Word Dictionary](/dictionary/index.php)** - Advanced word lookup tool with definitions, synonyms, and related words
- **[D&D Combined Journals](/d0rfs/index.html)** - Organized journal system for tracking campaign notes, character development, and session summaries

### 🔧 Utility Tools
- **[3D Model Viewer](/stl_viewer/index.html)** - View STL files and 3D models for miniatures, terrain, and props in your browser

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ttrpgkit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up 5etools (optional):**
   ```bash
   ./setup-5etools.sh
   ```
   This will clone the 5etools repositories for D&D 5e reference materials.

4. **Start your local server** and navigate to `index.html`

## 🎨 Design Philosophy

This toolkit embraces a **papyrus-themed aesthetic** that evokes the feel of ancient scrolls and mystical tomes. Each tool follows a consistent design pattern:

- **Unified color scheme** with warm browns and parchment tones
- **Card-based layout** for easy navigation and visual appeal
- **Responsive design** that works on desktop and mobile devices
- **Consistent navigation** with home buttons on every tool page

## 📁 Project Structure

```
ttrpgkit/
├── index.html              # Main landing page
├── package.json            # Node.js dependencies
├── site/                   # Shared assets and styles
│   ├── site.css           # Main stylesheet
│   └── images/            # Shared images
├── arcmage/               # Magic-related tools
├── background/            # Character background generator
├── d0rfs/                 # D&D journal system
├── dictionary/            # Word dictionary (PHP)
├── dreams/                # Dream dictionary
├── ideaprompt/            # Idea prompt generator
├── nlrme/                 # Chaos generator
├── plotdevice/            # Plot device generator
├── plottwist/             # Plot twist generator
├── random/                # Name and place generators
├── sentence/              # Random sentence generator
└── stl_viewer/            # 3D model viewer
```

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** Foundation CSS Framework
- **Icons:** FontAwesome
- **Backend:** PHP (for dictionary tool)
- **3D Viewer:** Three.js based STL viewer

## 📖 5eTools Integration

The toolkit includes integration with 5eTools, a comprehensive D&D 5th edition reference. Two versions are available:

- **5eTools 2024** - Current version with latest content and features
- **5eTools 2014** - Legacy version with original interface and classic content

### Setup 5eTools

Run the provided setup script to clone both versions:

```bash
./setup-5etools.sh
```

This creates the following structure:
```
├── 5etools-2024/    # Current 5eTools version
│   └── img/         # Current image assets
└── 5etools-2014/    # Legacy 5eTools version
    └── img/         # Legacy image assets
```

The 5etools directories are git-ignored since they are separate repositories managed independently.

## 🤝 Contributing

Contributions are welcome! Whether you want to:
- Add new random generators
- Improve existing tools
- Fix bugs or enhance the UI
- Add new features

Please feel free to submit issues and pull requests.

## 📝 Usage Tips

### For Game Masters
- **Before sessions:** Use the idea prompts and plot devices to prepare interesting story elements
- **During play:** Keep the chaos generator handy for unexpected moments
- **Between sessions:** Use the journal system to track campaign notes and character development

### For Writers
- **Beat writer's block:** The random generators can spark new ideas when you're stuck
- **Character development:** Use background generators for secondary characters
- **World building:** Combine multiple tools to create rich, detailed settings

### For World Builders
- **Start big:** Use the map generator to create your world's geography
- **Add details:** Use name generators for places and people
- **Create depth:** Use the various generators to add interesting locations and events

## 🎯 Future Plans

- [ ] Add more magic item generators
- [ ] Create weather and environment generators
- [ ] Add encounter builders
- [ ] Implement save/export functionality for generated content
- [ ] Mobile app versions
- [ ] Integration with popular VTT platforms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Azgaar** for the incredible Fantasy Map Generator
- **FontAwesome** for the comprehensive icon library
- **Foundation** for the responsive CSS framework
- **Geek Gamers** YouTube channel for the original inspiration behind the idea prompt tool
- The TTRPG community for continued inspiration and feedback

---

**Happy Gaming! 🎲✨**

*Built by Game Masters, for Game Masters*
