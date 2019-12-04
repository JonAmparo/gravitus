// import slug from 'slug';
import benchpress from './assets/images/benchpress.jpg';
import squat from './assets/images/squat.jpg';
import deadlift from './assets/images/deadlift.jpg';
import overheadpress from './assets/images/overheadpress.jpg';
import romaniandeadlift from './assets/images/romaniandeadlift.jpg';

const articleInfo = [
  {
    id: 1,
    title: 'Clarence Kennedy Answers Your Training Questions',
    author: "Alice O'Connor",
    date: new Date(2019, 11, 11),
    description1:
      'You had questions and The Wizard answered. Clarence Kennedy answers some of your training questions in a quick interview with us.',
    image1: 'components/assets/images/blog/clarence.jpg',
    description2:
      'The Wizard, Harry Squatter, Jacked filthy Frank...the list of memes continues. Clarence Kennedy is a bit of a myth and a legend in the weightlifting world. Strong enough to squat baby elephants and skilled enough to compete at an Olympic level...but yet we rarely hear anything from him. His internet fans wait patiently for an unscheduled random YouTube upload or instagram post to learn more. Well, fear not we have been lucky enough to grab some of Clarence’s time, in between sets of course, to answer some of your questions. We got you to submit your questions over the last few weeks and the Wizard has chosen a few to answer. So sit back, relax, and enjoy the read.',
    image2: '',
    description3:
      "How often do you deadlift given that you squat everyday? Even smolov doesn't allow you to deadlift with just squatting 4x per week. Do you have some sort of light days in your squat everyday program? I don't deadlift often at all, maybe 2-5 times per year. Of course, this is not including snatch or clean pulls and their variations. Usually, my deadlift increases alongside my squat, so I can improve my deadlift without training it. I definitely do have light days in my program. These days I usually have 3 heavy sessions, 2 moderate sessions, 1 light session and 1 day off.",
    image3: 'components/assets/images/blog/b3.jpg',
    link: 'clarence-kennedy-answers-your-training-questions'
  },
  {
    id: 2,
    title: 'Workouts for Women: Tailoring Lifts for Aesthetics',
    author: 'Sarah Wagner',
    date: new Date(2019, 12, 12),
    description1:
      'Touchy subject, right? Ok, let me unpack some baggage here before anyone gets on their high horse about how workouts for women should be exactly the same as men. In some cases, that’s fine. If you have a streak of vanity in you, maybe not so much.',
    image1: '',
    description2:
      'What I mean is this: if you are training for aesthetics as a female and you want to keep a feminine shape, you will need to mold your workout accordingly. Men train for broad shoulders and a “V” shape, while women try to stay pretty hour glass shaped with a heavy dose of glute work. That’s just what’s on the cultural menu these days. Just like there are workouts for women, the other side of the coin exists as well. Guys training for physique aren’t going to hit heavy glute work like women training for bikini will. They’re going to focus more on upper body, like chest, lats, and shoulders. They might even have a day in their split dedicated to just shoulders, just like some women might focus on just glutes one day in their split.',
    image2: '',
    description3:
      'This is even more important to keep in mind if you are bulking. A few months ago I was deep in a cut, eating 1250 calories 6 days a week, and 1450 calories 1 day a week. I was able to gain half a pound of muscle in about a month while also dropping fat. Anecdotally, I can confidently say that recomposition is not a myth. Consider what would happen if I ate a whole lot more while still lifting heavy. No, it wouldn’t be as dramatic as it would be for a guy, since as a female I don’t have the testosterone to gain as much muscle, but I’d still gain some, and it would probably (hopefully) be more than the rate at which I gained muscle while on a cut.',
    image3: '',
    link: 'workouts-for-women-tailoring-lifts-for-aesthetics'
  }
];

const exercises = [
  {
    id: 1,
    name: 'Bench Press',
    image: benchpress,
    description: "Here's a description of the exercise",
    tips: 'Advice advice advice...',
    link: 'benchpress'
  },
  {
    id: 2,
    name: 'Squat',
    image: squat,
    description: "Here's a description of the exercise",
    tips: 'Advice advice advice...',
    link: 'squat'
  },
  {
    id: 3,
    name: 'Deadlift',
    image: deadlift,
    description: "Here's a description of the exercise",
    tips: 'Advice advice advice...',
    link: 'deadlift'
  },
  {
    id: 4,
    name: 'Overhead Press',
    image: overheadpress,
    description: "Here's a description of the exercise",
    tips: 'Advice advice advice...',
    link: 'overheadpress'
  },
  {
    id: 5,
    name: 'Romanian Deadlifts',
    image: romaniandeadlift,
    description: "Here's a description of the exercise",
    tips: 'Advice advice advice...',
    link: 'romaniandeadlift'
  }
];

