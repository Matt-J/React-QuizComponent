import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return (
            <div>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((q, index)=>{
                            return <li key={`btn-${index}`}><QuizQuestionButton  button_text={q} key={index} clickHandler={this.handleClick.bind(this)}/></li>
                        })}
                        
                    </ul>
                </section>
            </div>)
    }

}

export default QuizQuestion;