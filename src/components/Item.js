ItemForm.js

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; // import the uuid library

function ItemForm({ categories, onItemFormSubmit }) {
const [itemName, setItemName] = useState('');
const [itemCategory, setItemCategory] = useState('Produce'); // set initial value to "Produce"

function handleNameChange(event) {
setItemName(event.target.value);
}

function handleCategoryChange(event) {
setItemCategory(event.target.value);
}

function handleSubmit(event) {
event.preventDefault();

const newItem = {
  id: uuid(),
  name: itemName,
  category: itemCategory,
};

onItemFormSubmit(newItem);

setItemName('');
setItemCategory('Produce');
}

return (
<form onSubmit={handleSubmit}>
<label>
Name:
<input type="text" value={itemName} onChange={handleNameChange} />
</label>
<label>
Category:
<select value={itemCategory} onChange={handleCategoryChange}>
{categories.map(category => (
<option key={category} value={category}>
{category}
</option>
))}
</select>
</label>
<button type="submit">Add Item</button>
</form>
);
}

export default ItemForm;
