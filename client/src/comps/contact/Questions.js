import React, { Component } from 'react'


 class Questions extends Component {
    render() {

        function questionToggle (e){
            const questions =  document.querySelectorAll('.question');
            const q = e.currentTarget.parentElement.parentElement;
            // console.log(questions);
            questions.forEach((ques)=>{
            // console.log(ques);
                if(ques !== q){
                    ques.classList.remove('show-text')
                }
            })
            
            q.classList.toggle('show-text')
        }

        

        return (
            <div >
                <div className="questionContainer">
                    <div className="questions">
                        <article className="question">
                            <div className="q-title">
                                <p>do you accept all major credit cards?</p>
                                <button onClick={questionToggle} type='button' className='q-btn'>
                                    <span className="plus-icon">
                                        <i className="far fa-plus-square"></i>
                                    </span>
                                    <span className="minus-icon">
                                        <i className="far fa-minus-square"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="q-answer">
                                <p>We accecpt all Debit Cards and Credit Cards, including Americal Express</p>
                            </div>
                        </article>

                        <article className="question">
                            <div className="q-title">
                                <p>aftersales, returns, refunds and exchange</p>
                                <button onClick={questionToggle} type='button' className='q-btn'>
                                    <span className="plus-icon">
                                        <i className="far fa-plus-square"></i>
                                    </span>
                                    <span className="minus-icon">
                                        <i className="far fa-minus-square"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="q-answer">
                                <p>We will be more than happy to exchange products or give refunds on products brought from us. Please make sure you bring in proof of purchase, also the product in the condition as to when it was sold.</p>
                            </div>
                        </article>

                        <article className="question">
                            <div className="q-title">
                                <p>covid-19</p>
                                <button onClick={questionToggle} type='button' className='q-btn'>
                                    <span className="plus-icon">
                                        <i className="far fa-plus-square"></i>
                                    </span>
                                    <span className="minus-icon">
                                        <i className="far fa-minus-square"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="q-answer">
                                <p>Please make sure to wear a mask when you visit our store, stay 2 meters away from other customers.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Questions;
