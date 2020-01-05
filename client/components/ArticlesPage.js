import React from 'react';
// import Loading from './Loading';

function ArticlesPage(props) {
  const { articles } = props.location.state;
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  // if (error) {
  //   return <p className='center-text error'>{error}</p>;
  // }

  // return loading === true ? (
  //   <Loading />
  // ) : (
  return (
    <div className='row'>
      <h1 className='text-center col-12'>{articles.title} </h1>
      <h6 className='text-center col-12 text-muted pb-3'>
        By <a href='/gravitus/articles'>{articles.author}</a> -{' '}
        {articles.date.toLocaleDateString('default', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </h6>
      <img
        className=''
        style={{ width: '100%', height: '400px' }}
        src={articles.image}
        alt={articles.name}
      />
      <p className='display-linebreak py-3'>{articles.description}</p>
    </div>
  );
}

export default ArticlesPage;
