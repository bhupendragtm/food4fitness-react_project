import axios from 'axios';
import { apiConfig } from '../Config/Config';

export function getHeader() {
  return axios.get(apiConfig.baseURL + '/fff/blog');
}

//Banner, Results Marketing, Our Story and Our Team
export function getHomePageData() {
  return axios.get(apiConfig.baseURL + '/home');
}

//Get Post
export function getSinglePost() {
  return axios.get(apiConfig.baseURL + '/fff/blog');
}