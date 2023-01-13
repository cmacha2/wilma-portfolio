import React from 'react';

function Newsletter() {
  return (
    <div>
      <h1>Boletín de noticias</h1>
      <p>Suscríbete para recibir noticias y actualizaciones sobre nuestras propiedades.</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
}

export default Newsletter;
