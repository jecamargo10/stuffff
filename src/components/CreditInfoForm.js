import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import {SelectField, MenuItem} from 'material-ui';


import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';

export class CreditInfoForm extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  continue = e => {
    e.preventDefault();
    if (this.props.nextStep() == false) {
      this.handleOpen();
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange, handleSelectChange } = this.props;
    
    return (      

      <MuiThemeProvider muiTheme={myMuiTheme}>
        <Dialog
          title="Mensaje"          
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <List>            
            {values.validationErrors.map(error => (
              <ListItem>{error}</ListItem>  
              ))
            }                        
          </List>
        </Dialog>
        <Card>
          <AppBar title="Datos del Crédito" />          
          <TextField
            hintText="Ingrese el monto"
            floatingLabelText="Monto ($)"
            defaultValue={values.ammount}
            onChange={handleChange('ammount')}
          />
          <br/>
          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese el plazo"
            floatingLabelText="Plazo (Meses)"
            value={values.periods}
            onChange={(event, key, payload) => {handleSelectChange('periods',event,key,payload)}}
          >
            <MenuItem value= {6} primaryText="6 Meses" />
            <MenuItem value={12} primaryText="12 Meses" />
            <MenuItem value={24} primaryText="24 Meses" />
            <MenuItem value={36} primaryText="36 Meses" />
            
          </SelectField>
          
          <br />
          <FlatButton
            label="Continuar"
            primary={true}
            onClick={this.continue}
            style={myStyles.button}
          />
          <FlatButton
            label="Volver"
            secondary={true}
            onClick={this.back}
            style={myStyles.button}
          />
        </Card>
        <Card
          style={myStyles.fillCard}
        />        
      </MuiThemeProvider>
    )
  }
}


export default CreditInfoForm
