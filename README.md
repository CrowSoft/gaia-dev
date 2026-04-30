# Archivos para Docusaurus — Plan Arduino

## Estructura de archivos

```
tu-repo/
├── docs/
│   └── arduino/
│       ├── intro.mdx              ✅ listo
│       └── fase1-fundamentos.mdx  ✅ listo
└── sidebars.js                   ✅ listo (mergear con el tuyo)
```

## Pasos para integrar

### 1. Copiar los docs
```bash
cp docs/arduino/intro.mdx           tu-proyecto/docs/arduino/intro.mdx
cp docs/arduino/fase1-fundamentos.mdx  tu-proyecto/docs/arduino/fase1-fundamentos.mdx
```

### 2. Integrar el sidebar
Si ya tienes un `sidebars.js`, agrega el bloque `arduinoSidebar` al objeto existente.
Si es un proyecto nuevo, reemplaza el archivo completo.

### 3. Verificar que Tabs funciona
La Fase 1 usa el componente `<Tabs>` de Docusaurus. 
Asegúrate de tener `@docusaurus/theme-classic` instalado (viene por defecto).

El import está incluido en el archivo:
```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

### 4. Próximas fases
Los slots en `sidebars.js` ya están comentados esperando los archivos:
- `fase2-sensores.md`
- `fase3-movimiento.md`
- `fase4-proyectos.md`
- `fase5-zumo.md`

## Componentes de Docusaurus usados

| Componente | Dónde | Para qué |
|------------|-------|----------|
| `:::tip` | Variaciones divertidas, sugerencias | Destacar ideas opcionales |
| `:::note` | Preguntas para la próxima sesión | Cierre de cada sesión |
| `:::warning` | Avisos importantes (e.g. pines PWM) | Errores comunes |
| `:::info` | Perfil del estudiante | Contexto general |
| `<Tabs>` | Cada sesión | Flujo / Concepto / Variaciones / Checklist |
| Front matter `tags` | Todos los docs | Búsqueda y filtrado |
| Front matter `sidebar_position` | Todos los docs | Orden del sidebar |