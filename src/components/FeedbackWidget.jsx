// import React from 'react';

// const FeedbackWidget = ({ feedback, handleFeedback }) => {
//   const { good, neutral, bad } = feedback;

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const totalFeedback = countTotalFeedback();
//     return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
//   };

//   return (
//     <div>
//       <h2>Please leave feedback</h2>
//       <button onClick={() => handleFeedback('good')}>Good</button>
//       <button onClick={() => handleFeedback('neutral')}>Neutral</button>
//       <button onClick={() => handleFeedback('bad')}>Bad</button>

//       <h3>Statistics:</h3>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {countTotalFeedback()}</p>
//       <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
//     </div>
//   );
// };

// export default FeedbackWidget;
