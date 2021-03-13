import axios from 'axios';

export const getList = async (payload) => await axios.get('https://problem.comento.kr/api/list', {params: payload});

export const getAds = () => axios.get('https://problem.comento.kr/api/ads', {params: {page: 1, limit: 2}});

export const getCategory = () => axios.get('https://problem.comento.kr/api/category');

export const getView = (id) => axios.get('https://problem.comento.kr/api/list', {params: {id: 1}});