import React from 'react';
import { Link } from 'react-router-dom';
import { getExercises } from '../api/api';
import Loading from './Loading';
import CheckBox from './CheckBox';
import styled from '@emotion/styled';

const Images = styled.img({
  width: '100%',
  height: '250px'
});

function useMuscle() {
  const [exercises, setExercises] = React.useState(null);
  const [cachedExercises, setCachedExercises] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  let muscleGroup;

  const showAll = event => {
    getExercises().then(exercises => {
      setExercises(cachedExercises);
    });
  };

  const filterMuscle = event => {
    if (event.target.value) {
      muscleGroup = cachedExercises
        .map(exercises => {
          return { ...exercises, muscles: exercises.muscles };
        })
        .filter(exercises => {
          return exercises.muscles === event.target.value;
        })
        .map(exercises => exercises);
    }

    let muscleArr = [];
    let elementName = document.getElementsByName('muscle');

    for (var i = 0; i < elementName.length; i++) {
      if (elementName[i].checked) {
        muscleArr.push(elementName[i].value);
      }
    }

    if (muscleArr.length <= 0) {
      return getExercises().then(exercises => {
        setExercises(exercises);
      });
    } else if (muscleArr.length > 0) {
      getExercises().then(setExercises(muscleGroup));
    }
  };

  React.useEffect(() => {
    getExercises()
      .then(exercises => {
        setExercises(exercises);
        setCachedExercises(exercises);
        setLoading(false);
        setError(null);
      })
      .catch(e => {
        console.warn(e.message);
        setError(`Error fetching data. Please try again.`);
        setLoading(false);
      });
  }, []);

  return {
    exercises,
    showAll,
    loading,
    error,
    filterMuscle
  };
}

export default function Exercises(props) {
  const { exercises, loading, error, filterMuscle, showAll } = useMuscle();
  const { match } = props;

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  return loading === true ? (
    <Loading />
  ) : (
    <React.Fragment>
      <h1 className='text-center'>Exercises</h1>
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-sm-4'>
          <h3>Muscles</h3>
          <ul className='list-unstyled'>
            <CheckBox
              onChange={showAll}
              type='radio'
              value='Show All'
              props={props}
            />
            <CheckBox
              onChange={filterMuscle}
              type='radio'
              value='Lower Body'
              id='Lower Body'
              props={props}
            />
            <CheckBox
              onChange={filterMuscle}
              type='radio'
              value='Upper Body'
              id='Upper Body'
              props={props}
            />
            <CheckBox
              onChange={filterMuscle}
              type='radio'
              value='Cardio'
              id='Cardio'
              props={props}
            />
          </ul>
        </div>
        <div className='col-lg-10 col-md-9 col-sm-8'>
          {exercises.map((exercises, index) => (
            <div
              key={exercises.id + exercises.name + index}
              className='row justify-content-between py-2'
            >
              <div className='col-lg-6'>
                <Link
                  to={{
                    pathname: `${match.url}/${exercises.link}`,
                    state: { exercises }
                  }}
                >
                  <Images src={exercises.image} alt={exercises.name} />
                </Link>
              </div>
              <div className='col-lg-6 '>
                <Link
                  to={{
                    pathname: `${match.url}/${exercises.link}`,
                    state: { exercises }
                  }}
                >
                  <h4 className='text-white'>{exercises.name}</h4>
                </Link>
                <p className='text-secondary'>{exercises.description}</p>
                <Link
                  to={{
                    pathname: `${match.url}/${exercises.link}`,
                    state: { exercises }
                  }}
                >
                  <button className='btn btn-outline-light'>LEARN MORE</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
