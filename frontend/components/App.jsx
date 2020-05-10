import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectdRoute } from '../util/route_util';

// UI
import NavBar from './nav_bar/nav_bar_container.jsx';
import Modal from '../components/modal/modal';
import Audiobar from './audiobar/audiobar_container';

// Components
import SplashPage from './splash_page/splash_page_container';
import Discover from './discover/discover_container';
import TrackUpload from './track/track_upload/track_upload_container';
import TrackShow from './track/track_show/track_show_container';
import Error404 from './error_404_page.jsx';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      audioRef: null
    }
    this.getRefs = this.getRefs.bind(this);
  }

  getRefs(childRefs){
    this.setState({
      audioRef: childRefs
    });
    console.log(this.state.audioRef)
  }

  render(){
    return(
      <div className="app-container">
        <Modal />
        <Route path="/" component={NavBar}/>
        <Switch>
          <ProtectdRoute exact path="/" component={Discover}/>
          <ProtectdRoute exact path="/discover" component={Discover}/>
          <ProtectdRoute exact path="/stream" component={TrackShow}/>
          <ProtectdRoute exact path="/library" component={Error404}/>
          <ProtectdRoute exact path="/upgrade" component={Error404}/>
          <ProtectdRoute exact path="/upload" component={TrackUpload}/>
          <ProtectdRoute exact path="/:username" component={Error404}/>
          <ProtectdRoute exact path="/:username/:trackName/:id" component={TrackShow} audioRef={this.audioRef}/>
        </Switch>
        <Audiobar passRef={this.getRefs} />
        <AuthRoute path="/" component={SplashPage} audioRef={this.audioRef}/>
      </div>
    );
  }
}

export default App;