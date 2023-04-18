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

export const fetchArticle = async (article_id) => {
  const response = await newsAPI.get(`/articles/${article_id}`);
  return response.data.article;
}

export const fetchUserByName = async (author) => {
 const response = await newsAPI.get(`/users`);
  return response.data.filter(user => {
    console.log(user.username === author)});
}

export const fetchArticleComments = async (article_id) => {
 const response = await newsAPI.get(`/articles/${article_id}/comments`);
  return response.data.comments;
}