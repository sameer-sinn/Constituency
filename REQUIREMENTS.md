# Technical Requirements

Complete technical and system requirements for the Constituency Intelligence Dashboard.

## 📋 Table of Contents

1. [System Requirements](#system-requirements)
2. [Development Environment](#development-environment)
3. [Project Dependencies](#project-dependencies)
4. [Data Structure Requirements](#data-structure-requirements)
5. [Feature Requirements](#feature-requirements)
6. [Performance Requirements](#performance-requirements)
7. [Browser Compatibility](#browser-compatibility)
8. [Development Setup](#development-setup)

---

## System Requirements

### Minimum
- **Operating System**: macOS 10.15+, Linux (Ubuntu 18.04+), Windows 10+
- **RAM**: 4GB minimum
- **Disk Space**: 2GB (includes node_modules)
- **Processor**: Intel Core i5 or equivalent

### Recommended
- **Operating System**: macOS 12+, Linux (Ubuntu 20.04+), Windows 11
- **RAM**: 8GB+
- **Disk Space**: 5GB
- **Processor**: Intel Core i7 or M-series Apple Silicon

---

## Development Environment

### Node.js & npm
- **Node.js**: 19.x or higher (tested with 19+)
- **npm**: 10.x or higher
- **Package Manager**: npm (primary), yarn/pnpm compatible

```bash
# Verify installation
node --version  # v19.0.0+
npm --version   # v10.0.0+
```

### Code Editor
- **Recommended**: Visual Studio Code (Latest)
- **Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin
  - ESLint
  - Prettier (optional)

### Version Control
- **Git**: 2.30+
- **GitHub**: Remote repository access

---

## Project Dependencies

### Production Dependencies

```json
{
  "next": "16.2.1",        // Next.js framework with Turbopack
  "react": "19.2.4",       // React library
  "react-dom": "19.2.4"    // React DOM bindings
}
```

### Development Dependencies

```json
{
  "@tailwindcss/postcss": "^4",      // Tailwind CSS processor
  "@types/node": "^20",              // Node.js type definitions
  "@types/react": "^19",             // React type definitions
  "@types/react-dom": "^19",         // React DOM type definitions
  "eslint": "^9",                    // Code linter
  "eslint-config-next": "16.2.1",    // Next.js ESLint config
  "tailwindcss": "^4",               // Utility-first CSS framework
  "typescript": "^5"                 // TypeScript compiler
}
```

### Total Dependencies
- **Production**: 3 packages
- **Development**: 7 packages
- **Total Install Size**: ~500MB (node_modules)

---

## Data Structure Requirements

### 7-Level Hierarchy Must Support

```typescript
interface Country {
  name: "India";
  states: State[];
}

interface State {
  id: string;
  name: string;
  population: number;
  literacy: number;
  mandals: Mandal[];
}

interface Mandal {
  id: string;
  name: string;
  type: "Urban" | "Rural";
  parliamentConstituencies: ParliamentConstituency[];
}

interface ParliamentConstituency {
  id: string;
  name: string;
  population: number;
  literacy: number;
  currentMP?: string;
  party: string;
  mlaCount: number;
  mlas: MLAConstituency[];
}

interface MLAConstituency {
  id: string;
  name: string;
  population: number;
  literacy: number;
  currentMLA?: string;
  party?: string;
  areas: AreaTown[];
}

interface AreaTown {
  id: string;
  name: string;
  type: "Area" | "Town";
  population: number;
  infrastructure?: string;
  villages: VillageMohalla[];
}

interface VillageMohalla {
  id: string;
  name: string;
  type: "Village" | "Mohalla";
  population: number;
  literacy: number;
  caste?: string[];
  religion?: string[];
  sex?: { male: number; female: number };
  issues?: string[];
}
```

### Data Requirements

#### Minimum Data Points
- **1000+ Villages/Mohallas** across 7 Indian states
- **40+ Areas/Towns** across 12+ cities
- **12+ MLAs** per city minimum
- **7 States**: Telangana, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, Rajasthan, Gujarat
- **12+ Cities**: Hyderabad, Mumbai, Pune, Bangalore, Chennai, Lucknow, Jaipur, Ahmedabad, etc.

#### Data Fields Required Per Level
- **Country**: Name only
- **State**: Name, population, literacy rate
- **Mandal**: Name, type, linked constituencies
- **Parliament**: Name, population, literacy, current MP, party, MLA count
- **MLA**: Name, population, literacy, current MLA, party affiliation
- **Area**: Name, type, infrastructure description, village count
- **Village**: Name, type, population, literacy, demographics (caste, religion, gender, issues)

### Data File Requirements
- **villagesData.ts**: Export 12+ village collections (per city)
- **hierarchyData.ts**: Complete 7-level hierarchy mapping
- **types/index.ts**: All TypeScript interfaces defined

---

## Feature Requirements

### Implemented Features

#### 1. Profile Dashboard (✓ Complete)
- [x] 8-step wizard navigation (Steps 1-8)
- [x] Data display at all 7 levels
- [x] Step 1: Country selection with gradient background
- [x] Step 2: State selection with grid layout
- [x] Step 3: State details + Mandal selection
- [x] Step 4: Mandal details + Parliament selection
- [x] Step 5: Parliament details + MLA selection
- [x] Step 6: MLA details + Area selection
- [x] Step 7: Area details + Village selection
- [x] Step 8: Village final details with edit mode
- [x] Back navigation between steps
- [x] Breadcrumb path display
- [x] Data statistics cards at each level
- [x] Custom data editor (Add/Edit mode)
- [x] Mobile-responsive design (all breakpoints)
- [x] localStorage integration for state persistence

#### 2. Heatmap Visualization (✓ Complete)
- [x] Interactive geographic visualization
- [x] Heat mapping of constituencies
- [x] Data persistence via localStorage
- [x] Mobile responsive layout

#### 3. Navigation (✓ Complete)
- [x] Navbar component with responsive design
- [x] Sidebar with dashboard links
- [x] Route navigation between pages
- [x] Active route highlighting

### In-Development Features

#### 4. Opponent Analysis (🚀 Foundation Ready)
- [ ] Competitive intelligence module
- [ ] Rival party tracking
- [ ] Electoral history analysis
- [ ] Competitor comparison dashboard

#### 5. Report Generator (🚀 Foundation Ready)
- [ ] Report creation interface
- [ ] PDF export capability
- [ ] Data export (CSV, JSON)
- [ ] Report templates
- [ ] Scheduled report generation

#### 6. Strategy Advisor (🚀 Foundation Ready)
- [ ] AI-driven recommendations
- [ ] Data analysis engine
- [ ] Strategic insights
- [ ] Predictive analytics

---

## Performance Requirements

### Build Performance
- **Next.js Build**: < 2 seconds (Turbopack optimization)
- **TypeScript Compilation**: ~1.5 seconds
- **ESLint Check**: < 1 second
- **Total Build Time**: < 5 seconds

### Runtime Performance
- **First Contentful Paint (FCP)**: < 1.5 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3 seconds

### Mobile Performance
- **Mobile FCP**: < 2 seconds
- **Mobile LCP**: < 3.5 seconds
- **Mobile TTI**: < 4 seconds

### Bundle Size
- **JavaScript Bundle**: < 300KB (gzipped)
- **CSS Bundle**: < 50KB (gzipped)
- **Total Initial Load**: < 400KB

### Data Handling
- **Village Count**: 1000+ (efficient filtering/search)
- **localStorage Capacity**: 5-10MB per domain (sufficient for all data)
- **No External API Calls**: All data local/embedded

---

## Browser Compatibility

### Desktop Browsers
- **Chrome/Chromium**: 90+ (Latest)
- **Firefox**: 88+ (Latest)
- **Safari**: 14+ (Latest)
- **Edge**: 90+ (Latest)

### Mobile Browsers
- **iOS Safari**: 14+ (iPhone/iPad)
- **Chrome Android**: 90+ (Android devices)
- **Samsung Internet**: 14+
- **Firefox Mobile**: 88+

### Required Browser Features
- ES2020 JavaScript support
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- localStorage API
- Responsive viewport meta tag
- Touch event handling

### Minimum Screen Sizes
- **Mobile**: 320px width (iPhone SE)
- **Tablet**: 768px width (iPad, Android tablets)
- **Desktop**: 1024px+ width
- **Large Desktop**: 1440px+ width

---

## Development Setup

### Pre-Setup Checklist
- [ ] Node.js 19+ installed
- [ ] npm 10+ installed
- [ ] Git 2.30+ installed
- [ ] GitHub account configured
- [ ] VS Code or preferred editor installed
- [ ] 2GB+ free disk space available

### Step-by-Step Setup

#### 1. Clone Repository
```bash
git clone https://github.com/sameer-sinn/Constituency.git
cd Constituency
```

#### 2. Install Dependencies
```bash
npm install
# This will install all packages listed in package.json
# Total: ~500MB in node_modules/
```

#### 3. Verify Installation
```bash
npm run build  # Should complete in <5 seconds with 0 errors
```

#### 4. Start Development Server
```bash
npm run dev
# Server runs on http://localhost:3000
# Press Ctrl+C to stop
```

#### 5. Open in Browser
```
http://localhost:3000
```

### Development Workflow

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint checks
npm run lint

# Clean build artifacts
rm -rf .next && npm run build
```

### Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Descriptive message"

# Push to GitHub
git push constituency main

# Pull latest changes
git pull constituency main
```

---

## TypeScript Requirements

### Configuration
- **Target**: ES2020
- **Module**: ESNext
- **Strict Mode**: true (full type checking)
- **JSX**: React 19
- **resolveJsonModule**: true
- **allowJs**: true

### Type Safety
- **Zero `any` Types**: Avoid `any`, use specific types
- **Strict Null Checks**: Always handle null/undefined
- **No Implicit Any**: All parameters must be typed
- **Type Definitions**: All interfaces in `src/types/index.ts`

### Example Types
```typescript
// ✓ Good
interface State {
  id: string;
  name: string;
  population: number;
}

// ✗ Bad
interface State {
  id: any;
  name: string;
  population: any;
}
```

---

## CSS & Styling Requirements

### Tailwind CSS Configuration
- **Version**: 4.x
- **Modes**: Default (implicit dark mode support)
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

### Responsive Design Requirements
- **Mobile-First Approach**: Base classes for mobile
- **Breakpoint Classes**: `md:`, `lg:` prefixes for larger screens
- **No Hard-Coded Widths**: Use Tailwind utilities
- **Spacing Scale**: Use `gap-`, `p-`, `m-` utilities (4px increments)
- **Color Scheme**: slate/blue/green/purple/orange palette

### Example Responsive Pattern
```tsx
// Mobile: 1 column, p-4
// Desktop: 2 columns, p-8
<div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8">
```

---

## State Management & Storage

### localStorage Requirements
- **Key**: `selectedHierarchy`
- **Data**: JSON serialization of selected state
- **Persistence**: Across page reloads
- **Capacity**: 5-10MB sufficient for project
- **Privacy**: No external storage, client-side only

### State Structure
```typescript
interface SelectedHierarchy {
  country?: Country;
  state?: State;
  mandal?: Mandal;
  parliament?: ParliamentConstituency;
  mla?: MLAConstituency;
  area?: AreaTown;
  village?: VillageMohalla;
}
```

---

## File Organization Requirements

### Required Directories
```
src/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── data/            # Data files (static)
└── types/           # TypeScript type definitions
```

### Required Files
```
src/app/
├── globals.css      # Global styles
├── layout.tsx       # Root layout
├── page.tsx         # Home page

src/data/
├── hierarchyData.ts # 7-level hierarchy
└── villagesData.ts  # Village database

src/types/
└── index.ts         # All TypeScript interfaces

src/components/
├── Navbar.tsx       # Navigation bar
└── Sidebar.tsx      # Sidebar navigation
```

---

## Build & Deployment Requirements

### Build Requirements
- **Build Tool**: Next.js with Turbopack
- **Output**: Static HTML/CSS/JS in `.next/` directory
- **Build Time**: < 5 seconds
- **Result**: Zero build errors, zero warnings

### Deployment Checklist
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] All imports resolved
- [ ] No unused variables/imports
- [ ] ESLint passes
- [ ] Tested on mobile browsers
- [ ] Git changes committed and pushed

### Environment Variables
- Currently None (all data embedded)
- Can be extended for database URLs, API keys, etc.

---

## Testing Requirements

### Manual Testing Checklist
- [ ] Profile wizard: All 8 steps functional
- [ ] Navigation: Back button works at each step
- [ ] Data display: All statistics show correctly
- [ ] Edit mode: Custom data saves to localStorage
- [ ] Mobile: Responsive layout on 320px, 768px, 1024px
- [ ] Heatmap: Visualization displays correctly
- [ ] Browser console: Zero errors/warnings
- [ ] localStorage: State persists after reload

### Browser Testing
- [ ] Chrome Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] iPad Safari

---

## Documentation Requirements

### Required Documentation
- [x] README.md: Project overview, setup, usage
- [x] REQUIREMENTS.md: This file (detailed requirements)
- [x] Code comments: Complex logic explained inline
- [x] TypeScript types: Self-documenting with interfaces
- [x] Component props: TypeScript interfaces for props

### Comment Guidelines
```typescript
// Use for complex business logic
// Use for non-obvious decisions
// Avoid obvious/self-documenting code
```

---

## Security Requirements

### Data Privacy
- ✓ No external API calls (all data local)
- ✓ No user tracking/analytics
- ✓ localStorage only (no cookies)
- ✓ No sensitive data transmission
- ✓ No authentication required (development)

### Input Validation
- ✓ TypeScript provides compile-time validation
- ✓ User input in edit mode stored locally
- ✓ No server-side processing

---

## Accessibility Requirements

### WCAG 2.1 Level AA Target
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Color contrast ratios (4.5:1 for text)
- [ ] Keyboard navigation support
- [ ] ARIA labels where necessary
- [ ] Alt text for images (future)

---

## Maintenance Requirements

### Regular Tasks
- Update dependencies quarterly (npm update)
- Review and update README as features change
- Monitor build performance
- Test on latest browser versions
- Update documentation with new features

### Dependency Updates
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update to latest versions (with care)
npm install next@latest react@latest
```

---

## Summary Checklist

- [x] Node.js 19+ installed
- [x] npm 10+ installed  
- [x] Project structure created
- [x] Dependencies installed (3 production, 7 dev)
- [x] 7-level data structure implemented
- [x] All 8 dashboard steps functional
- [x] Mobile responsiveness complete
- [x] Build validated (< 5 seconds)
- [x] TypeScript strict mode enabled
- [x] localStorage integration working
- [x] Documentation complete
- [x] GitHub integration ready

---

**Last Updated**: March 2026
**Version**: 0.1.0
**Maintained By**: Development Team
