// import slug from 'slug';
import benchpress from '../images/benchpress.jpg';
import squat from '../images/squat.jpg';
import deadlift from '../images/deadlift.jpg';
import overheadpress from '../images/overheadpress.jpg';
import romaniandeadlift from '../images/romaniandeadlift.jpg';
import stairmaster from '../images/stairmaster.jpg';

// ArticleInfo Imports
import article1 from '../images/article1.jpg';
import article2 from '../images/article2.jpg';
import article4 from '../images/article4.jpg';

const exercises = [
  {
    id: 0,
    name: 'Stair Master',
    image: stairmaster,
    muscles: 'Cardio',
    description: 'Stair master description here... Climb stairs',
    tips: 'Advice advice advice...',
    link: 'stairmaster'
  },
  {
    id: 1,
    name: 'Bench Press',
    image: benchpress,
    muscles: 'Upper Body',
    description:
      'Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.',
    tips: 'Advice advice advice...',
    link: 'benchpress'
  },
  {
    id: 2,
    name: 'Squat',
    image: squat,
    muscles: 'Lower Body',
    description:
      'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.',
    tips: 'Advice advice advice...',
    link: 'squat'
  },
  {
    id: 3,
    name: 'Deadlift',
    image: deadlift,
    muscles: 'Lower Body',
    description:
      'To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. For long bands, they will need to be anchored to a secure base, such as heavy dumbbells or a rack.',
    tips: 'Advice advice advice...',
    link: 'deadlift'
  },
  {
    id: 4,
    name: 'Overhead Press',
    image: overheadpress,
    muscles: 'Upper Body',
    description:
      'Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other.',
    tips: 'Advice advice advice...',
    link: 'overheadpress'
  },
  {
    id: 5,
    name: 'Romanian Deadlifts',
    image: romaniandeadlift,
    muscles: 'Lower Body',
    description:
      'Hold a bar at hip level with a pronated (palms facing down) grip. Your shoulders should be back, your back arched, and your knees slightly bent. This will be your starting position.',
    tips: 'Advice advice advice...',
    link: 'romaniandeadlift'
  }
];

