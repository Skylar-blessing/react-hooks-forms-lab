import React, { useState } from 'react';

function Filter({ categories, items, onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState('');

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  }

  const filteredItems = items.filter(item => item.name.includes(searchText));

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
      <select onChange={onCategoryChange}>
        <option value="All">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
