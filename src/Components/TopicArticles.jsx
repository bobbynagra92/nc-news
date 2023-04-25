import { useEffect, useState } from 'react';
import '../Styles/topics.css';
import { fetchAndSortTopicArticles} from '../api';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const TopicArticles = ({ topic }) => {
  const [topicArticles, setTopicArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    fetchAndSortTopicArticles(
      topic.slug,
      searchParams.sort_by,
      searchParams.order_by
    ).then((articles) => {
      setTopicArticles(articles);
      setLoading(false);
    });
  }, [topic, searchParams.order_by, searchParams.sort_by]);

  if (loading) {
    return <Loading isLoading={loading} />;
  }

  return (
    <>
      <h1>{topic.slug}</h1>
      <h4>{topic.description}</h4>
      <Form className='sort'>
        <Form.Select
          aria-label='sort-by select form options'
          onChange={(e) => {
            setSearchParams({...searchParams, sort_by: e.target.value});
          }}
        >
          <option>Sort By</option>
          <option value='date'>Date</option>
          <option value='comment_count'>Comment Count</option>
          <option value='votes'>Votes</option>
        </Form.Select>
        <Form.Select
          aria-label='order-by select form options'
          onChange={(e) => {
            setSearchParams({...searchParams , order_by: e.target.value});
          }}
        >
          <option>Order By</option>
          <option value='ASC'>Ascending</option>
          <option value='DESC'>Descending</option>
        </Form.Select>
      </Form>
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
};

export default TopicArticles