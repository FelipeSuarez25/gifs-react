import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelCLicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelCLicked }) => {
  return (
    <div className="previous-searches">
      <h2>Busqueadas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term}
          onClick={() => onLabelCLicked(term)}>{term}</li>
        ))}
      </ul>
    </div>
  );
};
