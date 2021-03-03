import React, { Component } from 'react'
import './style.css';
import axios from 'axios'

import Questions from './Questions'



 class Contact extends Component {
    state = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        msg: null,
        sent: false
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    };

    onSubmit(e){
        e.preventDefault();
        const { fullname, email, subject, message} = this.state;

        const newMessage ={
            fullname, email, subject, message
        }

    axios.post('https://sambros.herokuapp.com/api/message', newMessage, {headers:{
        'Content-Type': 'application/json'
    }})
    .then(res => {
        this.setState({msg: 'Message Sent', sent:true})
    })
    .catch(
        err => console.log(err)
    );
    }

    render() {
        return (
            <div className='Cmain'>
                <div className="contactContainer">
                   
                    <div className="details">
                    <h3>Contact Information</h3>
                    <p>We can help you quicker and more efficiently if we know the exact nature of your query. Send us a message and we'll get back to you as soon as possible.</p>
                    
                    <div className="deets">
                        <div>
                    <label htmlFor="tel"><i className="fas fa-phone"></i>Tel:</label>
                    <p>02012545632</p>
                    </div>
                    <div>

                    <label  htmlFor="tel"><i className="fas fa-envelope"></i>Email Us:</label>
                    <p>email@email.com</p>
                    </div>
                    <div>

                    <label  htmlFor="tel"><i className='fas fa-location-arrow'></i>Write to Us:</label>
                    <p>81 Hoe Street, E17 4SA</p>
                    </div>

                    </div>
                    </div>
                    <div className="form">
                        <h3>Message us Now</h3>
                        
                        <form onSubmit={this.onSubmit}>
                        <label htmlFor="fullName">Full Name</label>
                        <input onChange={this.onChange} type="text" name="fullname" id="fullName"/>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.onChange} type="text" name="email" id="email"/>
                        <label htmlFor="subject">Subject</label>
                        <input onChange={this.onChange} type="text" name="subject" id="subject"/>
                        <label htmlFor="message">Message</label>
                        <textarea onChange={this.onChange} name="message" id="message"   rows="10"></textarea>
                        {(this.state.msg)? <div>{this.state.msg}</div>: ''}
                        <button type="submit">Submit</button>
                        
                        </form>
                    </div>
                    
                </div>
                
                <Questions/>
                
            </div>
        )
    }
}


export default  Contact;
