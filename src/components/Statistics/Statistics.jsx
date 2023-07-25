import PropTypes from 'prop-types';
import {
  StatisticsUl
} from './Statistics.styled'

function Statistics({ Good, Neutral, Bad, total, positivePercentage }) {
  return (
    <StatisticsUl>
      <li>Good : {Good}</li>
      <li>Neutral : {Neutral}</li>
      <li>Bad : {Bad}</li>
      <li>Total : {total}</li>
      <li>Positive feedback : {positivePercentage} %</li>
    </StatisticsUl>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
