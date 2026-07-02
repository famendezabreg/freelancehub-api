# FreelanceHub API

API REST tipo marketplace de servicios freelance, desarrollada con **NestJS** como examen parcial del curso de APIs. Permite publicar servicios (autenticado) y consultar el catálogo público (sin autenticación).

## Stack

- **NestJS**
- **TypeORM** + **PostgreSQL**
- **JWT** (`@nestjs/jwt`, `@nestjs/passport`)
- **class-validator** — validación de DTOs
- **Swagger** — documentación interactiva en `/api`

## Nota sobre el examen

El login usa comparación de contraseña en texto plano (sin bcrypt) y no usa Google OAuth. Esto fue **un requisito explícito del examen**, que pedía un login simulado email/password para enfocar la evaluación en el diseño de rutas públicas/protegidas con JWT, no en la capa de cifrado. Para un ejemplo con hashing y OAuth completo, ver [HeavyRent API](https://github.com/famendezabreg/heavyrent-api).

## Entidades

- `User` — id, email, name, password
- `Service` — id, title, category, description, price, provider (relación con User)

## Instalación local

\`\`\`bash
npm install
cp .env.example .env   # completar credenciales de PostgreSQL y JWT_SECRET
npm run start:dev
\`\`\`

Swagger disponible en `http://localhost:3000/api`.

## Endpoints

- `POST /auth/login` — login, retorna JWT
- `GET /public/services` — catálogo público, sin token
- `POST /services` — publicar un servicio (requiere JWT)