import axios from 'axios';

export const getList = (params) => axios.get('https://problem.comento.kr/api/list', {params: params});

export const getAds = (params) => axios.get('https://problem.comento.kr/api/ads', {params: params});

export const getCategory = () => axios.get('https://problem.comento.kr/api/category');

export const getView = (params) => axios.get('https://problem.comento.kr/api/view', {params: params});