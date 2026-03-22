# Constituency Intelligence Dashboard

A comprehensive, multi-level hierarchical intelligence platform for analyzing electoral constituencies across India. Built with Next.js and Tailwind CSS, featuring interactive dashboards, data visualization, and strategic analysis tools.

## 📋 Project Overview

This application provides an advanced analytics platform for understanding constituency dynamics through a **7-level hierarchical structure**:

```
Country (India)
  ↓
State (Telangana, Maharashtra, etc.)
  ↓
Mandal/Zone (Administrative Region)
  ↓
Parliament/City Constituency
  ↓
MLA Constituency
  ↓
Area/Town (Locality)
  ↓
Village/Mohalla (Ground Level)
```

Each level displays comprehensive demographic, electoral, and infrastructure data, enabling multi-perspective analysis.

## ✨ Features

### Interactive Dashboards
- **Profile Dashboard**: 8-step hierarchical navigation wizard with data at every level
- **Heatmap Visualization**: Geographic heat mapping of electoral data
- **Opponent Analysis**: Competitive intelligence and rival party tracking
- **Strategy Advisor**: Data-driven recommendations (Phase 3 - In Development)
- **Report Generator**: Automated report creation (Phase 4 - In Development)

### Data Capabilities
- **1000+ Villages**: Comprehensive village/mohalla database across 7 Indian states
- **Multi-State Coverage**: 
  - Telangana (Hyderabad with 4 zones)
  - Maharashtra (Mumbai & Pune)
  - Karnataka (Bangalore)
  - Tamil Nadu (Chennai)
  - Uttar Pradesh (Lucknow)
  - Rajasthan (Jaipur)
  - Gujarat (Ahmedabad)
- **Rich Data Points**: Population, literacy, caste/religion distribution, gender split, voter issues
- **Custom Data**: Add/edit constituency-specific insights in real-time

### Mobile Responsive Design
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interface with responsive typography
- Mobile-first CSS approach using Tailwind breakpoints

### Data Persistence
- Browser localStorage integration for session state management
- Hierarchy navigation preservation across page reloads

## 🚀 Getting Started

### Prerequisites
See [REQUIREMENTS.md](REQUIREMENTS.md) for detailed technical and system requirements.

### Installation

```bash
# Clone repository
git clone https://github.com/sameer-sinn/Constituency.git
cd Constituency

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   └── dashboard/
│       ├── layout.tsx           # Dashboard layout with navigation
│       ├── page.tsx             # Dashboard hub
│       ├── profile/             # 7-step hierarchy wizard
│       ├── heatmap/             # Geographic visualization
│       ├── opponent/            # Competitive analysis
│       ├── report/              # Report generation
│       └── strategy/            # Strategic recommendations
├── components/
│   ├── Navbar.tsx               # Top navigation bar
│   └── Sidebar.tsx              # Sidebar navigation
├── data/
│   ├── hierarchyData.ts         # 7-level hierarchy structure
│   └── villagesData.ts          # 1000+ village database
└── types/
    └── index.ts                 # TypeScript interfaces
```

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 16.2.1 (Turbopack) |
| **Runtime** | Node.js | 19+ |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.x |
| **UI Rendering** | React | 19.2.4 |
| **Linting** | ESLint | 9.x |

## 🎯 Dashboard Sections

### 1. Profile Navigator (Implemented ✓)
- 8-step interactive wizard
- Data display at all hierarchy levels
- Custom data editor for notes
- Mobile-optimized interface
- Local storage integration

### 2. Heatmap Visualization (Implemented ✓)
- Geographic heat mapping of constituencies
- Interactive visualization
- Data persistence via localStorage

### 3. Opponent Analysis (Foundation Ready)
- Competitive intelligence tracking
- Rival party data
- Electoral history analysis

### 4. Report Generator (Foundation Ready)
- Automated report creation
- Data export capabilities
- Customizable report templates

### 5. Strategy Advisor (Foundation Ready)
- AI-driven recommendations
- Data-driven insights
- Strategic guidance

## 🗂️ Data Structure

### 7-Level Hierarchy

Each level contains relevant data:

```typescript
Country
├── State: name, population, literacy
│   ├── Mandal: type, parliament_count, cities
│   │   ├── Parliament: population, literacy, mla_count, current_mp, party
│   │   │   ├── MLA: population, literacy, current_mla, party, areas
│   │   │   │   ├── Area: type, infrastructure, villages_count
│   │   │   │   │   └── Village: population, literacy, caste, religion, gender, issues
```

### Sample Data Coverage

- **1000+ Villages** across 7 states
- **40+ Cities** with detailed area breakdowns
- **Comprehensive Demographics**: Population, literacy rate, caste groups, religions, gender distribution
- **Electoral Data**: Current representatives, party affiliations, election history
- **Development Data**: Infrastructure status, major issues, voter concerns

## 💾 Data Sources

- Village/Mohalla data: Comprehensive Indian census data structure
- Constituency boundaries: Parliamentary and state legislative assembly definitions
- Electoral information: Historical election records and current representatives

## 🔧 Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔐 Data Privacy

- All data stored locally in browser (localStorage)
- No external API calls for sensitive data
- User selections persist only in local session
- Custom notes stored only on user's device

## 📈 Performance

- **Build Time**: <2 seconds (Turbopack)
- **TypeScript Check**: ~1.5 seconds
- **Mobile Optimized**: Responsive at all breakpoints
- **Zero Runtime Errors**: Full type safety with TypeScript

## 🎨 Responsive Design

Optimized for all screen sizes:
- **Mobile** (320px+): Single-column layouts, stacked forms
- **Tablet** (768px+): 2-column grids, readable navigation
- **Desktop** (1024px+): Full multi-column layouts, advanced features

## 📝 Customization

### Adding New Constituencies
1. Update `src/data/villagesData.ts` with village data
2. Update `src/data/hierarchyData.ts` hierarchy mappings
3. Rebuild: `npm run build`

### Styling Changes
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: inline Tailwind classes

### Navigation Updates
- Main nav: `src/components/Navbar.tsx`
- Side menu: `src/components/Sidebar.tsx`

## 🐛 Troubleshooting

### Build Errors
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Run on different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Verify installation
npm install
npm run build
```

## 📚 References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📞 Support

For issues or questions:
1. Check [REQUIREMENTS.md](REQUIREMENTS.md) for technical details
2. Review project structure in `src/`
3. Check component implementations
4. Verify data in `src/data/`

## 📄 License

This project is private and confidential.

## 🚀 Future Roadmap

- [ ] Phase 3: Strategy Advisor with AI recommendations
- [ ] Phase 4: Report Generator with export formats
- [ ] Phase 5: Full Opponent Analysis system
- [ ] Database integration for persistent storage
- [ ] Multi-user collaboration features
- [ ] Advanced analytics and forecasting

---

**Last Updated**: March 2026  
**Version**: 0.1.0  
**Status**: Active Development
