import React, { Component } from 'react';

const stateData = {
  sandBox: true,
  todayDate: new Date(),
  step: 0,

  ammount: 1000000,
  periods: 12,

  firstName: "",
  middleName: "",
  firstSurName: "",
  secondSurName: "",
  idNumber: "",
  birthDate: new Date(),
  idIssuanceDate: new Date(),
  idIssuanceCity: "11001",

  cellPhone: "",
  homePhone: "",
  residenceCity: "11001",
  residenceAddress: "",        
  email: "",

  gender: "",
  dependents: 0,
  edLevel: "",
  civilStatus: "",
  homeType: "",
  
  employerId: "",
  entryDate: new Date(),
  contractType: "",

  income: 0,
  outcome: 0,

  disAccountBank: "",
  disAccountType: "A",
  disAccountNumber: "",

  famRefName: "",
  famRefAddress: "",
  famRefCity: "",
  famRefPhone: "",
  famRefCell: "",
  famRefRel: "",

  perRefName: "",
  perRefAddress: "",
  perRefCity: "11001",
  perRefPhone: "",
  perRefCell: "",
  perRefRel: "",

  acceptTerms: false,
  validationErrors: new Array(),

  creditStatus: "Viable",
  creditId: "1000000015",
  creditInterestRate: 23,
  creditFirstDate: '22-02-2019',
  signFullName: "",
  signIdNumber: ""
}

const catalogsData = {
  citiesCat: [
    {value:"11001", primaryText:"Bogotá"}
  ],
  gendersCat: [
    {value:'M', primaryText: 'Masculino'},
    {value:'F', primaryText: 'Femenino'}
  ],
  educationLevelsCat: [
    {value:'P', primaryText:'Primaria'},
    {value:'S', primaryText:'Secundaria'},
    {value:'G', primaryText:'Pregrado'},
    {value:'E', primaryText:'Especialización'},
    {value:'M', primaryText:'Maestría'},
    {value:'D', primaryText:'Doctodaro'}
  ],
  civilStatusCat: [
    {value:'S', primaryText: 'Soltero'},
    {value:'C', primaryText: 'Casado'},
    {value:'U', primaryText: 'Unión Libre'},
    {value:'E', primaryText: 'Separado'},
    {value:'D', primaryText: 'Divorciado'},
    {value:'V', primaryText: 'Viudo'}
  ],
  homeTypeCat: [
    {value:'P', primaryText: 'Propia'},
    {value:'F', primaryText: 'Familiar'},
    {value:'A', primaryText: 'Arriendo'}
  ],
  employerIdCat: [
    {value: '000001', primaryText: 'BizLogic'}
  ],
  contractTypeCat: [
    {value: 'F', primaryText: 'Fijo'},
    {value: 'I', primaryText: 'Indefinido'},
    {value: 'T', primaryText: 'Temporal'},
    {value: 'P', primaryText: 'Prestación Servicios'},
  ],
  disAccountTypeCat: [
    {value: 'A', primaryText: 'Ahorros'},
    {value: 'C', primaryText: 'Corriente'}
  ],
  disAccountBankCat: [
    {value: '01', primaryText: 'Banco de Bogotá'},
    {value: '02', primaryText: 'Banco Popular'},
    {value: '07', primaryText: 'Bancolombia'},
    {value: '09', primaryText: 'Scotiabank Colpatria'},
    {value: '10', primaryText: 'Sudameris'},
    {value: '13', primaryText: 'BBVA'},
    {value: '14', primaryText: 'ITAU'},
    {value: '19', primaryText: 'Multibanca Colpatria'},
    {value: '23', primaryText: 'Banco de Occidente'},
    {value: '32', primaryText: 'Banco Caja Social'},
    {value: '40', primaryText: 'Banco Agrario'},
    {value: '51', primaryText: 'Banco Davivienda'},
    {value: '52', primaryText: 'Banco Av Villas'},
    {value: '53', primaryText: 'Banco Mundo Mujer'},
    {value: '58', primaryText: 'Banco Procredit'},
    {value: '59', primaryText: 'Bancamía'},
    {value: '60', primaryText: 'Banco Pichincha'},
    {value: '61', primaryText: 'Bancoomeva'},
    {value: '62', primaryText: 'Banco Falabella'},
    {value: '63', primaryText: 'Banco Finandina'},
    {value: '66', primaryText: 'Banco Coopcentral'},
    {value: '90', primaryText: 'BizLogic Fintech'}
  ]
} 

export {
  stateData,
  catalogsData
}