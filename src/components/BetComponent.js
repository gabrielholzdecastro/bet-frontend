import React from 'react';

const BetComponent = ({ bet, onDelete }) => {
  return (
    <div>
      <span>ID: {bet.id}</span>
      <span>Valor: {bet.valor}</span>
      <button onClick={() => onDelete(bet.id)}>Excluir</button>
      <hr />
    </div>
  );
};

export default BetComponent;
