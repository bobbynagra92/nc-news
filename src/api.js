import axios from "axios"

const newsAPI = axios.create({
  baseURL: 'https://be-news-api-m2rq.onrender.com/api',
});

export const fetchUsers = async () => {
  const response = await newsAPI.get("/users");
  return response.data.users;
}

export const matchUserAndAuthor = (author, usersArr) => {
  const {name, avatar_url} = usersArr.filter((user) => user.username === author)[0];
  return { name, avatar_url };
}

export const fetchArticles = async () => {
  const response = await newsAPI.get("/articles");
  return response.data.articles;
}

export const fetchArticle = async (article_id) => {
  const response = await newsAPI.get(`/articles/${article_id}`);
  return response.data.article;
}

export const fetchArticleComments = async (article_id) => {

 const response = await newsAPI.get(`/articles/${article_id}/comments`);
  return response.data.comments;
}

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
}

export const updateVotes = async (increment, article_id) => {
  const response = await newsAPI.patch(`/articles/${article_id}`, {inc_votes: increment})
  return response.data.article
};

export const postComment = async (comment, article_id) => {
  const response = await newsAPI.post(`/articles/${article_id}/comments`, comment)
  return response.data.comment
}

export const fetchUserByUsername = (username) => {
  return fetchUsers().then((users) => {
    const user = users.filter((user) => user.username === username)[0];
    return user;
  });
};

export const fetchTopics = async () => {
  const response = await newsAPI.get("/topics");
  return response.data.topics;
}

export const fetchTopicArticles = async (topic) => {
  const response = await newsAPI.get(`/articles?topic=${topic}`);
  return response.data.articles;
}