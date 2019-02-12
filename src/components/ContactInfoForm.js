import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';
import {SelectField, MenuItem} from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import {catalogsData} from './Data';

export class ContactInfoForm extends Component {

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

        <AppBar title="Información de Contacto" />

        <Card>
          <TextField
            hintText="Ingrese su número de celular"
            floatingLabelText="Celular"
            onChange={handleChange('cellPhone')}
            defaultValue={values.cellPhone}
          />
          <br />
          <TextField
            hintText="Ingrese su teléfono de residencia"
            floatingLabelText="Teléfono"
            onChange={handleChange('homePhone')}
            defaultValue={values.homePhone}
          />          
          <br />
          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese la ciudad de residencia"
            floatingLabelText="Ciudad Residencia"
            value={values.residenceCity}
            onChange={(event, key, payload) => {handleSelectChange('residenceCity',event,key,payload)}}
            
          >
            {catalogsData.citiesCat.map(city => (
              <MenuItem
                value={city.value}
                primaryText={city.primaryText}
              />
              ))
            }
          </SelectField>
          <br />
          <TextField
            hintText="Ingrese su dirección de residencia"
            floatingLabelText="Dirección"
            onChange={handleChange('residenceAddress')}
            defaultValue={values.residenceAddress}
          />
          <br />
          <TextField
            hintText="Ingrese su correo electrónico"
            floatingLabelText="E-mail"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <FlatButton
            label="Continuar"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <FlatButton
            label="Volver"
            secondary={true}
            style={styles.button}
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

export default ContactInfoForm
