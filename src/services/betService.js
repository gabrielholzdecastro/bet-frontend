import axios from 'axios';

const betService = {
  save: async (bet) => {
    const response = await axios.post('/bet', bet);
    return response.data;
  },

  delete: async (id) => {
    await axios.delete(`/bet/${id}`);
  },

};

export default betService;
