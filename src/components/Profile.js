import React from 'react';
import PropTypes from 'prop-types';
import { getProfile } from '../api/api';

export default function Profile(props) {
  const [profile, setProfile] = React.useState(null);
  const { id, children } = props;

  const fetchProfile = id => {
    setProfile(() => null);
    getProfile(id).then(profile => setProfile(() => profile));
  };

  React.useEffect(() => {
    fetchProfile(id);
  }, [id]);

  return children(profile);
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired
};
