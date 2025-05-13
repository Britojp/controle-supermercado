import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    accept: 'application/json',
  }
});

export const getAllProducts = async () => {

  try{
      const response = await api.get('/product', {
      });
      console.log(response.data)
      return response.data;

      } catch (error) {
          console.error('Erro ao buscar produtos:', error);
          throw new Error('Erro ao buscar produtos');
}
};

export const getAllUsers = async () => {

  try{
      const response = await api.get('/user', {
      });
      console.log(response.data)
      return response.data;

      } catch (error) {
          console.error('Erro ao buscar usuários:', error);
          throw new Error('Erro ao buscar usuários');
}
};

export default api;
