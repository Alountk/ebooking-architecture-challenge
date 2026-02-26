# Ebooking Architecture Challenge

Este proyecto ha sido inicializado con una arquitectura moderna y mejores prácticas para el desarrollo con React.

## Tecnologías Utilizadas

- **React 19**: La última versión de React.
- **Vite**: Herramienta de construcción ultra rápida.
- **TypeScript**: Para un desarrollo con tipado estático seguro.
- **PNPM**: Gestor de paquetes eficiente.

## Buenas Prácticas y Calidad de Código

- **ESLint**: Configurado con plugins para React Hooks, Refresh, Accesibilidad (jsx-a11y) y Prettier.
- **Prettier**: Formateo de código consistente.
- **Husky & lint-staged**: Validaciones automáticas antes de cada commit.
- **EditorConfig**: Consistencia entre diferentes editores.

## Testing Stack

- **Vitest**: Framework de testing moderno y rápido compatible con Vite.
- **React Testing Library**: Para testear componentes de forma centrada en el usuario.
- **jest-dom**: Matchers personalizados para assertions en el DOM.

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila el proyecto para producción.
- `pnpm lint`: Ejecuta el linter en todo el proyecto.
- `pnpm test`: Ejecuta los tests con Vitest.
- `pnpm test:ui`: Abre la interfaz de usuario de Vitest.

## Estructura de Tests

Los tests de componentes se encuentran junto a sus respectivos archivos (ej. `App.test.tsx`) o en un directorio `src/__tests__`. La configuración global de testing se encuentra en `src/test/setup.ts`.
