import { colors } from "@busca-milhas-ui/tokens";
import { getContrast } from "polished";

function getColor(color: string) {
  const contrast = getContrast(color, "#FFF");

  const selectedColor = contrast < 3.5 ? "#000" : "#FFF";

  return selectedColor;
}

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: color.length > 7 ? "#FFF" : getColor(color),
          }}
        >
          <strong>{key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
