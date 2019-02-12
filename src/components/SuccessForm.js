import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, AppBar, Table, TableRow } from 'material-ui';
import IconButton from 'material-ui/IconButton';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import { NavigationMenu } from 'material-ui/svg-icons';

export class SuccessForm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    const { values } = this.props;

    return (
      <MuiThemeProvider muiTheme={myMuiTheme}>        
        <Card
        >
          <CardHeader
            title="Felicitaciones!"
            subtitle="Recibirá instrucciones a través de su correo electrónico"
            avatar={imagesDefs.imgCompanySquare}
          />
          <CardMedia
            overlay={
              <CardTitle 
                title="Registro Exitoso"
              />
            }
          >
            <img 
              src={imagesDefs.imgWallPaper} 
              style={myStyles.wallPaper} 
            />
          </CardMedia>
        </Card>      
        <Card style={myStyles.fillCard} />    
      </MuiThemeProvider>
    )
  }
}

export default SuccessForm
