
import React from 'react';

function PropertySearch() {
  return (
    <div>
      <h1>Búsqueda de propiedades</h1>
      <form>
        <label htmlFor="location">Ubicación:</label>
        <input type="text" id="location" name="location" />
        <br />
        <label htmlFor="price-range">Rango de precio:</label>
        <input type="range" id="price-range" name="price-range" min="100000" max="1000000" />
        <br />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default PropertySearch;