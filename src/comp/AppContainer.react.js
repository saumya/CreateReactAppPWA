//
// Application Logical Entry
// Parent container of all
//
import React,{Component} from 'react';
//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

//import TextField from 'material-ui/TextField';

import LoginComponent from './LoginComponent.react';

class AppContainer extends Component {

  constructor(props){
    super(props);
    console.log('AppContainer : constructor :');
    this.state = {isMenuOpen: false};

    this.style = {
      height: 200, width: 200, margin: 20,
      textAlign: 'center', display: 'inline-block', };
    }
  handleToggle = () => this.setState({isMenuOpen: !this.state.isMenuOpen});
  render(){
    return(
      <MuiThemeProvider>
        <div> 
          <AppBar title="Title" 
            onLeftIconButtonTouchTap={this.handleToggle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          
          <div>
            Aliquam a ante fringilla, suscipit ex nec, eleifend ligula. Nunc rhoncus venenatis urna id vulputate. In fringilla bibendum sem id interdum. Quisque tincidunt viverra lectus, eget semper erat auctor vitae.
            
            <Paper style={this.style} zDepth={1}>
              Aliquam a ante fringilla, suscipit ex nec, eleifend ligula. Nunc rhoncus venenatis urna id vulputate. In fringilla bibendum sem id interdum. Quisque tincidunt viverra lectus, eget semper erat auctor vitae.
            </Paper>
            
            <Paper style={this.style} zDepth={1}>
              Aliquam a ante fringilla, suscipit ex nec, eleifend ligula. Nunc rhoncus venenatis urna id vulputate. In fringilla bibendum sem id interdum. Quisque tincidunt viverra lectus, eget semper erat auctor vitae.
            </Paper>

            <Paper style={{width:'80%', margin:'2em'}} zDepth={1}>
              <LoginComponent />
            </Paper>

          </div>
          
          <Drawer 
            docked={false} width={200} 
            onRequestChange={(open) => this.setState({isMenuOpen: open})}
            open={this.state.isMenuOpen}>
           <h3>Navigate</h3>
           <MenuItem>Menu Item</MenuItem>
           <MenuItem>Menu Item 2</MenuItem>
           <MenuItem>Menu Item 3</MenuItem>
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
