import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {Object.keys(options).map(key => (
        <li key={key}>
          <button type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