const users = [
  {
    id: 0,
    name: 'Jonathan Amparo',
    username: 'JonAmparo',
    password: '123123',
    age: 24,
    imageURL: '',
    occupation: 'Front End Developer',
    website: 'https://jonamparo.com',
    twitter: '@Murdar0',
    facebook: false,
    github: 'JonAmparo',
    linkedIn: 'JonathanAmparo',
    workout: [
      {
        workoutId: 1,
        name: 'Upper Body',
        duration: '1 Hrs 30 Min',
        date: new Date('November 25, 2019'),
        volume: 20000,
        exercise: [
          {
            benchpress: 75,
            overheadpress: 75
          }
        ]
      },
      {
        workoutId: 2,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: new Date('November 27, 2019'),
        volume: 21000
      },
      {
        workoutId: 3,
        name: 'Upper Body',
        duration: '1 Hrs 30 Min',
        date: new Date('November 28, 2019'),
        volume: 22500,
        exercise: [
          {
            benchpress: 100,
            overheadpress: 125
          }
        ]
      },
      {
        workoutId: 4,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: new Date('November 29, 2019'),
        volume: 18000
      },
      {
        workoutId: 5,
        name: 'Upper Body',
        duration: '1 Hrs 30 Min',
        date: new Date('November 30, 2019'),
        volume: 23000,
        exercise: [
          {
            benchpress: 150,
            overheadpress: 175
          }
        ]
      },
      {
        workoutId: 6,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: new Date('November 31, 2019'),
        volume: 24000
      },
      {
        workoutId: 7,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: new Date('December 1, 2019'),
        volume: 24000
      },
      {
        workoutId: 8,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: new Date('December 2, 2019'),
        volume: 24000
      },
      {
        workoutId: 9,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: new Date('December 3, 2019'),
        volume: 24000
      },
      {
        workoutId: 10,
        name: 'Bicep Day',
        duration: '1 Hrs 30 Min',
        date: new Date('December 4, 2019'),
        volume: 24000
      },
      {
        workoutId: 11,
        name: 'Neck Day',
        duration: '1 Hrs 30 Min',
        date: new Date('December 5, 2019'),
        volume: 24000
      }
    ]
  },
  {
    id: 1,
    name: 'Dwayne Wade',
    username: 'DwayneWade',
    password: '123123',
    age: 35,
    imageURL: 'https://pbs.twimg.com/media/DxICjVAWsAACFNP.jpg',
    occupation: 'Retired Basketball Pro',
    website: 'https://twitter.com/DwyaneWade',
    twitter: '@DwyaneWade',
    facebook: false,
    github: 'JonAmparo',
    linkedIn: 'JonathanAmparo',
    workout: [
      {
        workoutId: 1,
        name: 'Shoot around',
        duration: '1 Hrs 30 Min',
        date: new Date('November 25, 2019'),
        volume: '20000'
      },
      {
        workoutId: 2,
        name: 'Dribble practice',
        duration: '1 Hrs 30 Min',
        date: new Date('November 26, 2019'),
        volume: '21000'
      },
      {
        workoutId: 3,
        name: 'Shoot around',
        duration: '1 Hrs 30 Min',
        date: new Date('November 27, 2019'),
        volume: '22500'
      },
      {
        workoutId: 4,
        name: 'Dribble practice',
        duration: '1 Hrs 30 Min',
        date: new Date('November 28, 2019'),
        volume: '18000'
      },
      {
        workoutId: 5,
        name: 'Shoot around',
        duration: '1 Hrs 30 Min',
        date: new Date('November 29, 2019'),
        volume: '23000'
      },
      {
        workoutId: 6,
        name: 'Dribble practice',
        duration: '1 Hrs 30 Min',
        date: new Date('November 30, 2019'),
        volume: '24000'
      }
    ]
  },
  {
    id: 2,
    name: 'Jazmine Garcia',
    username: 'JazzyPoo',
    password: '123123',
    age: 25,
    imageURL:
      'https://gravitus-production.s3.amazonaws.com/avatars/58c8113c-86a4-48a4-a81e-a00f97582fb7.jpg',
    occupation: 'Youtuber',
    website: 'https://twitter.com/jazzyrgarcia?lang=en',
    twitter: '@jazzyrgarcia',
    facebook: false,
    github: false,
    linkedIn: false,
    workout: [
      {
        workoutId: 1,
        name: 'Leg raises',
        duration: '1 Hrs 30 Min',
        date: new Date('December 1, 2019'),
        volume: '20000'
      },
      {
        workoutId: 2,
        name: 'Squats',
        duration: '1 Hrs 30 Min',
        date: new Date('December 2, 2019'),
        volume: '21000'
      },
      {
        workoutId: 3,
        name: 'Leg raises',
        duration: '1 Hrs 30 Min',
        date: new Date('December 3, 2019'),
        volume: '22500'
      },
      {
        workoutId: 4,
        name: 'Squats',
        duration: '1 Hrs 30 Min',
        date: new Date('December 4, 2019'),
        volume: '18000'
      },
      {
        workoutId: 5,
        name: 'Leg raises',
        duration: '1 Hrs 30 Min',
        date: new Date('December 5, 2019'),
        volume: '23000'
      },
      {
        workoutId: 6,
        name: 'Squats',
        duration: '1 Hrs 30 Min',
        date: new Date('December 6, 2019'),
        volume: '24000'
      }
    ]
  }
];

