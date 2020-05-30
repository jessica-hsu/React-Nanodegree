import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'

class QuestionList extends Component {
  render() {
    return (
      <div>
          {this.props.questionsIds.map((id) => (
            <div key={id} style={{margin: "1rem"}}>
              <Question id={id}/>
            </div>
          ))}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }, {currentList}) {
  console.log('currentList', questions);
  const answered = [];
  const unanswered = [];
  
  // sort question IDs by timestamp
  const allQuestions = Object.keys(questions)
  .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  console.log(allQuestions);

  // sort into answered and unanswered
  allQuestions.map((id) => {
    const votes1 = questions[id].optionOne.votes;
    const votes2 = questions[id].optionTwo.votes;
    if (votes1.indexOf(authedUser) > -1 || votes2.indexOf(authedUser) > -1) {
      answered.push(id);
    } else {
      unanswered.push(id);
    }
  });
  // determine which list to display when user toggle between answered and unanswered
  let currentIds = unanswered;
  if (currentList === 'homepage-answered') {
    currentIds = answered;
  }

  console.log(currentIds);
  return {
    questionsIds: currentIds
  }
}

export default connect(mapStateToProps)(QuestionList)