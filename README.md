# WordCheck - System Files Conflict Checker

A web-based tool for detecting conflicting programs and software in system files. WordCheck helps identify known problematic software (VPNs, game mods, cheat engines, etc.) that may cause conflicts with games like GTA V and Red Dead Online.

## 🎯 Purpose

WordCheck scans uploaded text files (such as system logs, process lists, or diagnostic reports) and highlights known conflicting programs. It's particularly useful for:

- Technical support teams diagnosing game crashes
- Players troubleshooting game compatibility issues
- System administrators checking for problematic software
- Anyone needing to identify known conflict-causing programs

## ✨ Features

- **File Scanning**: Upload and scan text files for problematic software
- **Real-time Highlighting**: Automatically highlights detected conflict words in uploaded files
- **Searchable Results**: Navigate through found instances with next/previous controls
- **Detailed Descriptions**: Click on any detected program to view its description and recommended solution
- **Custom Word List**: Add your own conflict words with descriptions and solutions
- **Visual Navigation**: Counter showing current position and total occurrences of each word
- **Categorized Solutions**: Each detected program includes troubleshooting steps

## 🚀 Demo

Try it live: [Add your GitHub Pages URL here]

## 📋 Pre-loaded Conflict Programs

The tool comes pre-configured with 150+ known conflicting programs including:

- **VPN Software**: CyberGhost, Hotspot Shield, NordVPN, etc.
- **Cheat Engines**: Cheat Engine, ArtMoney, WeMod, etc.
- **Overclocking Tools**: MSI Afterburner, AMD Overdrive, RivaTuner
- **Security Software**: Kaspersky, Avast, Norton, McAfee
- **Game Mods**: FiveM, OpenIV, Script Hook, Simple Trainer
- **Cloud Storage**: Dropbox, OneDrive
- And many more...

## 🛠️ Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling with custom animations and responsive design
- **Vanilla JavaScript** - Core functionality (no frameworks)
- **ES6 Modules** - Modular code organization

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/fernanhick/wordcheck.git
```

2. Navigate to the project directory:
```bash
cd wordcheck
```

3. Open `index.html` in your browser:
```bash
# No build process required - just open the file
open index.html
```

Or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 💻 Usage

### Scanning a File

1. Click the **"Check File"** button or use the file input
2. Select a text file containing system information, process lists, or logs
3. The file content will be displayed with highlighted conflict words
4. View the "Words Found" panel on the left to see all detected programs

### Managing the Words List

1. Click **"words-list"** button to open the word management panel
2. Add new words by entering:
   - **Word**: The program or file name to detect
   - **Description**: What the software does
   - **Solution**: Recommended actions to resolve conflicts
3. Press **Enter** to add the word to the list
4. Click the **X** next to any word to remove it from the list

### Navigating Results

- Click on any detected word in the left sidebar to view its details
- Use **◄** and **►** arrows to navigate through occurrences
- The counter shows your current position (e.g., "3/7")
- Selected instances are highlighted in green for easy tracking

### Viewing Solutions

- Click on any word in the "Words Found" panel
- The right sidebar displays:
  - Word name
  - Detailed description
  - Recommended solution steps

## 📁 Project Structure

```
wordcheck/
├── index.html          # Main application interface
├── css/
│   └── styles.css      # Application styling
├── js/
│   ├── script.js       # Main application logic
│   └── data.js         # Conflict words database
└── README.md           # This file
```

## 🎨 Features Breakdown

### Word Detection
- Case-insensitive pattern matching
- Real-time highlighting with visual feedback
- Counts total occurrences per word

### User Interface
- Clean, modern design with orange accent color
- Three-panel layout (Results | File Content | Description)
- Smooth scrolling to highlighted words
- Modal popup for managing word list

### Data Management
- Editable word database
- Persistent session data (until page reload)
- Easy to export/modify the conflict list

## 🔧 Customization

### Adding Words Programmatically

Edit `js/data.js` to add more conflict programs:

```javascript
{
    word: 'ProgramName',
    description: 'What this program does',
    solution: 'How to resolve the conflict'
}
```

### Styling

Modify `css/styles.css` to change:
- Primary color: `--primary-color: rgb(255, 174, 0);`
- Highlight colors (yellow for detection, green for active)
- Layout and spacing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewConflictWord`)
3. Add your changes (especially new conflict programs with descriptions!)
4. Commit your changes (`git commit -m 'Add XYZ conflict program'`)
5. Push to the branch (`git push origin feature/NewConflictWord`)
6. Open a Pull Request

### Areas for Contribution

- Add more conflict programs to the database
- Improve descriptions and solutions for existing entries
- Add export/import functionality for custom word lists
- Enhance mobile responsiveness
- Add file format support (JSON, XML, etc.)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**fernanhick**

- GitHub: [@fernanhick](https://github.com/fernanhick)

## 🎮 Use Case Example

This tool is particularly useful for Rockstar Games support teams and players experiencing issues with:
- GTA V Online
- Red Dead Online
- Other multiplayer games with anti-cheat systems

## 🙏 Acknowledgments

- Built to help troubleshoot gaming conflicts
- Conflict database compiled from common technical support cases
- Thanks to the gaming community for reporting problematic software combinations

## ⚠️ Disclaimer

This tool is for diagnostic purposes only. The presence of listed software doesn't necessarily mean it will cause conflicts on all systems. Always verify with official support channels before making system changes.

## 📧 Support

If you encounter issues or have suggestions:
- Open an issue on GitHub
- Provide sample files (without personal information) if reporting bugs
- Include browser version and operating system

---

**Made with 🎮 for gamers by fernanhick**
