import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      <hr />
      {total > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
