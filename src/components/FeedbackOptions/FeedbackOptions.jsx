import PropTypes from 'prop-types';
import { FeedbackOptionsUl, FeedbackBtn } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsUl>
      {Object.keys(options).map(key => (
        <li key={key}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackOptionsUl>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
