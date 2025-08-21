# 🚀 Guía de Deployment - Biarai Web

## Preparación para GitHub

### 1. Configurar Repositorio Remoto
```bash
# Agregar el repositorio remoto de GitHub
git remote add origin https://github.com/TU_USUARIO/biarai-web.git

# Verificar que se agregó correctamente
git remote -v
```

### 2. Hacer el Primer Push
```bash
# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Biarai Web ready for deployment"

# Hacer push a la rama principal
git push -u origin master
```

## Deployment en Vercel

### Opción 1: Deployment Automático (Recomendado)
1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configura las variables de entorno si las necesitas:
   - `LEAD_WEBHOOK_URL`: URL del webhook para leads
   - `NEXT_PUBLIC_GA_ID`: ID de Google Analytics
   - `NEXT_PUBLIC_WHATSAPP_PHONE`: Número de WhatsApp
6. Haz clic en "Deploy"

### Opción 2: Deployment Manual con Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

## Variables de Entorno Requeridas

### Para Producción
- `LEAD_WEBHOOK_URL`: URL del endpoint para procesar leads
- `NEXT_PUBLIC_GA_ID`: ID de Google Analytics (opcional)
- `NEXT_PUBLIC_WHATSAPP_PHONE`: Número de WhatsApp Business

### Para Desarrollo
- `NODE_ENV`: development
- Las variables públicas pueden configurarse en `.env.local`

## Verificación del Deployment

1. **Build**: Verificar que el build sea exitoso
2. **Funcionalidad**: Probar todas las páginas y funcionalidades
3. **Performance**: Verificar métricas de Core Web Vitals
4. **SEO**: Verificar meta tags y structured data
5. **Analytics**: Verificar que Google Analytics esté funcionando

## Troubleshooting

### Error de Build
- Verificar que todas las dependencias estén en `package.json`
- Ejecutar `npm run build` localmente para identificar errores
- Revisar logs de Vercel

### Variables de Entorno
- Verificar que estén configuradas en el dashboard de Vercel
- Las variables públicas deben empezar con `NEXT_PUBLIC_`
- Reiniciar el deployment después de cambiar variables

### Performance
- Optimizar imágenes y assets
- Verificar lazy loading de componentes
- Revisar bundle size

## Monitoreo

- **Vercel Analytics**: Métricas de performance y errores
- **Google Analytics**: Comportamiento de usuarios
- **Logs**: Revisar logs de errores en Vercel

## Actualizaciones

Para futuras actualizaciones:
```bash
git add .
git commit -m "Description of changes"
git push origin master
```

Vercel desplegará automáticamente los cambios.
