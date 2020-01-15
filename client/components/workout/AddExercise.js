import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExercise } from '../../actions/workout';
import { FaEllipsisH, FaTimes } from 'react-icons/fa';

const AddExercise = ({
  workoutId,
  addExercise,
  history,
  workout: { user },
  auth
}) => {
  const [exercise, setExercise] = useState([]);

  const AddWorkout = () => {
    setExercise(
      exercise.concat(
        <AddExercises
          key={exercise.length}
          addExercise={addExercise}
          history={history}
          workoutId={workoutId}
          user={user}
          auth={auth}
        />
      )
    );
  };

  return (
    <div className='mt-3 mb-5'>
      <Fragment>
        {!auth.loading && user === auth.user._id && (
          <div>
            {exercise}
            <br />
            <br />
            <a className='text-primary pointer lead' onClick={AddWorkout}>
              + Exercise
            </a>
          </div>
        )}
      </Fragment>
    </div>
  );
};

const AddExercises = ({ workoutId, addExercise, history, auth, user }) => {
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  const [display6, setDisplay6] = useState(false);
  const [display7, setDisplay7] = useState(false);
  const [display8, setDisplay8] = useState(false);
  const [display9, setDisplay9] = useState(false);
  const [display10, setDisplay10] = useState(false);
  const [reset, setReset] = useState(false);
  const [formData, setFormData] = useState({
    exercisename: '',
    reps: '',
    weight: '',
    reps2: '',
    weight2: '',
    reps3: '',
    weight3: '',
    reps4: '',
    weight4: '',
    reps5: '',
    weight5: '',
    reps6: '',
    weight6: '',
    reps7: '',
    weight7: '',
    reps8: '',
    weight8: '',
    reps9: '',
    weight9: '',
    reps10: '',
    weight10: ''
  });
  const {
    exercisename,
    reps,
    weight,
    reps2,
    weight2,
    reps3,
    weight3,
    reps4,
    weight4,
    reps5,
    weight5,
    reps6,
    weight6,
    reps7,
    weight7,
    reps8,
    weight8,
    reps9,
    weight9,
    reps10,
    weight10
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      {' '}
      {reset ? null : (
        <div className='pt-5 mt-3'>
          <h5>Add Exercise</h5>
          <form
            onSubmit={e => {
              e.preventDefault();
              addExercise(workoutId, formData, history);
              setDisplay(false);
              setReset(true);
            }}
          >
            <FormInput
              type='text'
              label='Exercise Name'
              name='exercisename'
              value={exercisename}
              onChange={e => onChange(e)}
              required
            />

            {/* <AddSets /> */}
            {/* Set 1 */}
            {display === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay(!display)}
              >
                +
              </a>
            ) : (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps1'
                    name='reps'
                    value={reps}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight1'
                    name='weight'
                    value={weight}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>

                <a
                  onClick={() => setReset(true)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            )}

            {/* Set 2 */}
            {display && display2 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay2(!display2)}
              >
                +
              </a>
            ) : display && display2 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps2'
                    name='reps2'
                    value={reps2}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight2'
                    name='weight2'
                    value={weight2}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay2(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 3 */}
            {display2 && display3 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay3(!display3)}
              >
                +
              </a>
            ) : display2 && display3 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps3'
                    name='reps3'
                    value={reps3}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight3'
                    name='weight3'
                    value={weight3}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay3(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 4 */}
            {display3 && display4 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay4(!display4)}
              >
                +
              </a>
            ) : display4 && display4 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps4'
                    name='reps4'
                    value={reps4}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight4'
                    name='weight4'
                    value={weight4}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay4(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 5 */}
            {display4 && display5 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay5(!display5)}
              >
                +
              </a>
            ) : display4 && display5 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps5'
                    name='reps5'
                    value={reps5}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight5'
                    name='weight5'
                    value={weight5}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay5(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 6 */}
            {display5 && display6 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay6(!display6)}
              >
                +
              </a>
            ) : display5 && display6 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps6'
                    name='reps6'
                    value={reps6}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight6'
                    name='weight6'
                    value={weight6}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay6(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 7 */}
            {display6 && display7 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay7(!display7)}
              >
                +
              </a>
            ) : display6 && display7 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps7'
                    name='reps7'
                    value={reps7}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight7'
                    name='weight7'
                    value={weight7}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay7(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 8 */}
            {display7 && display8 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay8(!display8)}
              >
                +
              </a>
            ) : display7 && display8 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps8'
                    name='reps8'
                    value={reps8}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight8'
                    name='weight8'
                    value={weight8}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay8(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 9 */}
            {display8 && display9 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay9(!display9)}
              >
                +
              </a>
            ) : display8 && display9 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps9'
                    name='reps9'
                    value={reps9}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight9'
                    name='weight9'
                    value={weight9}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay9(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            {/* Set 10 */}
            {display9 && display10 === false ? (
              <a
                className='text-primary pointer h5'
                onClick={() => setDisplay10(!display10)}
              >
                +
              </a>
            ) : display9 && display10 ? (
              <div className='row align-items-center'>
                <div>
                  <FormInput
                    type='number'
                    label='Reps10'
                    name='reps10'
                    value={reps10}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='mx-4 text-light'>x</div>
                <div>
                  <FormInput
                    type='number'
                    label='Weight10'
                    name='weight10'
                    value={weight10}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <a
                  onClick={() => setDisplay10(false)}
                  className='text-danger pointer ml-auto'
                >
                  <FaTimes />
                </a>
              </div>
            ) : null}

            <br />
            <input type='submit' className='btn btn-success mt-5 my-1 mr-2' />
          </form>
        </div>
      )}
    </div>
  );
};

AddExercise.propTypes = {
  addExercise: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addExercise })(
  withRouter(AddExercise)
);
