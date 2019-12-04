import { exercises } from './dummy-data';

let cachedExercises = null;

export function getExercises() {
  return new Promise(res => {
    if (cachedExercises === null) {
      cachedExercises = exercises;
      return setTimeout(() => res(cachedExercises), 800);
    }

    return res(cachedExercises);
  });
}