const users = [
  {
    id: 1,
    name: 'Jonathan Amparo',
    username: 'JonAmparo',
    age: 24,
    imageURL: 'assets/images/bbcom.jpg',
    occupation: 'Front End Developer',
    website: 'https://jonamparo.github.io/portfolio/index.html',
    twitter: '@Murdar0',
    facebook: false,
    github: 'JonAmparo',
    linkedIn: 'JonathanAmparo',
    workout: [
      {
        workoutId: 1,
        name: 'Upper Body',
        duration: '1 Hrs 30 Min',
        date: '10/20/2019',
        volume: 20000
      },
      {
        workoutId: 2,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: '10/21/2019',
        volume: 21000
      },
      {
        workoutId: 3,
        name: 'Upper Body',
        duration: '1 Hrs 30 Min',
        date: '10/22/2019',
        volume: 22500
      },
      {
        workoutId: 4,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: '10/23/2019',
        volume: 18000
      },
      {
        workoutId: 5,
        name: 'Upper Body',
        duration: '1 Hrs 30 Min',
        date: '10/24/2019',
        volume: 23000
      },
      {
        workoutId: 6,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: '10/25/2019',
        volume: 24000
      },
      {
        workoutId: 7,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: '10/26/2019',
        volume: 24000
      },
      {
        workoutId: 8,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: '10/27/2019',
        volume: 24000
      },
      {
        workoutId: 9,
        name: 'Leg Day',
        duration: '1 Hrs 30 Min',
        date: '10/28/2019',
        volume: 24000
      },
      {
        workoutId: 10,
        name: 'Bicep Day',
        duration: '1 Hrs 30 Min',
        date: '10/29/2019',
        volume: 24000
      },
      {
        workoutId: 11,
        name: 'Neck Day',
        duration: '1 Hrs 30 Min',
        date: '10/30/2019',
        volume: 24000
      }
    ]
  },
  {
    id: 2,
    name: 'Dwayne Wade',
    username: 'DwayneWade',
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
        name: 'shoot around',
        duration: '1 Hrs 30 Min',
        date: '10/20/2019',
        volume: '20000'
      },
      {
        workoutId: 2,
        name: 'dribble practice',
        duration: '1 Hrs 30 Min',
        date: '10/21/2019',
        volume: '21000'
      },
      {
        workoutId: 3,
        name: 'shoot around',
        duration: '1 Hrs 30 Min',
        date: '10/22/2019',
        volume: '22500'
      },
      {
        workoutId: 4,
        name: 'dribble practice',
        duration: '1 Hrs 30 Min',
        date: '10/23/2019',
        volume: '18000'
      },
      {
        workoutId: 5,
        name: 'shoot around',
        duration: '1 Hrs 30 Min',
        date: '10/24/2019',
        volume: '23000'
      },
      {
        workoutId: 6,
        name: 'dribble practice',
        duration: '1 Hrs 30 Min',
        date: '10/25/2019',
        volume: '24000'
      }
    ]
  },
  {
    id: 3,
    name: 'Jazmine Garcia',
    username: 'JazzyPoo',
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
        name: 'leg raises',
        duration: '1 Hrs 30 Min',
        date: '10/20/2019',
        volume: '20000'
      },
      {
        workoutId: 2,
        name: 'squats',
        duration: '1 Hrs 30 Min',
        date: '10/21/2019',
        volume: '21000'
      },
      {
        workoutId: 3,
        name: 'leg raises',
        duration: '1 Hrs 30 Min',
        date: '10/22/2019',
        volume: '22500'
      },
      {
        workoutId: 4,
        name: 'squats',
        duration: '1 Hrs 30 Min',
        date: '10/23/2019',
        volume: '18000'
      },
      {
        workoutId: 5,
        name: 'leg raises',
        duration: '1 Hrs 30 Min',
        date: '10/24/2019',
        volume: '23000'
      },
      {
        workoutId: 6,
        name: 'squats',
        duration: '1 Hrs 30 Min',
        date: '10/25/2019',
        volume: '24000'
      }
    ]
  }
];

export { articleInfo, exercises, users };
