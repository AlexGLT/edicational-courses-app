import axiosInstanceCreator from 'axios';

export const axios = axiosInstanceCreator.create({
	baseURL: 'https://api.wisey.app/api/v1'
});

axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const config = error.config;

		if (error.response.status === 401 && !config._retry) {
			config._retry = true;

			const response = await axios.get('/auth/anonymous?platform=subscriptions');

			if (response?.data?.token) {
				localStorage.setItem('token', response.data.token)
			}

			return axios(config);
		}

		return Promise.reject(error);
	}
);