import {
  GET_WORKOUTS,
  WORKOUT_ERROR,
  UPDATE_LIKES,
  DELETE_WORKOUT,
  ADD_WORKOUT,
  GET_WORKOUT,
  ADD_EXERCISE,
  REMOVE_EXERCISE
} from '../actions/types';

const initialState = {
  workouts: [],
  workout: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: payload,
        loading: false
      };
    case GET_WORKOUT:
      return {
        ...state,
        workout: payload,
        loading: false
      };
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [payload, ...state.workouts],
        loading: false
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(workout => workout._id !== payload),
        loading: false
      };
    case WORKOUT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        workouts: state.workouts.map(workout =>
          workout._id === payload.id
            ? { ...workout, likes: payload.likes }
            : workout
        ),
        loading: false
      };
    case ADD_EXERCISE:
      return {
        ...state,
        workout: { ...state.workout, exercise: payload },
        loading: false
      };
    case REMOVE_EXERCISE:
      return {
        ...state,
        workout: {
          ...state.workout,
          exercise: state.workout.exercise.filter(
            exercise => exercise._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
