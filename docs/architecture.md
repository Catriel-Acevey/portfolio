# Arquitectura Base del Portfolio (Next.js & Tailwind CSS)

Este documento describe la arquitectura técnica, la estructura de archivos y las decisiones de diseño base adoptadas en la **Fase 1** de la migración del portfolio.

---

## 1. Stack Tecnológico
- **Framework:** Next.js (App Router, `app/`)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS con directivas modernas y variables CSS globales (`src/app/globals.css`)
- **Iconografía:** `lucide-react`
- **Hosting / Deploy:** Firebase Hosting

---

## 2. Estructura de Directorios

```text
portfolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout, metadatos y configuración global
│   │   ├── page.tsx              # Vista principal / Landing (preparada para componentes UI)
│   │   ├── globals.css           # Estilos globales y directivas de Tailwind
│   │   └── not-found.tsx         # Página 404 personalizada
│   ├── components/               # Contenedor para componentes UI (modularización futura)
│   │   └── ui/                   # Primitivas y componentes atómicos
│   ├── data/
│   │   └── portfolioData.ts      # Fuente centralizada de datos (perfil, proyectos, experiencia, skills)
│   └── types/
│       └── index.ts              # Tipados TypeScript (Project, Experience, SkillCategory, UserProfile)
├── public/                       # Activos estáticos
│   ├── assets/
│   │   └── docs/                 # CVs (ES/EN)
│   └── images/                   # Screenshots de proyectos y perfil
├── tsconfig.json                 # Configuración de TypeScript con alias @/*
└── package.json                  # Dependencias y scripts
```

---

## 3. Capa de Datos (`src/data/portfolioData.ts`)
Toda la información del portfolio se encuentra desacoplada de la interfaz en `src/data/portfolioData.ts` y fuertemente tipada mediante interfaces ubicadas en `src/types/index.ts`. Esto permite iterar con total libertad sobre los componentes de UI sin afectar la estructura de datos.

---

## 4. Comandos de Verificación y Build
Los siguientes comandos han sido probados y validados en el entorno de desarrollo:

- **Desarrollo:** `npm run dev`
- **Build de Producción:** `npm run build` (genera un build estático optimizado y libre de errores de TypeScript).
- **Type-Check:** `npx tsc --noEmit`

---

## 5. Próximos Pasos (Dirección de Arte y UI)
La fase de diseño visual, dirección de arte, animaciones y construcción de componentes de UI se encuentra **pendiente**, y será desarrollada iterativamente por el usuario utilizando la skill **Impeccable**.
