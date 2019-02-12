import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';

export class FinancialInfoForm extends Component {

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

    const { values, handleChange } = this.props;

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

        <AppBar title="Información Financiera" />
        <Card>         
          
          <TextField
            hintText="Ingrese sus ingresos"
            floatingLabelText="Ingresos Mensuales"
            onChange={handleChange('income')}
            defaultValue={values.income}
          />
          <br />
          <TextField
            hintText="Ingrese sus egresos"
            floatingLabelText="Egresos Mensuales"
            onChange={handleChange('outcome')}
            defaultValue={values.outcome}
          />          
          <br />          
          <FlatButton
            label="Continuar"
            primary={true}
            style={myStyles.button}
            onClick={this.continue}
          />
          <FlatButton
            label="Volver"
            secondary={true}
            style={myStyles.button}
            onClick={this.back}
          />        
        </Card>
        <Card style={myStyles.fillCard} />
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FinancialInfoForm
