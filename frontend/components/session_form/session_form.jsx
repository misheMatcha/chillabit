import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', email: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isSignup = this.props.formType === 'Sign in'
  }

  handleInput(field){
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const nextState = Object.assign({}, this.state)
    if (this.isSignup) {
      delete nextState.email
    }
    this.props.processForm(nextState)
    this.props.closeModal()
  }

  // will probably need to redo the forms and styling after modal has been implemented
  render(){
    return (
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <h3 className="sessionForm-title">{this.props.formType}</h3>
        <label>
          <input placeholder="username" className="sessionForm-input" type="text" value={this.state.username} onChange={this.handleInput('username')}/>
        </label>
        {
          this.isSignup ? null : (
            <label>
              <input placeholder="email" className="sessionForm-input" type="email" value={ this.state.email } onChange={this.handleInput('email')}/>
            </label>
          )
        }
        <label>
          <input placeholder="password" className="sessionForm-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
        </label>
        <button>Continue</button>
        {/* {this.props.navLink} */}
      </form>
    )
  }
};

export default SessionForm;