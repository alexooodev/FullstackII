import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("muestra el nombre del producto", () => {
    act(() => {
      createRoot(container).render(<ProductCard name="Zapatillas" price={29990} onAdd={() => {}} />);
    });
    expect(container.textContent).toContain("Zapatillas");
  });

  it("llama a onAdd al hacer clic en el botón", () => {
    let llamado = false;
    act(() => {
      createRoot(container).render(
        <ProductCard
          name="Mochila"
          price={15990}
          onAdd={() => {
            llamado = true;
          }}
        />,
      );
    });
    const boton = container.querySelector("button");
    act(() => {
      boton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(llamado).toBe(true);
  });
});
