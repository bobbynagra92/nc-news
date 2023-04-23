import { useEffect, useState } from 'react';
import '../Styles/topics.css';
import { fetchTopicArticles } from '../api';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const TopicArticles = ({topic}) => {
  const [topicArticles, setTopicArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopicArticles(topic.slug).then((articles) => {
      setTopicArticles(articles);
      setLoading(false);
    })
  }, [topic])

  if (loading) {return (<Loading isLoading={loading}/>)}
  
  return (
    <>
      <h1>{topic.slug}</h1>
      <h4>{topic.description}</h4>
      <section className='topic-articles'>
        {topicArticles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <div key={article.article_id} className='article'>
              <img src={article.article_img_url} alt={article.title} />
              <h6>{article.title}</h6>
              <p className='comment_num'>{article.comment_count} 💬</p>
              <p className='vote_num'>{article.votes} 👍</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default TopicArticles