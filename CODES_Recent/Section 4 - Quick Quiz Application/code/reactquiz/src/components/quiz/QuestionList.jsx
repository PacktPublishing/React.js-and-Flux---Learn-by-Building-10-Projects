import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

class QuestionList extends Component{
	render(){
		return(
			<div className="questions">
				{
					this.props.questions.map(question => {
						if(question.id == this.props.current){
							return <Question question={question} key={question.id} {...this.props} />
						}
					})
				}
			</div>
		)
	}
}

export default QuestionList