# 05 — Configurar Jasmine y Karma

Preparamos el entorno de pruebas unitarias que pide la evaluación (Jasmine + Karma).

> Karma corre sus pruebas con su propio empaquetador (webpack), totalmente aparte del servidor Vite de la app. No toca `vite.config.js` ni afecta `npm run dev`.

## Pasos

1. Instala las dependencias de testing:
   ```bash
   npm install --save-dev karma karma-jasmine karma-chrome-launcher jasmine-core karma-webpack webpack @babel/core @babel/preset-env @babel/preset-react babel-loader
   ```

2. En la raíz del proyecto (junto a `package.json`), crea `.babelrc`:
   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

3. Crea `karma.conf.js` en la raíz:
   ```javascript
   module.exports = function (config) {
     config.set({
       frameworks: ['jasmine'],
       files: [
         'src/**/*.spec.jsx',
       ],
       preprocessors: {
         'src/**/*.spec.jsx': ['webpack'],
       },
       webpack: {
         module: {
           rules: [
             {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               use: 'babel-loader',
             },
           ],
         },
         resolve: { extensions: ['.js', '.jsx'] },
       },
       reporters: ['progress'],
       browsers: ['ChromeHeadless'],
       singleRun: true,
     })
   }
   ```

   > Si prefieres ver el navegador correr las pruebas en vez de que sea headless, cambia `browsers: ['ChromeHeadless']` por `browsers: ['Chrome']` (necesitas Chrome instalado).

4. Agrega el script en `package.json`, dentro de `"scripts"`:
   ```json
   "test": "karma start karma.conf.js"
   ```

5. Crea un archivo de prueba mínimo para confirmar que todo funciona: `src/sanity.spec.jsx`:
   ```jsx
   describe('entorno de pruebas', () => {
     it('corre correctamente', () => {
       expect(1 + 1).toBe(2)
     })
   })
   ```

6. Corre las pruebas:
   ```bash
   npm test
   ```

✅ **Checkpoint:** la terminal muestra `1 test completed` (o similar) sin errores de compilación. Si ves errores de "Unexpected token" es que falta el preset de Babel correcto en `.babelrc`.
