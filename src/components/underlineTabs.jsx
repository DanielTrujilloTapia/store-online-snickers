import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { Link } from "react-router-dom";

const underlineTabs = [
  { text: "Tennis", path: "/Sneakers", dropdown: ["Hombres", "Mujeres"] },
  { text: "Nosotros", path: "/nosotros" },
  { text: "Contactanos", path: "/contactanos" },
  { text: "Carrito", path: "/carrito" },
  { text: "Cuenta", path: "/cuenta" },
];

export default function UnderlineTabs() {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Controla el índice del dropdown abierto

  const tabsComponents = underlineTabs.map((tab, i) => {
    const hasDropdown = tab.dropdown && tab.dropdown.length > 0;

    return (
      <div
        key={`tab-${tab.text}`}
        style={{
          position: "relative",
          display: "inline-block",
        }}
        onMouseEnter={() => hasDropdown && setHoveredIndex(i)} // Abre el dropdown al pasar el cursor
        onMouseLeave={() => hasDropdown && setHoveredIndex(null)} // Cierra el dropdown al quitar el cursor
      >
        <Link
          to={tab.path}
          onClick={() => setSelectedIndex(i)}
          style={{
            padding: "0.65rem 0.75rem",
            textDecoration: "none",
            color: "black",
            backgroundColor: "rgba(238, 238, 238)",
            border: 0,
            cursor: "pointer",
            background: "white",
            fontSize: "1rem",
            display: "inline-block",
          }}
        >
          {tab.text}

          {selectedIndex === i && (
            <div style={{ position: "relative", transform: "translateY(3px)" }}>
              <MagicTabSelect
                id="underline"
                transition={{ type: "spring", bounce: 0.3 }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "0.15rem",
                    backgroundColor: "black",
                    position: "absolute",
                  }}
                />
              </MagicTabSelect>
            </div>
          )}
        </Link>

        {/* Dropdown */}
        {hasDropdown && hoveredIndex === i && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-20%)", // Centra el dropdown respecto al enlace
              backgroundColor: "white",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              padding: "0.5rem",
              zIndex: 10,
              minWidth: "100px",
            }}
          >
            {tab.dropdown.map((item) => (
              <Link
                key={`dropdown-${item}`}
                to={`${tab.path}/${item.toLowerCase()}`} // Ruta dinámica
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
                onClick={() => setSelectedIndex(i)} // Marca el índice principal como seleccionado
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  });

  return <div style={{ display: "flex", gap: "2.5rem" }}>{tabsComponents}</div>;
}
