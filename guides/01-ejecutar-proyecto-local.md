# 01 — Ejecutar el proyecto en local

De aquí en adelante trabajamos **sin AWS**: todo corre en tu computador, con VS Code normal (sin Remote-SSH), y sin tocar puertos.

## Prerrequisitos
- Node 22 instalado en tu computador (`node --version`).
- El proyecto (`my-ecommerce-app`) que ya armamos, en una carpeta local. Si lo tienes en GitHub, clónalo; si no, cópialo desde la instancia a tu computador.

## Pasos

1. Abre la carpeta del proyecto en VS Code: **File → Open Folder**.
2. Abre una terminal integrada (`` Ctrl+` `` / `` Cmd+` ``).
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador la URL que muestra la terminal (por defecto `http://localhost:5173`).

> Si tu `package.json` todavía tiene `"dev": "vite --host 0.0.0.0 --port 3000"` (de cuando trabajábamos en EC2), vuelve a dejarlo como `"dev": "vite"` — ya no necesitamos exponer el puerto a nadie más.

✅ **Checkpoint:** ves la app funcionando en `localhost`. Deja esta terminal abierta mientras trabajas; `Ctrl+C` la detiene.
