import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'

class QuestionList extends Component {
  render() {
    return (
      <div>
          {this.props.answeredIds.map((id) => (
            <div key={id} style={{margin: "1rem"}}>
              <Question id={id}/>
            </div>
          ))}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  console.log(questions); console.log(authedUser);
  const answered = [];
  const unanswered = [];
  Object.keys(questions).map((id) => {
    console.log(id);
    const votes1 = questions[id].optionOne.votes;
    const votes2 = questions[id].optionTwo.votes;
    if (votes1.indexOf(authedUser) > -1 || votes2.indexOf(authedUser) > -1) {
      answered.push(id);
    } else {
      unanswered.push(id);
    }
  });

  console.log(answered);
  console.log(unanswered);

  return {
    unansweredIds: unanswered,
    answeredIds: answered,
    questionsIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList) 