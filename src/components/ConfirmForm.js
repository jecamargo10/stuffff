import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import CheckBox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, Checkbox } from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';


export class ConfirmForm extends Component {

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

        <AppBar title="Confirme su Solicitud" />
        
        <Card>
          <CardTitle
            title="Al aceptar términos y condiciones"
          />          

          <CardText>
            -Confirmas la veracidad de la información entregada<br/>
            -Confirmas la declaración del origen de los fondos<br/>
            -Confirmas la consulta a centrales de riesgos<br/>
            -Confirmas las políticas de tratamiento de datos personales
          </CardText>

          <Table
            fixedHeader={false}
            fixedFooter={false}
            selectable={false}
            multiSelectable={false}
          >

            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
            </TableHeader>

            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}
            >            
              <TableRow>                
                <TableRowColumn/>
                <TableRowColumn>
                  <Checkbox
                    label='Acepta Términos y Condiciones'
                    style={myStyles.checkBox}                    
                    value={values.acceptTerms}
                    onCheck={(event, checked) => {values.acceptTerms=checked}}
                  >
                  </Checkbox>
                </TableRowColumn>
                <TableRowColumn/>                
              </TableRow>
            </TableBody>
          </Table>
          
          <FlatButton
            label="Enviar"
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


export default ConfirmForm
