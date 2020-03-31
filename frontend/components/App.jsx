import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectdRoute } from '../util/route_util';

// Components
import NavBar from './nav_bar/nav_bar_container.jsx';
import Modal from '../components/modal/modal';
import SplashPage from './splash_page/splash_page_container';
import Discover from './discover/discover_container';
import TrackUpload from './track/track_upload_container';
import TrackShow from './track/track_show_container';
import SoundBar from './sound/sound_bar_container';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="app-container">
        <Modal />
        <Route path="/" component={NavBar}/>
        <Switch>
          {/* <ProtectdRoute exact path="/" component={TrackUpload}/> */}
          <ProtectdRoute exact path="/discover" component={Discover}/>
          <ProtectdRoute exact path="/upload" component={TrackUpload}/>
          <ProtectdRoute exact path="/:username/:trackName/:id" component={TrackShow}/>
        </Switch>
        <SoundBar/>
        <AuthRoute path="/" component={SplashPage}/>
      </div>
    );
  }
}

export default App;