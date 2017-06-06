//
// Application Logical Entry
// Parent container of all
//
import React,{Component} from 'react';
//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
          
          <Drawer open={true}>
           <h3>Navigate</h3>
           <MenuItem>Menu Item</MenuItem>
           <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          
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
