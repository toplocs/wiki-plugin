# Wiki Plugin for TopLocs

## Status: Hybrid Architecture (Gun.js + Backend)
- **P2P Migration**: ⭐⭐⭐ Most advanced (has gun branch)
- **Last Updated**: December 2024
- **Maturity**: Active Development

## Overview
The Wiki Plugin provides collaborative wiki functionality for TopLocs communities. It allows users to create, edit, and share wiki pages within their spheres using rich text editing.

## Architecture

### Current State (Hybrid)
```
Browser Client → Gun.js → P2P Network
       ↓                      ↓
    Express API ← → Gun Relay Server
       ↓
    Prisma ORM
       ↓
   PostgreSQL
```

### Technology Stack
- **Frontend**: Vue 3, TypeScript, Tailwind CSS
- **Editor**: Rich text editing capabilities
- **P2P**: Gun.js (partially integrated)
- **Backend**: Express.js, Prisma ORM, PostgreSQL
- **Build**: Vite, Module Federation

## Branches
- **main**: Hybrid version with Gun.js basics
- **gun**: Advanced P2P migration (active development)

## Key Features
- Rich text editing capabilities
- Collaborative wiki pages
- Version history (planned)
- Module federation for dynamic loading
- Real-time collaboration via Gun.js

## Gun.js Integration (gun branch)
```javascript
// Wiki pages stored in Gun
gun.get('wiki_plugin').get(sphereId).get('pages').get(pageId)

// Tab management
gun.get('wiki_plugin').get(sphereId).get('tabs')

// Active page tracking
gun.get('wiki_plugin').get(sphereId).get('activePage')
```

## Development

### Setup
```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Build plugin
pnpm build

# Type checking
pnpm type-check
```

### Module Federation Exposes
- `./WikiView`: Main wiki view component
- `./WikiCreate`: Wiki page creation view
- `./Main`: Plugin main component
- `./Sidebar`: Wiki navigation sidebar

## Migration Status to Pure P2P
- ✅ Gun.js for data storage
- ✅ Real-time sync basics
- ❌ Still requires backend server
- ❌ User authentication via backend
- ❌ File uploads via backend

## Known Issues
- Backend dependency not removed
- Hybrid approach causes sync complexity
- Gun relay runs alongside Express server

## Future: Pure P2P Architecture
To achieve true P2P like main TopLocs platform:
1. Remove Express/Prisma backend
2. Use Gun SEA for authentication
3. Store all data in Gun.js only
4. Use minimal Gun relay (26 lines)
5. Handle file uploads via Gun.js or IPFS

## Contributing
This plugin is actively being migrated to pure P2P architecture. Contributions welcome, especially for:
- P2P migration (gun branch)
- Rich text editor improvements
- Real-time collaboration features

## Related Documentation
- [TopLocs Plugin Development Guide](https://github.com/toplocs/tribelike/blob/main/docs/plugin-development.md)
- [TopLocs Architecture Overview](https://github.com/toplocs/tribelike/blob/main/docs/architecture.md)

## License
MIT License - See the main TopLocs project for details.
