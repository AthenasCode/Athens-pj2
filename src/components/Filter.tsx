// src/components/Filter.tsx

type FilterProps = {
  filters: {
    name: string;
    options: string[];
  }[];
};

export function Filter({ filters }: FilterProps) {
  return (
    <aside className="filters">
      <h2>Filtros</h2>
      {filters.map((filter, idx) => (
        <div key={idx}>
          <h3>{filter.name}</h3>
          {filter.options.map((option, optionIdx) => (
            <label key={optionIdx}>
              <input type="checkbox" /> {option}
            </label>
          ))}
        </div>
      ))}
    </aside>
  );
}

export default Filter;
