import axios from "axios"

const newsAPI = axios.create({
  baseURL: 'https://be-news-api-m2rq.onrender.com/api',
});

export const fetchUsers = async () => {
  const response = await newsAPI.get("/users");
  return response.data.users;
}

export const fetchArticles = async () => {
  const response = await newsAPI.get("/articles");
  return response.data.articles;
}