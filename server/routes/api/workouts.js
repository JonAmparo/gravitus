const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Workout = require('../../models/Workout');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   POST api/workouts
// @desc    Create a workout
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('workoutname', 'Workout name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newWorkout = new Workout({
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        workoutname: req.body.workoutname
      });

      const workout = await newWorkout.save();

      res.json(workout);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/workouts
// @desc     Get all workouts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/workouts/:id
// @desc     Get workout by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    // Check for ObjectId format and workout
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !workout) {
      return res.status(404).json({ msg: 'Workout not found' });
    }

    res.json(workout);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/workouts/:id
// @desc     Delete a workout
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    // Check for ObjectId format and workout
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !workout) {
      return res.status(404).json({ msg: 'Workout not found' });
    }

    // Check user
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await workout.remove();

    res.json({ msg: 'Workout removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    PUT api/workouts/like/:id
// @desc     Like a workout
// @access   Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    // Check if the workout has already been liked
    if (
      workout.likes.filter(like => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: 'Workout already liked' });
    }

    workout.likes.unshift({ user: req.user.id });

    await workout.save();

    res.json(workout.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/workouts/exercise/:id
// @desc     Add an exercise to a workout
// @access   Private
router.post(
  '/exercise/:id',
  [
    auth,
    [
      check('exercisename', 'Exercise name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const workout = await Workout.findById(req.params.id);

      const newExercise = {
        user: req.user.id,
        exercisename: req.body.exercisename,
        reps: req.body.reps,
        weight: req.body.weight,
        reps2: req.body.reps2,
        weight2: req.body.weight2,
        reps3: req.body.reps3,
        weight3: req.body.weight3,
        reps4: req.body.reps4,
        weight4: req.body.weight4,
        reps5: req.body.reps5,
        weight5: req.body.weight5,
        reps6: req.body.reps6,
        weight6: req.body.weight6,
        reps7: req.body.reps7,
        weight7: req.body.weight7,
        reps8: req.body.reps8,
        weight8: req.body.weight8,
        reps9: req.body.reps9,
        weight9: req.body.weight9,
        reps10: req.body.reps10,
        weight10: req.body.weight10
      };

      // workout.exercise.unshift(newExercise);
      workout.exercise.push(newExercise);

      await workout.save();

      res.json(workout.exercise);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/workouts/exercise/:id/:exercise_id
// @desc     Delete exercise
// @access   Private
router.delete('/exercise/:id/:exercise_id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    // Pull out exercise
    const exercise = workout.exercise.find(
      exercise => exercise.id === req.params.exercise_id
    );

    // Make sure exercise exists
    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise does not exist' });
    }
    // Check user
    if (exercise.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    // Get remove index
    const removeIndex = workout.exercise
      .map(exercise => exercise.id)
      .indexOf(req.params.exercise_id);

    workout.exercise.splice(removeIndex, 1);

    await workout.save();

    res.json(workout.exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
