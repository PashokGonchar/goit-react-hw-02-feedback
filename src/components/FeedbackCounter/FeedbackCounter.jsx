import { Component } from 'react';
import {
  FeedbackDivBtn,
  FeedbackBtn,
  ItemFeedback,
} from './FeedbackCounter.styled';

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  handleClickNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  handleClickBad = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(0) : '0';
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackDivBtn>
          <FeedbackBtn onClick={this.handleClickGood}>Good</FeedbackBtn>
          <FeedbackBtn onClick={this.handleClickNeutral}>Neutral</FeedbackBtn>
          <FeedbackBtn onClick={this.handleClickBad}>Bad</FeedbackBtn>
        </FeedbackDivBtn>
        <h2>Statistics</h2>
        <ItemFeedback>
          <li>
            Good : <span>{this.state.good}</span>
          </li>
          <li>
            Neutral : <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad : <span>{this.state.bad}</span>
          </li>
          <li>
            Total : <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            Positive feedback :{' '}
            <span>{this.countPositiveFeedbackPercentage()} %</span>
          </li>
        </ItemFeedback>
      </div>
    );
  }
}

export default FeedbackCounter;
