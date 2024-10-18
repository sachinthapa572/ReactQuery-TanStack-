import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const Dummyapi = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchUserDetails = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user details');
  }
};

const FetchFoodRecipes = async () => {
  try {
    const response = await Dummyapi.get('/recipes');
    return response.status === 200 ? response.data : [];
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch recipes');
  }
};

const FetchIndividualFoodRecipes = async (id) => {
  try {
    console.log(id)
    const response = await Dummyapi.get(`/recipes/${id}`);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch recipes');
  }
};

export { api, fetchUserDetails, FetchFoodRecipes, FetchIndividualFoodRecipes };