const articleInfo = [
  {
    id: 1,
    title: 'Clarence Kennedy Answers Your Training Questions',
    author: "Alice O'Connor",
    date: new Date('December 5, 2019'),
    image: article1,
    description:
      "You had questions and The Wizard answered. Clarence Kennedy answers some of your training questions in a quick interview with us. \n\n The Wizard, Harry Squatter, Jacked filthy Frank...the list of memes continues. Clarence Kennedy is a bit of a myth and a legend in the weightlifting world. Strong enough to squat baby elephants and skilled enough to compete at an Olympic level...but yet we rarely hear anything from him. His internet fans wait patiently for an unscheduled random YouTube upload or instagram post to learn more. Well, fear not we have been lucky enough to grab some of Clarence’s time, in between sets of course, to answer some of your questions. We got you to submit your questions over the last few weeks and the Wizard has chosen a few to answer. So sit back, relax, and enjoy the read. \n\n How often do you deadlift given that you squat everyday? Even smolov doesn't allow you to deadlift with just squatting 4x per week. Do you have some sort of light days in your squat everyday program? I don't deadlift often at all, maybe 2-5 times per year. Of course, this is not including snatch or clean pulls and their variations. Usually, my deadlift increases alongside my squat, so I can improve my deadlift without training it. I definitely do have light days in my program. These days I usually have 3 heavy sessions, 2 moderate sessions, 1 light session and 1 day off.",

    link: 'clarence-kennedy-answers-your-training-questions'
  },
  {
    id: 2,
    title: 'Workouts for Women: Tailoring Lifts for Aesthetics',
    author: 'Sarah Wagner',
    date: new Date('November 11, 2019'),
    image: squat,
    description:
      '\t\t Touchy subject, right? Ok, let me unpack some baggage here before anyone gets on their high horse about how workouts for women should be exactly the same as men. In some cases, that’s fine. If you have a streak of vanity in you, maybe not so much. \n\n What I mean is this: if you are training for aesthetics as a female and you want to keep a feminine shape, you will need to mold your workout accordingly. Men train for broad shoulders and a “V” shape, while women try to stay pretty hour glass shaped with a heavy dose of glute work. That’s just what’s on the cultural menu these days. Just like there are workouts for women, the other side of the coin exists as well. Guys training for physique aren’t going to hit heavy glute work like women training for bikini will. They’re going to focus more on upper body, like chest, lats, and shoulders. They might even have a day in their split dedicated to just shoulders, just like some women might focus on just glutes one day in their split. \n\n This is even more important to keep in mind if you are bulking. A few months ago I was deep in a cut, eating 1250 calories 6 days a week, and 1450 calories 1 day a week. I was able to gain half a pound of muscle in about a month while also dropping fat. Anecdotally, I can confidently say that recomposition is not a myth. Consider what would happen if I ate a whole lot more while still lifting heavy. No, it wouldn’t be as dramatic as it would be for a guy, since as a female I don’t have the testosterone to gain as much muscle, but I’d still gain some, and it would probably (hopefully) be more than the rate at which I gained muscle while on a \t cut.',
    link: 'workouts-for-women-tailoring-lifts-for-aesthetics'
  },
  {
    id: 3,
    title: 'What is the best beginner workout program?',
    author: 'Bryan Alger',
    date: new Date('July 11, 2016'),
    image: deadlift,
    description:
      '\t\t Touchy subject, right? Ok, let me unpack some baggage here before anyone gets on their high horse about how workouts for women should be exactly the same as men. In some cases, that’s fine. If you have a streak of vanity in you, maybe not so much. \n\n What I mean is this: if you are training for aesthetics as a female and you want to keep a feminine shape, you will need to mold your workout accordingly. Men train for broad shoulders and a “V” shape, while women try to stay pretty hour glass shaped with a heavy dose of glute work. That’s just what’s on the cultural menu these days. Just like there are workouts for women, the other side of the coin exists as well. Guys training for physique aren’t going to hit heavy glute work like women training for bikini will. They’re going to focus more on upper body, like chest, lats, and shoulders. They might even have a day in their split dedicated to just shoulders, just like some women might focus on just glutes one day in their split. \n\n This is even more important to keep in mind if you are bulking. A few months ago I was deep in a cut, eating 1250 calories 6 days a week, and 1450 calories 1 day a week. I was able to gain half a pound of muscle in about a month while also dropping fat. Anecdotally, I can confidently say that recomposition is not a myth. Consider what would happen if I ate a whole lot more while still lifting heavy. No, it wouldn’t be as dramatic as it would be for a guy, since as a female I don’t have the testosterone to gain as much muscle, but I’d still gain some, and it would probably (hopefully) be more than the rate at which I gained muscle while on a \t cut.',
    link: 'what-is-the-best-beginner-workout-program'
  },
  {
    id: 4,
    title: 'Top 5 Bodyweight Exercises for Mass',
    author: 'Sarah Wagner',
    date: new Date('July 8, 2016'),
    image: article2,
    description:
      '\t\t Touchy subject, right? Ok, let me unpack some baggage here before anyone gets on their high horse about how workouts for women should be exactly the same as men. In some cases, that’s fine. If you have a streak of vanity in you, maybe not so much. \n\n What I mean is this: if you are training for aesthetics as a female and you want to keep a feminine shape, you will need to mold your workout accordingly. Men train for broad shoulders and a “V” shape, while women try to stay pretty hour glass shaped with a heavy dose of glute work. That’s just what’s on the cultural menu these days. Just like there are workouts for women, the other side of the coin exists as well. Guys training for physique aren’t going to hit heavy glute work like women training for bikini will. They’re going to focus more on upper body, like chest, lats, and shoulders. They might even have a day in their split dedicated to just shoulders, just like some women might focus on just glutes one day in their split. \n\n This is even more important to keep in mind if you are bulking. A few months ago I was deep in a cut, eating 1250 calories 6 days a week, and 1450 calories 1 day a week. I was able to gain half a pound of muscle in about a month while also dropping fat. Anecdotally, I can confidently say that recomposition is not a myth. Consider what would happen if I ate a whole lot more while still lifting heavy. No, it wouldn’t be as dramatic as it would be for a guy, since as a female I don’t have the testosterone to gain as much muscle, but I’d still gain some, and it would probably (hopefully) be more than the rate at which I gained muscle while on a \t cut.',
    link: 'top-5-bodyweight-exercises-for-mass'
  },
  {
    id: 5,
    title: 'Shock Value Bro Science',
    author: 'Sarah Wagner',
    date: new Date('July 6, 2016'),
    image: article4,
    description:
      '\t\t Touchy subject, right? Ok, let me unpack some baggage here before anyone gets on their high horse about how workouts for women should be exactly the same as men. In some cases, that’s fine. If you have a streak of vanity in you, maybe not so much. \n\n What I mean is this: if you are training for aesthetics as a female and you want to keep a feminine shape, you will need to mold your workout accordingly. Men train for broad shoulders and a “V” shape, while women try to stay pretty hour glass shaped with a heavy dose of glute work. That’s just what’s on the cultural menu these days. Just like there are workouts for women, the other side of the coin exists as well. Guys training for physique aren’t going to hit heavy glute work like women training for bikini will. They’re going to focus more on upper body, like chest, lats, and shoulders. They might even have a day in their split dedicated to just shoulders, just like some women might focus on just glutes one day in their split. \n\n This is even more important to keep in mind if you are bulking. A few months ago I was deep in a cut, eating 1250 calories 6 days a week, and 1450 calories 1 day a week. I was able to gain half a pound of muscle in about a month while also dropping fat. Anecdotally, I can confidently say that recomposition is not a myth. Consider what would happen if I ate a whole lot more while still lifting heavy. No, it wouldn’t be as dramatic as it would be for a guy, since as a female I don’t have the testosterone to gain as much muscle, but I’d still gain some, and it would probably (hopefully) be more than the rate at which I gained muscle while on a \t cut.',
    link: 'shock-value-bro-science'
  },
  {
    id: 6,
    title: 'Why Abs Matter',
    author: 'Sarah Wagner',
    date: new Date('July 1, 2015'),
    image: romaniandeadlift,
    description:
      '\t\t Touchy subject, right? Ok, let me unpack some baggage here before anyone gets on their high horse about how workouts for women should be exactly the same as men. In some cases, that’s fine. If you have a streak of vanity in you, maybe not so much. \n\n What I mean is this: if you are training for aesthetics as a female and you want to keep a feminine shape, you will need to mold your workout accordingly. Men train for broad shoulders and a “V” shape, while women try to stay pretty hour glass shaped with a heavy dose of glute work. That’s just what’s on the cultural menu these days. Just like there are workouts for women, the other side of the coin exists as well. Guys training for physique aren’t going to hit heavy glute work like women training for bikini will. They’re going to focus more on upper body, like chest, lats, and shoulders. They might even have a day in their split dedicated to just shoulders, just like some women might focus on just glutes one day in their split. \n\n This is even more important to keep in mind if you are bulking. A few months ago I was deep in a cut, eating 1250 calories 6 days a week, and 1450 calories 1 day a week. I was able to gain half a pound of muscle in about a month while also dropping fat. Anecdotally, I can confidently say that recomposition is not a myth. Consider what would happen if I ate a whole lot more while still lifting heavy. No, it wouldn’t be as dramatic as it would be for a guy, since as a female I don’t have the testosterone to gain as much muscle, but I’d still gain some, and it would probably (hopefully) be more than the rate at which I gained muscle while on a \t cut.',
    link: 'why-abs-matter'
  }
];

export { articleInfo, exercises, users };
