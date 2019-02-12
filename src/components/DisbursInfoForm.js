import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, Checkbox } from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import {catalogsData} from './Data';

export class DisbursInfoForm extends Component {

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

        <AppBar title="Desembolso" />
        <Card>

          <SelectField
            style={myStyles.select}
            hintText="Ingrese el banco"
            floatingLabelText="Banco"
            value={values.disAccountBank}
            onChange={(event, key, payload) => {handleSelectChange('disAccountBank',event,key,payload)}}
          >
            {catalogsData.disAccountBankCat.map(bank => (
              <MenuItem
                value={bank.value}
                primaryText={bank.primaryText}
              />
              ))
            }
          </SelectField>

          <br />
          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese el tipo de cuenta"
            floatingLabelText="Tipo de Cuenta"
            value={values.disAccountType}
            onChange={(event, key, payload) => {handleSelectChange('disAccountType',event,key,payload)}}
          >
            {catalogsData.disAccountTypeCat.map(accType => (
              <MenuItem
                value={accType.value}
                primaryText={accType.primaryText}
              />
              ))
            }
          </SelectField>

          <br />
          <TextField
            hintText="Ingrese el número de cuenta"
            floatingLabelText="Número de Cuenta"
            onChange={handleChange('disAccountNumber')}
            defaultValue={values.disAccountNumber}
          />
          <br />
          <FlatButton
            label="Continuar"
            primary={true}
            style={myStyles.button}
            onClick={this.continue}
          /> 
        </Card>
        <Card style={myStyles.fillCard} />
      </MuiThemeProvider>
    )
  }
}

export default DisbursInfoForm
