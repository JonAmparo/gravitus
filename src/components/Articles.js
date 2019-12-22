import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getArticles } from '../api/api.js';

function Articles(props) {
  const [articles, setArticles] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { match } = props;

  React.useEffect(() => {
    getArticles()
      .then(articles => {
        setArticles(articles);
        setLoading(false);
        setError(null);
      })
      .catch(e => {
        console.warn(e.message);
        setError(`Error fetching data. Please try again.`);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <h1 className='text-center'>Articles</h1>
      <h6 className='separatorLine'>LATEST ARTICLES</h6>
      <div className='row'>
        {articles.map((articles, index) => (
          <div key={articles.title + index} className='col-lg-6'>
            <Link
              className='text-white'
              to={{
                pathname: `${match.url}/${articles.link}`,
                state: { articles }
              }}
            >
              <img
                src={articles.image}
                alt={articles.name}
                style={{ width: '100%', height: '250px' }}
              />
              <h4>{articles.title}</h4>
            </Link>
            <p className='text-muted'>
              {articles.date.toLocaleString('default', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Articles;
