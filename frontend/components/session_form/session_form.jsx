import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(field){
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.processForm(user)
  }

  render(){
    const isSignup = this.props.formType === 'signup';

    return (
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
        </label>
        {
          !isSignup ? null : (
            <label>Email
              <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
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