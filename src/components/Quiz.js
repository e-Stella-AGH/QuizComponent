import React from 'react';
import {api} from '../services/QuizService'
import Quiz from 'react-quiz-component';


function QuizComponent({exit,quiz}) {

  const renderCustomResultPage = (obj) => {
    console.log(obj);
    return (
      <div>
        This is a custom result page. You can use obj to render your custom result page
        <button onClick={exit}>Exit</button>
      </div>
    )
  }

  return (
    <div >
      <Quiz quiz={quiz} showDefaultResult={false} customResultPage={renderCustomResultPage} />
    </div>
  );
}

export default QuizComponent;
