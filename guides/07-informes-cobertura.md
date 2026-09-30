# 07 — Informes de cobertura

Generamos e interpretamos el informe de cobertura de código que pide la evaluación (documento de cobertura del Parcial 2).

## Pasos

1. Instala el plugin de cobertura para Karma:
   ```bash
   npm install --save-dev karma-coverage babel-plugin-istanbul
   ```

2. En `.babelrc`, agrega el plugin de Istanbul (solo mide cobertura, no cambia el código en producción):
   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"],
     "plugins": ["istanbul"]
   }
   ```

3. En `karma.conf.js`, agrega el reporter de cobertura:
   ```javascript
   reporters: ['progress', 'coverage'],
   coverageReporter: {
     type: 'html',
     dir: 'coverage/',
   },
   ```

4. Corre las pruebas de nuevo:
   ```bash
   npm test
   ```

5. Abre el reporte generado: `coverage/` → busca `index.html` y ábrelo con clic derecho → **Open with Live Server** (o simplemente arrástralo a una pestaña del navegador).

## Cómo leerlo

- **% Líneas / Sentencias**: cuánto del código se ejecutó durante las pruebas.
- **% Ramas**: cuántos caminos de los `if`/`switch` se probaron (ej: probar solo el caso feliz de un `if` dejando afuera el `else` baja este número).
- **% Funciones**: cuántas funciones se llamaron al menos una vez.
- Verde = cubierto, rojo = no cubierto. Las líneas rojas te dicen exactamente qué agregar como próxima prueba.

✅ **Checkpoint:** el reporte HTML abre y muestra los 3 archivos con specs (`Price.jsx`, `ProductCard.jsx`, y los que hayas ido agregando) con su % de cobertura.
