const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  workout: [
    {
      workoutname: {
        type: String
      },
      duration: {
        type: String,
        required: true
      },
      volume: {
        type: Number
      },
      date: {
        type: Date,
        default: Date.now
      },
      description: {
        type: String
      },
      exercise: [
        {
          exerciseName: {
            type: String
          },
          set: [
            {
              reps: {
                type: Number
              },
              weight: {
                type: Number
              }
            }
          ]
        }
      ]
    }
  ],
  friends: [
    {
      name: {
        type: String,
        required: true
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
