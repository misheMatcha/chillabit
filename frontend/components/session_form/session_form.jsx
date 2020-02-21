import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', email: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
    this.isSignup = this.props.formType === 'login'
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
  }

  handleDemo(){
    const demo = {
      username: "guest",
      password: "password"
    }

    this.props.processDemo(demo)
  }

  renderErrors(){
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  componentWillUnmount(){
    this.props.clearSessionErrors()
  }

  // maybe remove container, doesn't seem to be a use for it
  render(){
    return (
      <div className="session-form-container">
        <form className="sessionForm" onSubmit={this.handleSubmit}>
          {this.props.formTitle}
          {this.renderErrors()}
          <label>
            <input placeholder="username"
            className="sessionForm-input"
            type="text" value={this.state.username}
            onChange={this.handleInput('username')}/>
          </label>
          {
            this.isSignup ? null : (
              <label>
                <input placeholder="email"
                className="sessionForm-input"
                type="email"
                value={ this.state.email }
                onChange={this.handleInput('email')}/>
              </label>
            )
          }
          <label>
            <input placeholder="password"
            className="sessionForm-input"
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}/>
          </label>
          {this.props.formButton}
          {
            this.isSignup ? null : (
              this.props.terms
            )
          }
        </form>
        <div>
          <button className="sessionForm-button" onClick={this.handleDemo}>Demo Login</button>
        </div>
      </div>
    )
  }
};

export default SessionForm;