import axios from 'axios';

export const getList = (payload) => axios.get('https://problem.comento.kr/api/list', {params: payload});

export const getAds = (payload) => axios.get('https://problem.comento.kr/api/ads', {params: payload});

export const getCategory = () => axios.get('https://problem.comento.kr/api/category');

export const getView = (id) => axios.get('https://problem.comento.kr/api/list', {params: {id: 1}});