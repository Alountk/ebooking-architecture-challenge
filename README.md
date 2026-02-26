# Ebooking Architecture Challenge

Este proyecto ha sido desarrollado siguiendo una arquitectura hexagonal, TDD y buenas prácticas de React moderno (Hooks, Context, Composition).

## ✅ Estado del Challenge

### Requerimientos Funcionales
- [x] **Listado de Usuarios**: Muestra nombre, email y ciudad desde la API.
- [x] **Filtrado en Tiempo Real**: Input de texto para filtrar por nombre (implementado en Backend-for-Frontend logic).
- [x] **Vista de Detalle**: Modal con información extendida (teléfono, website, compañía).
- [x] **Persistencia de Estado**: El filtro se sincroniza con la URL (`?q=...`) y se restaura al recargar.

### Requerimientos Técnicos
- [x] **React 19+**: Hooks y Functional Components.
- [x] **TypeScript Estricto**: Interfaces definidas en Dominio.
- [x] **Arquitectura**: Hexagonal (Separación clara entre `domain`, `infrastructure` y `presentation`).
- [x] **Gestión de Estado**: Context API + Custom Hooks (`useUsers` y `useUrlSync`).
- [x] **Testing**: Vitest + React Testing Library (Unitario de Repositorio y Hook).

## 🚀 Cómo ejecutar el proyecto

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Levantar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```

3. **Ejecutar tests:**
   ```bash
   pnpm test
   ```

## 🏗 Arquitectura del Proyecto

El código está organizado modularmente bajo `src/modules/`:

- **Domain (`/domain`)**: Interfaces y Contratos (`User`, `IUserRepository`). Puro TypeScript, sin dependencias de React.
- **Infrastructure (`/infrastructure`)**: Implementación real (`UserRepository`) que consume la API.
- **Presentation (`/presentation`)**: Componentes de UI (`UserList`, `UserCard`) y Lógica de Vista (`useUsers`).

## 🔮 Deuda Técnica / Mejoras Futuras

- **Estilos**: Se usaron estilos en línea para velocidad y minimizar dependencias. Mover a CSS Modules, Tailwind o Styled Components para producción.
- **Error Handling UI**: Mejorar el feedback visual cuando falla la API (actualmente solo loguea a consola).
- **Virtualización**: Para listas muy grandes de usuarios, sería ideal implementar `react-window` o similar.
- **Accesibilidad**: Mejorar aún más el manejo de foco en el modal (focus trap).

## Tecnologías Utilizadas

- **React 19**
- **Vite**
- **TypeScript**
- **Vitest & Testing Library**
- **ESLint + Prettier + Husky** (Calidad de código asegurada en cada commit)

- `pnpm test:ui`: Abre la interfaz de usuario de Vitest.

## Estructura de Tests

Los tests de componentes se encuentran junto a sus respectivos archivos (ej. `App.test.tsx`) o en un directorio `src/__tests__`. La configuración global de testing se encuentra en `src/test/setup.ts`.
