import React from 'react';
import Loading from './Loading';

function ExercisesPage(props) {
  const { exercises } = props.location.state;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  return loading === true ? (
    <Loading />
  ) : (
    <React.Fragment>
      <h6>Exercise Page</h6>
      <p>{exercises.id}</p>
      <p>{exercises.name}</p>
      <img src={exercises.image} alt={exercises.name} />

      <p>{exercises.description}</p>
      <p>{exercises.link}</p>
      <p>{exercises.tip}</p>
    </React.Fragment>
  );
}

export default ExercisesPage;
