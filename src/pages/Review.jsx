import React from 'react';

function Review() {
  return (
    <div>
      <h1>Comentarios</h1>
      <p>Deja tu comentario sobre tu experiencia con nuestras propiedades.</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="review">Comentario:</label>
        <textarea id="review" name="review"></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Review;
