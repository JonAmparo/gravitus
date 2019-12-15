import { users, exercises, articleInfo } from './dummy-data';

let cachedProfiles = {};
let cachedExercises = null;
let cachedArticles = null;

export function getProfile(profileId) {
  return new Promise(res => {
    if (typeof cachedProfiles[profileId] === 'undefined') {
      cachedProfiles[profileId] = users[profileId];
      return setTimeout(() => res(cachedProfiles[profileId]), 400);
    }

    return res(cachedProfiles[profileId]);
  });
}

export function getExercises() {
  return new Promise(res => {
    if (cachedExercises === null) {
      cachedExercises = exercises;
      return setTimeout(() => res(cachedExercises), 800);
    }

    return res(cachedExercises);
  });
}

export function getArticles() {
  return new Promise(res => {
    if (cachedArticles === null) {
      cachedArticles = articleInfo;
      return setTimeout(() => res(cachedArticles), 800);
    }

    return res(cachedArticles);
  });
}
