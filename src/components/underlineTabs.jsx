import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { Link } from "react-router-dom";

const underlineTabs = [
  { text: "Tennis", path: "/tennis" },
  { text: "Nosotros", path: "/nosotros" },
  { text: "Contactanos", path: "/contactanos" },
  { text: "Cuenta", path: "/cuenta" },
];

export default function UnderlineTabs() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const tabsComponents = underlineTabs.map((tab, i) => {
    return (
      <Link
        to={tab.path}
        key={`tab-${tab.text}`}
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
    );
  });

  return <div style={{ display: "flex", gap: "2.5rem" }}>{tabsComponents}</div>;
}
