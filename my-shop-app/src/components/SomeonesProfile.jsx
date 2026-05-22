import { PropTypes } from 'prop-types';

export default function SomeonesProfile({ name, age, isMember }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Member: {isMember ? 'medlem' : 'inte medlem'}</p>
    </div>
  );
}

SomeonesProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMember: PropTypes.bool.isRequired,
};
