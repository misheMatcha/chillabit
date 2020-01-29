import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', email: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isSignup = this.props.formType === 'Sign in'
  }

  // componentDidUpdate(prevProps){
  //   setTimeout(() => {
  //     this.props.history.push("/index")
  //   }, 5000)
  // }

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
  }

  render(){
    return (
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
        </label>
        {
          this.isSignup ? null : (
            <label>Email:
              <input type="email" value={ this.state.email } onChange={this.handleInput('email')}/>
            </label>
          )
        }
        <label>Password:
          <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
        </label>
        <button>Submit</button>
        {this.props.navLink}
      </form>
    )
  }
};

export default SessionForm;