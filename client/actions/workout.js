import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_WORKOUTS,
  WORKOUT_ERROR,
  UPDATE_LIKES,
  DELETE_WORKOUT,
  ADD_WORKOUT,
  GET_WORKOUT,
  ADD_EXERCISE,
  REMOVE_EXERCISE
} from './types';

// Get workouts
export const getWorkouts = () => async dispatch => {
  try {
    const res = await axios.get('/api/workouts');

    dispatch({
      type: GET_WORKOUTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WORKOUT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/workouts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: WORKOUT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete workout
export const deleteWorkout = id => async dispatch => {
  if (
    window.confirm(
      `Are you sure you want to delete this workout?`
    )
  ) {
    try {
      await axios.delete(`/api/workouts/${id}`);

      dispatch({
        type: DELETE_WORKOUT,
        payload: id
      });

      dispatch(setAlert('Workout Removed', 'success'));
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Add workout
export const addWorkout = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/workouts', formData, config);

    dispatch({
      type: ADD_WORKOUT,
      payload: res.data
    });

    dispatch(setAlert('Workout Created', 'success'));
  } catch (err) {
    dispatch({
      type: WORKOUT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get workout
export const getWorkout = id => async dispatch => {
  try {
    const res = await axios.get(`/api/workouts/${id}`);

    dispatch({
      type: GET_WORKOUT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WORKOUT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add exercise
export const addExercise = (workoutId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/workouts/exercise/${workoutId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_EXERCISE,
      payload: res.data
    });

    dispatch(setAlert('Exercise Added', 'success'));
  } catch (err) {
    dispatch({
      type: WORKOUT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete exercise
export const deleteExercise = (workoutId, exerciseId) => async dispatch => {
  if (window.confirm(`Are you sure you want to delete this exercise?`)) {
    try {
      await axios.delete(`/api/workouts/exercise/${workoutId}/${exerciseId}`);

      dispatch({
        type: REMOVE_EXERCISE,
        payload: exerciseId
      });

      dispatch(setAlert('Exercise Removed', 'success'));
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
