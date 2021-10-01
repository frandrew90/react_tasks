import axios from 'axios';

const BASSE_URL = 'https://react-shop-28331-default-rtdb.firebaseio.com';

export const createNewAdv = async product => {
  try {
    const response = await axios.post(
      BASSE_URL + `/advertisements/${product.category}.json`,
      product,
    );
    console.log(response);

    return response.data.name;
  } catch (error) {}
};

export const getProductsByCategory = async category => {
  try {
    const response = await axios.get(
      BASSE_URL + `/advertisements/${category}.json`,
    );
    if (response.data) {
      const keys = Object.keys(response.data);
      const products = keys.map(key => ({ id: key, ...response.data[key] }));

      return products;
    }
  } catch (error) {}
};
