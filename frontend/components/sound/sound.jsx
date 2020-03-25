import React from 'react';

class Sound extends React.Component{
  constructor(props){
    super(props)
    this.audio;
    this.audioContext;
  }

  componentDidMount(){
    this.audio = new Audio();
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <audio controls>
          <source src={this.props.source}/>
        </audio>
      </div>
    );
  }
};

export default Sound;