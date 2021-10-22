/* eslint-disable no-empty-function */
import axios from 'axios';

const link = 'http://localhost:4444/api/v1/blog';

export async function toggleLike(blogId, toggle) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const state = {
      toggle,
      blogId
    };

    const response = await axios.post(`${link}/toggle-like`, state, config);
    console.log('rererer', response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createBlog(formData) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.post(`${link}/create`, formData, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateBlog(formData) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.put(`${link}/update`, formData, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
