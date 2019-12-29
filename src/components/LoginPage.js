import React, { useState } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import './FormInput.scss';
import { Link } from 'react-router-dom';
import Register from './Register';

class LoginPage extends React.Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    errors: {},
    submitted: false
  };

  handleChange = event => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  onSubmit = () => {
    const {
      user: { username, password }
    } = this.state;
    let err = {};

    if (!username) {
      err.username = 'Enter your username!';
    }

    if (password.length < 4) {
      err.password = 'Password must be at least 4 characters!';
    }

    this.setState({ errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        this.setState({ submitted: true });
      }
    });
  };

  onButton = () => {};

  render() {
    const {
      submitted,
      errors,
      user: { username, password }
    } = this.state;
    return (
      <React.Fragment>
        {submitted ? (
          <p>Welcome onboard, {username}!</p>
        ) : (
          <React.Fragment>
            <div className='row justify-content-center mt-5'>
              <div className='col-md-8 border border-secondary rounded p-4'>
                <h1 className='text-center'>Login!</h1>
                <form>
                  <FormInput
                    label='Username'
                    labelClassName='form-label text-secondary'
                    name='username'
                    type='text'
                    value={username}
                    onChange={this.handleChange}
                    error={errors.username}
                    required
                  />

                  <FormInput
                    label='Password'
                    labelClassName='form-label text-secondary'
                    name='password'
                    type='password'
                    value={password}
                    onChange={this.handleChange}
                    error={errors.password}
                    required
                  />

                  <Button
                    type='submit'
                    label='Submit'
                    className='btn- btn-global mt-5'
                    onClick={this.onSubmit}
                  />
                </form>
              </div>
              <div className='col-md-8 text-secondary mt-5'>
                {/* <p>OR, USE FACEBOOK</p>
                <Button
                  type='submit'
                  label='Sign in with Facebook'
                  className='btn- btn-global'
                  onClick={this.onButton}
                /> */}
                <p>
                  Don't have an account?
                  <Link to={'/register'} className='text-primary'>
                    {' '}
                    Sign up today!
                  </Link>
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

// const LoginPage = props => {
//   const [users, setUsers] = useState({ user: { username: '', password: '' } });
//   const [error, setError] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   handleChange = event => {
//     const { user } = users;
//     user[event.target.name] = event.target.value;
//     setUsers({ user });
//   };

//   onSubmit = () => {
//     const {
//       user: { username, password }
//     } = users;
//     let err = {};

//     if (!username) {
//       err.username = 'Enter your username!';
//     }

//     if (password.length < 4) {
//       err.password = 'Password must be at least 4 characters!';
//     }

//     this.setState({ errors: err }, () => {
//       if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
//         this.setState({ submitted: true });
//       }
//     });
//   };

//   onButton = () => {};

//   return (
//     <React.Fragment>
//       {submitted ? (
//         <p>Welcome onboard, {username}!</p>
//       ) : (
//         <React.Fragment>
//           <div className='row justify-content-center mt-5'>
//             <div className='col-md-8 border border-secondary rounded p-4'>
//               <h1 className='text-center'>Login!</h1>
//               <form>
//                 {/* <FormInput
//                   label='Username'
//                   labelClassName='form-label text-secondary'
//                   name='username'
//                   type='text'
//                   value={username}
//                   onChange={this.handleChange}
//                   error={errors.username}
//                   required
//                 />

//                 <FormInput
//                   label='Password'
//                   labelClassName='form-label text-secondary'
//                   name='password'
//                   type='password'
//                   value={password}
//                   onChange={this.handleChange}
//                   error={errors.password}
//                   required
//                 />

//                 <Button
//                   type='submit'
//                   label='Submit'
//                   className='btn- btn-global mt-5'
//                   onClick={this.onSubmit}
//                 /> */}
//               </form>
//             </div>
//             <div className='col-md-8 text-secondary mt-5'>
//               {/* <p>OR, USE FACEBOOK</p>
//                 <Button
//                   type='submit'
//                   label='Sign in with Facebook'
//                   className='btn- btn-global'
//                   onClick={this.onButton}
//                 /> */}
//               <p>
//                 Don't have an account?
//                 <Link to={'/register'} className='text-primary'>
//                   {' '}
//                   Sign up today!
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// function loginReducer(state, action) {
//   if (action.type === 'success') {
//     return {
//       teamNames: action.teamNames,
//       error: null,
//       submitted: true
//     };
//   } else if (action.type === 'error') {
//     return {
//       ...state,
//       error: action.message,
//       submitted: false
//     };
//   } else {
//     throw new Error(`That action type isn't supported`);
//   }
// }

// function useFetch() {
//   const [state, dispatch] = React.useReducer(loginReducer, {
//     user: {
//       username: '',
//       password: ''
//     },
//     errors: {},
//     submitted: false
//   });
//   React.useEffect(() => {});

//   return {
//     user: state.user,
//     error: state.error,
//     submitted: state.submitted
//   };
// }

// function LoginPage(props) {
//   const [user, error, submitted] = useFetch();
//   // user: { username, password }
//   const { match, location } = props;

//   const handleChange = event => {
//     const { user } = this.state;
//     user[event.target.name] = event.target.value;
//     this.setState({ user });
//   };

//    const onSubmit = () => {
//     const {
//       user: { username, password }
//     } = this.state;
//     let err = {};

//     if (!username) {
//       err.username = 'Enter your username!';
//     }

//     if (password.length < 8) {
//       err.password = 'Password must be at least 8 characters!';
//     }

//     this.setState({ errors: err }, () => {
//       if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
//         this.setState({ submitted: true });
//       }
//     });
//   };

//   return (
//     <React.Fragment>
//       {submitted ? (
//         <p>Welcome onboard, {username}!</p>
//       ) : (
//         <React.Fragment>
//           <h3>Login!</h3>
//           <FormInput
//             label='Username'
//             name='username'
//             type='text'
//             value={username}
//             onChange={handleChange}
//             placeholder='Enter username...'
//             error={error.username}
//             required
//             className='input'
//           />

//           <FormInput
//             label='Password'
//             name='password'
//             type='password'
//             value={password}
//             onChange={handleChange}
//             placeholder='Enter password...'
//             error={error.password}
//             className='input'
//             required
//           />

//           <Button
//             type='submit'
//             label='Submit'
//             className='button'
//             handleClick={onSubmit}
//           />
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// }

export default LoginPage;
