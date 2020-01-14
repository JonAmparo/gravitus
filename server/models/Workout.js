const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  workoutname: {
    type: String
  },
  duration: {
    type: String
  },
  volume: {
    type: Number
  },
  description: {
    type: String
  },
  exercise: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      exercisename: {
        type: String
      },
      text: {
        type: String
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      reps: {
        type: Number,
        default: null
      },
      weight: {
        type: Number,
        default: null
      },
      reps2: {
        type: Number,
        default: null
      },
      weight2: {
        type: Number,
        default: null
      },
      reps3: {
        type: Number,
        default: null
      },
      weight3: {
        type: Number,
        default: null
      },
      reps4: {
        type: Number,
        default: null
      },
      weight4: {
        type: Number,
        default: null
      },
      reps5: {
        type: Number,
        default: null
      },
      weight5: {
        type: Number,
        default: null
      },
      reps6: {
        type: Number,
        default: null
      },
      weight6: {
        type: Number,
        default: null
      },
      reps7: {
        type: Number,
        default: null
      },
      weight7: {
        type: Number,
        default: null
      },
      reps8: {
        type: Number,
        default: null
      },
      weight8: {
        type: Number,
        default: null
      },
      reps9: {
        type: Number,
        default: null
      },
      weight9: {
        type: Number,
        default: null
      },
      reps10: {
        type: Number,
        default: null
      },
      weight10: {
        type: Number,
        default: null
      }
    }
  ],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);
