# 06 — Pruebas unitarias de componentes

Escribimos specs con Jasmine para verificar renderizado, props y eventos de los componentes — lo que pide la evaluación (IE2.2.1: lógica, comportamiento y manipulación del DOM).

## Pasos

1. Crea `src/components/atoms/Price.spec.jsx`:
   ```jsx
   import { createRoot } from 'react-dom/client'
   import { act } from 'react-dom/test-utils'
   import Price from './Price'

   describe('Price', () => {
     let container

     beforeEach(() => {
       container = document.createElement('div')
       document.body.appendChild(container)
     })

     afterEach(() => {
       document.body.removeChild(container)
     })

     it('muestra el monto formateado', () => {
       act(() => {
         createRoot(container).render(<Price amount={9990} />)
       })
       expect(container.textContent).toContain('9.990')
     })
   })
   ```

2. Crea `src/components/molecules/ProductCard.spec.jsx` — este verifica un evento (clic en "Agregar"):
   ```jsx
   import { createRoot } from 'react-dom/client'
   import { act } from 'react-dom/test-utils'
   import ProductCard from './ProductCard'

   describe('ProductCard', () => {
     let container

     beforeEach(() => {
       container = document.createElement('div')
       document.body.appendChild(container)
     })

     afterEach(() => {
       document.body.removeChild(container)
     })

     it('muestra el nombre del producto', () => {
       act(() => {
         createRoot(container).render(
           <ProductCard name="Zapatillas" price={29990} onAdd={() => {}} />
         )
       })
       expect(container.textContent).toContain('Zapatillas')
     })

     it('llama a onAdd al hacer clic en el botón', () => {
       let llamado = false
       act(() => {
         createRoot(container).render(
           <ProductCard name="Mochila" price={15990} onAdd={() => { llamado = true }} />
         )
       })
       const boton = container.querySelector('button')
       act(() => {
         boton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
       })
       expect(llamado).toBe(true)
     })
   })
   ```

3. Corre las pruebas:
   ```bash
   npm test
   ```

Este patrón (crear un `container`, renderizar con `createRoot` dentro de `act`, revisar `container.textContent` o disparar eventos con `dispatchEvent`) se repite para el resto de los componentes: `Navbar`, `ShoppingCart`, `RegistrationForm`.

✅ **Checkpoint:** `npm test` corre 3 specs (`sanity`, `Price`, `ProductCard`) y todas pasan en verde.
