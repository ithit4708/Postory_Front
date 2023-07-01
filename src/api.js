import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => {
//     if (response.status >= 300 && response.status < 400) {
//       const redirectLocation = response.headers['location'];

//       if (redirectLocation === '/login') {
//         const navigate = useNavigate();
//         const location = useLocation();
//         console.log('응답 인터셉트 주소' + location.pathname);

//         navigate('location', { state: { prevUrl: location.pathname } });
//       }
//     } else {
//       return response;
//     }
//   },
//   async (error) => {
//     return Promise.reject(error);
//   }
// );
