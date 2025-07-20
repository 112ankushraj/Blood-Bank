// import axios from 'axios'
 
// const API = axios.create({baseURL: process.env.REACT_APP_BASEURL})

// API.interceptors.request.use((req) => {
//   if(localStorage.getItem('token')){
//     req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   }
//   return req;
// })

// export default API


import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BASEURL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;


