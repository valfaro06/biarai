# Biarai Web

Sitio web corporativo de Biarai, desarrollado con Next.js 15 y TypeScript.

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Testing**: Jest + Testing Library

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar tests
npm test

# Ejecutar linting
npm run lint
```

## 📁 Estructura del Proyecto

- `src/app/` - Páginas y rutas de la aplicación
- `src/components/` - Componentes reutilizables
- `src/lib/` - Utilidades y configuraciones
- `public/` - Archivos estáticos

## 🚀 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El deployment se realizará automáticamente en cada push a la rama principal

### Variables de Entorno
- No se requieren variables de entorno para el deployment básico
- Para funcionalidades adicionales, configurar en el dashboard de Vercel

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificación de código
- `npm test` - Ejecución de tests
- `npm run test:watch` - Tests en modo watch
- `npm run test:coverage` - Tests con cobertura

## 🔒 Seguridad

- No se incluyen archivos `.env` en el repositorio
- Las claves API deben configurarse en Vercel
- El `.gitignore` está configurado para excluir archivos sensibles

## 📞 Contacto

Para más información sobre el proyecto, contacta al equipo de desarrollo de Biarai.
