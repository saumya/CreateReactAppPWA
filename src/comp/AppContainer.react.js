//
import React,{Component} from 'react';
//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppContainer extends Component {
  
  
  constructor(props){
    super(props);
    console.log('AppContainer : constructor :');
  }
  
  render(){
    return(
      <MuiThemeProvider>
        <div> 
          AppContainer.react
          <div>
            The application will render here
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  // lifecycle : Start
  componentDidMount(){
    console.log('AppContainer : componentDidMount');
    //firebase.initializeApp(FirebaseConfig.getThisAppConfig().firebase);
  }
  componentWillUnmount(){
    console.log('AppContainer : componentWillUnmount');
  }
  // lifecycle : End
  // utility

}
export default AppContainer;
