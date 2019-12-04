import React from 'react';
import { Link } from 'react-router-dom';
import { getExercises } from '../api';
import Loading from './Loading';

function Exercises(props) {
  const [exercises, setExercises] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const { match } = props;

  React.useEffect(() => {
    getExercises()
      .then(exercises => {
        setExercises(exercises);
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

  return loading === true ? (
    <Loading />
  ) : (
    <React.Fragment>
      <h1>Exercises</h1>
      {exercises.map((exercises, index) => (
        <div key={exercises.id + exercises.name}>
          <Link
            to={{
              pathname: `${match.url}/${exercises.link}`,
              state: { exercises }
            }}
          >
            <h3>{exercises.name}</h3>
            <img src={exercises.image} alt={exercises.name} />
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Exercises;
