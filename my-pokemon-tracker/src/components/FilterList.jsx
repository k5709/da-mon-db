import React from 'react';

const FilterUI = ({ filters, setFilter, clearFilters }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.name, e.target.value);
  };

  return (
    <div className="mb-4 space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Set Filter */}
      <div className="space-y-2">
        <label className="block text-sm">Filter by Set</label>
        <select
          name="set"
          value={filters.set}
          onChange={handleFilterChange}
          className="border p-2 w-full"
        >
          <option value="">Select a Set</option>
          {["Base Set", "Sword & Shield", "XY", "Sun & Moon"].map((set) => (
            <option key={set} value={set}>
              {set}
            </option>
          ))}
        </select>
      </div>

      {/* Rarity Filter */}
      <div className="space-y-2">
        <label className="block text-sm">Filter by Rarity</label>
        <select
          name="rarity"
          value={filters.rarity}
          onChange={handleFilterChange}
          className="border p-2 w-full"
        >
          <option value="">Select a Rarity</option>
          {["Rare", "Uncommon", "Common", "Holo", "Secret Rare"].map((rarity) => (
            <option key={rarity} value={rarity}>
              {rarity}
            </option>
          ))}
        </select>
      </div>

      {/* Type Filter */}
      <div className="space-y-2">
        <label className="block text-sm">Filter by Type</label>
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="border p-2 w-full"
        >
          <option value="">Select a Type</option>
          {["Fire", "Water", "Psychic", "Grass", "Electric"].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Release Date Filter */}
      <div className="space-y-2">
        <label className="block text-sm">Filter by Release Year</label>
        <select
          name="releaseDate"
          value={filters.releaseDate}
          onChange={handleFilterChange}
          className="border p-2 w-full"
        >
          <option value="">Select Release Year</option>
          {["2021", "2020", "2019", "2018", "2017"].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white p-2 rounded mt-4 w-full"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterUI;