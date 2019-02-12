import React, { Component } from 'react';

// Forms
import StartForm from './StartForm';
import CreditInfoForm from './CreditInfoForm';
import BasicInfoForm from './BasicInfoForm';
import ContactInfoForm from './ContactInfoForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import JobInfoForm from './JobInfoForm';
import FinancialInfoForm from './FinancialInfoForm';
import ConfirmForm from './ConfirmForm';
import SignForm from './SignForm';
import DisbursInfoForm from './DisbursInfoForm';
import RefInfoForm from './RefInfoForm'; 
import SuccessForm from './SuccessForm';

// Data
import {stateData} from './Data';

export class UserForm extends Component {

  state = stateData;

  // Handle Validations on Input Data
  handleDataValidations = () => {
    this.state.validationErrors = [];
    if (this.state.sandBox == true) {
      return true
    } else {
      switch (this.state.step) {
        case 1: 
          {
            if ((this.state.ammount == "") || (isNaN(this.state.ammount) == true) || (this.state.ammount <= 0)) {
              this.state.validationErrors.push('El monto debe ser numérico mayor de cero');    
            }
            if ((this.state.periods == "") || (isNaN(this.state.periods) == true) || (this.state.periods <= 0)) {
              this.state.validationErrors.push('Los periodos deben ser numéricos mayores de cero')
            }
            break;
          }
        case 2: {
          if (this.state.firstName == "") {
            this.state.validationErrors.push('El primer nombre no puede ser vacío')
          }
          if (this.state.middleName == "") {
            this.state.validationErrors.push('El segundo nombre no puede ser vacío')
          }
          if (this.state.firstSurName == "") {
            this.state.validationErrors.push('El primer apellido no puede ser vacío')
          }
          if (this.state.secondSurName == "") {
            this.state.validationErrors.push('El segundo apellido no puede ser vacío')
          }
          if ((this.state.idNumber == "") || (isNaN(this.state.idNumber) == true )) {
            this.state.validationErrors.push('El número de identificación no es un número')
          }
          if (this.state.birthDate.toLocaleDateString() == "") {
            this.state.validationErrors.push('La fecha de nacimiento no ser vacío')
          }
          if (this.state.idIssuanceDate.toLocaleDateString() == "") {
            this.state.validationErrors.push('La fecha de expedición no ser vacío')
          }
          if (this.state.idIssuanceCity == "") {
            this.state.validationErrors.push('La ciudad de expedición no ser vacío')
          }
          break;
        }
        case 3: {
          if (this.state.cellPhone == "") {
            this.state.validationErrors.push('El celular no puede ser vacío')
          }
          if (this.state.homePhone == "") {
            this.state.validationErrors.push('El teléfono no puede ser vacío')
          }
          if (this.state.residenceCity == "") {
            this.state.validationErrors.push('La ciudad no puede ser vacío')
          }
          if (this.state.residenceAddress == "") {
            this.state.validationErrors.push('La dirección no puede ser vacío')
          }
          if (this.state.email == "") {
            this.state.validationErrors.push('El e-mail no puede ser vacío')
          }          
          break;
        }
        case 4: {
          if (this.state.gender == "") {
            this.state.validationErrors.push('El género no puede ser vacío')
          }
          if (isNaN(this.state.dependents)) {
            this.state.validationErrors.push('Las personas a cargo debe ser un número')
          }
          if (this.state.edLevel == "") {
            this.state.validationErrors.push('Elnivel de estudios no puede ser vacío')
          }
          if (this.state.civilStatus == "") {
            this.state.validationErrors.push('El estado civil no puede ser vacío')
          }
          if (this.state.homeType == "") {
            this.state.validationErrors.push('El tipo de vivienda no puede ser vacío')
          }
          break;
        }
        case 5: {
          if (this.state.employerId == "") {
            this.state.validationErrors.push('El empleador no puede ser vacío')
          }
          if (this.state.entryDate.toLocaleDateString() == "") {
            this.state.validationErrors.push('La fecha de ingreso no puede ser vacío')
          }
          if (this.state.contractType == "") {
            this.state.validationErrors.push('El tipo de contrato no puede ser vacío')
          }
          break;
        }
        case 6: {
          if (isNaN(this.state.income)) {
            this.state.validationErrors.push('Los ingresos deben ser un número')
          }
          if (isNaN(this.state.outcome)) {
            this.state.validationErrors.push('Los egresos deben ser un número')
          }
          break;
        }
        case 7: {
          if (this.state.acceptTerms == false) {
            this.state.validationErrors.push('Debe aceptar términos y condiciones para continuar');
          }
          break;
        }
        case 9: {
          if (this.state.disAccountBank == "") {
            this.state.validationErrors.push('El banco no puede ser vacío');
          }
          if (this.state.disAccountType == "") {
            this.state.validationErrors.push('El tipo de cuenta no puede ser vacío');
          }
          if ((isNaN(this.state.disAccountNumber) == true) || (this.state.disAccountNumber == "")) {
            this.state.validationErrors.push('La cuenta debe ser un número');
          }
          break;
        }
        case 10: {
          if (this.state.perRefName == "") {
            this.state.validationErrors.push('El nombre no puede ser vacío');
          }
          if (this.state.perRefAddress == "") {
            this.state.validationErrors.push('La dirección no puede ser vacío');
          }
          if (this.state.perRefCity == "") {
            this.state.validationErrors.push('La ciudad no puede ser vacío');
          }
          if (this.state.perRefCell == "") {
            this.state.validationErrors.push('El celular no puede ser vacío');
          }
          if (this.state.perRefPhone == "") {
            this.state.validationErrors.push('El teléfono no puede ser vacío');
          }
          if (this.state.perRefRel == "") {
            this.state.validationErrors.push('La relación no puede ser vacío');
          }
          break;
        }
      }
      if (this.state.validationErrors.length == 0) {
        return true
      } else {
        return false
      }
    }
  }
  

  // Proceed to Next Step
  nextStep = () => {
    if ( this.handleDataValidations() == true ) {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
      return true;
    } else {
      return false;
    }    
  }

  // Proceed to Prev Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle Input Changes
  handleChange = input => e => {
    if (e == null) {
      alert("e = null");
    } else {
      this.setState({ [input]: e.target.value });
    }
    console.log(this.state);
  }

  // Handle Input Changes for Dates
  handleDateChange = (input, event, date) => {
    this.setState({ [input]: date });
  }

  handleSelectChange = (input, event, key, value) => {
    this.setState({ [input]: value });
  }

  render() {

    const values = this.state;

    switch(values.step) {
      case 0:
        return (                           
          <StartForm
            nextStep={this.nextStep}            
            values={values}
          />
        )
      case 1:
        return (
          <CreditInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            handleOpenDialog={this.handleOpenDialog}
            handleCloseDialog={this.handleCloseDialog}
            values={values}
          />          
        )
      case 2:
        return (
          <BasicInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        )
      case 3:
        return (
          <ContactInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        )
      case 4:
        return (
          <PersonalDetailsForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        )
      case 5:
        return (
          <JobInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDateChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        )
      case 6:
        return (
          <FinancialInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return (
          <ConfirmForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 8:
        return (
          <SignForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 9:
        return (
          <DisbursInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        )
      case 10:
        return (
          <RefInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        )
      case 11:
          return (
            <SuccessForm
              values={values}
            />
          )
    }
  }
}

export default UserForm
