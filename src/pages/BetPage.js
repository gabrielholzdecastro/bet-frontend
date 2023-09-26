import React, { useState, useEffect } from 'react';
import BetComponent from './BetComponent';
import betService from '../services/betService';

const BetPage = () => {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    fetchBets();
  }, []);

  const fetchBets = async () => {
    try {
      const response = await betService.getAll(); // Implemente o método 'getAll' no serviço
      setBets(response);
    } catch (error) {
      console.error('Erro ao buscar apostas:', error);
    }
  };

  const handleDeleteBet = async (id) => {
    try {
      await betService.delete(id);
      fetchBets();
    } catch (error) {
      console.error('Erro ao excluir aposta:', error);
    }
  };

  return (
    <div>
      <h1>Apostas</h1>
      {bets.map((bet) => (
        <BetComponent key={bet.id} bet={bet} onDelete={handleDeleteBet} />
      ))}
    </div>
  );
};

export default BetPage;
