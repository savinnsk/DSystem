import { ReactNode } from "react";
import "../styles/tokens-grid.css";

interface EmojiGridProps {
  emojis: any;

}

export function IconsGrid({ emojis }: EmojiGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(emojis).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value as ReactNode}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
