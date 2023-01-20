import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63c3c00ff0028bf85f9d322b.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert('Error while getting');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return 'Loading...';
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
