# 🎨 Client Color Palette - Biarai Web

## Client Specified Colors

### Primary Colors
```css
#255465 → Azul petróleo oscuro (primary-dark)
#68AEC8 → Azul cielo medio (primary-medium) 
#B3D7E3 → Azul claro pastel (primary-light)
#E1EFF4 → Azul muy pálido, casi blanco (primary-pale)
#D9D9D9 → Gris claro neutro (neutral-light)
```

## Proposed Gradient Mappings

### Main Brand Gradient (Hero, CTAs)
```css
/* Old: from-blue-600 via-blue-700 to-indigo-800 */
/* New: */ from-[#255465] via-[#68AEC8] to-[#255465]
```

### Hover States
```css
/* Old: hover:from-blue-700 hover:via-blue-800 hover:to-indigo-900 */
/* New: */ hover:from-[#1a3d48] hover:via-[#5a9bb8] hover:to-[#1a3d48]
```

### Light Background Gradients
```css
/* Old: from-blue-50 via-blue-100 to-indigo-100 */
/* New: */ from-[#E1EFF4] via-[#B3D7E3] to-[#E1EFF4]
```

### Service-Specific Gradients
```css
/* Deal Advisory */
from-[#255465] to-[#68AEC8]

/* Nuevos Mercados */  
from-[#68AEC8] to-[#B3D7E3]

/* Operaciones TI */
from-[#255465] to-[#B3D7E3]
```

## Implementation Strategy
1. Add custom colors to tailwind.config.js
2. Update main gradients in page.tsx
3. Update service pages with new gradients
4. Update globe colors
5. Maintain gradient patterns but with new color scheme

---

**Date**: August 21, 2025  
**Status**: Client requested palette (implementation in progress)