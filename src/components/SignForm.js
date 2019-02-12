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
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, Checkbox } from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';
import TextField from 'material-ui/TextField';


import {myMuiTheme, myStyles} from './Theme';

export class SignForm extends Component {

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

        <AppBar title="Pagaré" />
        
        <Card>
          <CardTitle
            title={"Análisis Automático: " + values.creditStatus}
          />          

          <CardText style={myStyles.paper}>
            

              <strong>PAGARÉ LIBRANZAS</strong><br/><br/>
              <strong>1. PAGARÉ NO.: {values.creditId}</strong><br/><br/>
              <strong>2. VALOR DEL CRÉDITO: ${values.ammount}</strong><br/><br/>
              <strong>3. TASA DE INTERÉS REMUNERATORIA EFECTIVA ANUAL: {values.creditInterestRate} %</strong><br/><br/>
              <strong>4. LUGAR PARA EL PAGO DEL CRÉDITO: Bogotá</strong><br/><br/>
              <strong>5. PLAZO DE PAGO: 12</strong><br/><br/>
              <strong>6. FECHA DE PAGO DE LA PRIMERA CUOTA: {values.creditFirstDate}</strong><br/>
              <p>El(los) abajo firmante(s), mayo(res) de edad, identificado(s) y obrando como aparece al pie de mi(nuestra)
              firma(s), quien(es) en adelante me(nos) denominaré(mos) <strong>EL(LOS) DEUDOR(ES)</strong>, por medio del
              presente pagaré hago(hacemos) constar:</p>
              <p><strong>PRIMERO.- </strong>Que me(nos) obligo(amos) a <strong>PAGAR </strong>a la orden de Compañia de
              inversiones y libranzas SAS o de quien represente sus derechos u ostente en el futuro su calidad de <strong>ACREEDOR, </strong>en
              forma incondicional, indivisible y solidaria, la suma de dinero que se menciona en el numeral 2 (valor de
              crédito) del encabezamiento de este documento.</p>
              <p><strong>SEGUNDO.- </strong>Que igualmente me(nos) obligo(mos) a pagar, junto con el capital, los intereses
              remuneratorios sobre el saldo insoluto del crédito a la tasa efectiva anual que aparece señalada en el
              numeral 3 (tasa de interés remuneratoria efectiva anual) del encabezamiento, los cuales serán pagados en su
              equivalente mes vencido.</p>
              <p><strong>TERCERO.- </strong>Que la suma que he(mos) recibido a título de mutuo junto con sus respectivos
              intereses y los cargos por concepto de primas de seguro, serán pagados al <strong>ACREEDOR </strong>en la
              ciudad que se menciona en el numeral 4 (lugar para el pago del crédito) del encabezamiento y en el plazo que
              se menciona en el numeral 5 (plazo de pago) que aparece en la parte superior de este documento. La primera
              cuota será exigible el día que se menciona en el numeral 6 (fecha de pago de la primera cuota) del
              encabezamiento, y las demás cuotas subsiguientes serán exigibles el mismo día de cada mes siguiente hasta la
              cancelación total de la deuda. No obstante, la fecha de pago podrá ser modificada en los términos señalados
              en la carta de instrucciones para diligenciar los espacios en blanco de este pagaré.</p>
              <p><strong>PARÁGRAFO PRIMERO.- </strong>Cuando la fecha de vencimiento del pago de una de las cuotas deba
              hacerse en un día no hábil, me(nos) obligo(amos) a cancelar dicha cuota en el día hábil inmediatamente
              siguiente al de la fecha de vencimiento.</p>
              <p><strong>PARÁGRAFO SEGUNDO.- </strong>Si por cualquier motivo no opera el descuento por nómina de los
              salarios, nominas, prestaciones e indemnizaciones a que tengo(amos) derecho, y/o no es realizado el traslado
              de los recursos correspondientes al pago de las cuotas al <strong>ACREEDOR </strong>en las fechas
              establecidas, este último queda expresamente facultado por mi(nostros) para (i) exigir al pagador de la
              Empresa donde laboramos que nos descuente el número de cuotas que resulten a nuestro cargo hasta la
              cancelación total de la deuda; y (ii) para tomar las medidas necesarias para normalizar las obligaciones por
              concepto de capital e intereses y demás conceptos, adoptando para tal efecto medidas como la modificación
              del plazo inicialmente pactado y la capitalización de intereses, entre otras.</p>
              <p><strong>CUARTO.- </strong>Los pagos que se efectúen por <strong>EL DEUDOR,</strong> se aplicarán en el
              siguiente orden de prelación: Primas de Seguros, intereses de mora, cuota o cuotas predeterminadas vencidas
              o causadas en orden de antigüedad, es decir, cubriendo todos los componentes de las cuotas más atrasadas,
              así como comisiones, gastos e impuestos, si a ello hubiere lugar.</p>
              <p><strong>PARÁGRAFO PRIMERO.- </strong>Si después de cancelar la última cuota causada hasta la fecha de pago
              queda un excedente inferior a la cuota siguiente, éste se abonará como pago parcial de la misma. Si el
              excedente es mayor o igual al valor de la cuota, se aplicará como abono a capital.</p>
              <p><strong>QUINTO.- </strong>Que en caso de mora me(nos) obligo(mos) a pagar intereses a la tasa de interés
              moratoria máxima que permitan las disposiciones legales vigentes.</p>
              <p><strong>SEXTO.- </strong>Que expresamente declaro(amos) excusada la presentación del aviso de rechazo y
              prostesto para la exigibilidad del pago.</p>
              <p><strong>SÉPTIMO.- </strong>Que en caso de cobro judicial o extrajudicial de este Pagaré serán de mi(nuestra)
              cuenta todos los gastos y costas que se ocasionen por la cobranza judicial o extrajudicial. En el evento de
              cobro judicial, los gastos no se limitarán a las costas judiciales que decrete el juez, sino también serán
              de mi(nuestro) cargo todos los honorarios de(los) abogado(s) contratado(s) por el <strong>ACREEDOR </strong>para
              el respectivo cobro.</p>
              <p><strong>PARÁGRAFO PRIMERO.- </strong>Todos los impuestos que se causen para la suscripción de este Pagaré,
              serán igualmente a cargo de <strong>EL(LOS) DEUDOR(ES).</strong></p>
              <p><strong>OCTAVO.- </strong>Que reconozco(cemos) de antemano el derecho que le asiste al
              <strong>ACREEDOR</strong> para que, en los eventos que a continuación se detallan, pueda declarar extinguido
              el plazo y de esta manera exigir anticipadamente, judicial o extrajudicialmente, sin necesidad de
              requerimiento alguno, el pago de la totalidad del saldo insoluto de la obligación incorporada en el presente
              pagaré, así como sus intereses, los gastos de cobranza, incluyendo los honorarios de los abogados que hayan
              sido pactados por <strong>EL ACREEDOR </strong>y las demás obligaciones a mi(nuestro) cargo constituidas a
              favor de <strong>EL ACREEDOR.</strong></p>
              <p>a) Si se presenta mora en el cumplimiento de cualquiera de las obligaciones que directa o indirectamente
              tenga(mos) con el <strong>ACREEDOR. </strong>En dicho caso se extinguirá automáticamente el plazo concedido,
              haciéndose exigible el monto total de las obligaciones. El <strong>ACREEDOR </strong>podrá restituirme(nos)
              el plazo, para lo cual podrá exigir el pago de las cuotas vencidas, junto con la totalidad de intereses
              causados hasta la fecha en la que se haga el respectivo pago, así como los gastos de honorarios de abogado y
              comisiones por concepto de seguros que por mi(nuestra) cuenta hayan sido pagados por el
              <strong>ACREEDOR;</strong></p>
              <p>b) Si soy(somos) demandado(s) por cualquier persona natural o jurídica;</p>
              <p>c) Si se abre proceso de concurso de acreedores, liquidación, oferta de cesión de bienes, cierre o abandono
              de los negocios o en el evento en que me(nos) encuentre(contremos) en notorio estado de insolvencia;</p>
              <p>d) El giro de cheque sin provisión de fondos por uno cualquiera de <strong>LOS DEUDORES</strong>;</p>
              <p>e) Si los bienes dados en garantía se demeritan, se agravan, se enajenan en todo o en parte, o si estos dejan
              de ser garantía suficiente;</p>
              <p>f) Si cometo(emos) inexactitudes en balances, informes, declaraciones o documentos presentado al
              <strong>ACREEDOR;</strong>
              </p>
              <p>g) Muerte de uno cualquiera de los <strong>DEUDORES;</strong></p>
              <p>h) En caso de que por cualquier causa termine el contrato o relación laboral que cause los salarios,
              prestaciones, indemnizaciones, que, para mayor seguridad de las obligaciones que asumo por el presente
              pagaré, pignoro en favor de Compañia de inversiones y libranzas SAS;</p>
              <p>i) En los demás casos que señale la ley.</p>
              <p><strong>NOVENO.- </strong>Que expresamente autorizo(amos) irrevocablemente al <strong>ACREEDOR </strong>para
              llevar el Control de los abonos del crédito que me(nos) fue otorgado en el cuerpo del presente título valor
              y/o en hoja adicional y/o en registros sistematizados. Asimismo, faculto(amos) al <strong>ACREEDOR </strong>para
              compensar los saldos pendientes por pagar a mi(nuestro) cargo, con los dineros que tenga(mos) depositados en
              cualquier cuenta de ahorros y/o en cualquier otro depósito a la vista o a término de que sea(mos)
              titular(es) en dicha entidad, ya sea en forma individual y/o en forma alternativa con otra u otras personas
              naturales o jurídicas.</p>
              <p><strong>DÉCIMO.- </strong>Que expresamente autorizo(amos) al <strong>ACREEDOR </strong>para que a cualquier
              título endose el presente pagaré o ceda el crédito incorporado a favor de cualquier tercero, sin necesidad
              de notificación.</p>
              <p><strong>DÉCIMO PRIMERO.- </strong>Compañia de inversiones y libranzas SAS tendrá el derecho de dirigirse, de
              manera indistinta, contra cualquiera de los obligados en virtud del presente instrumento, sin necesidad de
              notificar a los otros suscriptores de este título. Además, entre los distintos suscriptores, nos conferimos
              poder y representación recíproca en razón de la cual, en caso de que se acuerde una prórroga del plazo, la
              reestructuración de la deuda, o la modificación y/o aclaración de cualquiera de las condiciones pactadas,
              con uno sólo de nosotros, se mantendrá la solidaridad que adquirimos respecto de las obligaciones derivadas
              de este pagaré, con respecto al alcance y contenido de las obligaciones nuevas que se adquieran, para lo
              cual cualquiera de nosotros podrá suscribir el(los) nuevo(s) pagaré(s) o documento modificatorio en nombre y
              representación de los demás.</p>
              <p><strong>DÉCIMO SEGUNDO.- </strong>Para efectos de consolidar una política de conocimiento al cliente y velar
              por el efectivo cumplimiento de las garantías constitucionales establecidas, en mi(nuestra) calidad de
              titular de información, actuando libre y voluntariamente, autorizo(amos) de manera expresa e irrevocable a
              Compañia de inversiones y libranzas SAS o a quien represente sus derechos de <strong>ACREEDOR </strong>a
              consultar, solicitar, suministrar, reportar, procesar y divulgar toda la información que se refiera a
              mi(nuestro) comportamiento crediticio, financiero, comercial, de servicios y de terceros países de la misma
              naturaleza, a la Central de Información –CIFIN que administra la Asociación Bancaria y de Entidades
              Financieras de Colombia o a quien represente sus derechos.</p>
              <p><strong>PARÁGRAFO PRIMERO.- </strong>La presente autorización faculta a Compañia de inversiones y libranzas
              SAS para que mi(nuestros) datos personales y en general la información obtenida en virtud de la relación
              comercial establecida, pueda ser objeto de tratamiento sistematizado y compartido por parte de Compañia de
              inversiones y libranzas SAS con las sociedades con las que está vinculado, para efectos de que la misma
              sirva de soporte para la estructuración de una estrategia comercial de carácter corporativo, que -entre
              otras actividades- permita la remisión de información y de ofertas comerciales, todo ello respetando las
              limitaciones impuestas por el régimen legal y las decisiones jurisdiccionales.</p>
              <p><strong>PARÁGRAFO SEGUNDO.- </strong>Conozco(cemos) que el alcance de esta autorización implica que el
              comportamiento frente a mis obligaciones será registrado con el objeto de suministrar información suficiente
              y adecuada al mercado sobre el estado de mis obligaciones financieras, comerciales, crediticias, de
              servicios y la proveniente de terceros países de la misma naturaleza. En consecuencia, quienes se encuentran
              afiliados y/o tengan acceso a la Central de Información –CIFIN podrán conocer esta información, de
              conformidad con la legislación y jurisprudencia aplicable. La información podrá ser igualmente utilizada
              para efectos estadísticos. Mis derechos y obligaciones, así como la permanencia de mi información en las
              bases de datos, corresponden a lo determinado por el ordenamiento jurídico aplicable, del cual –por ser de
              carácter público- estoy(amos) enterado(s).</p>
              <p><strong>PARÁGRAFO TERCERO.- </strong>En caso de que en el futuro, en este documento se efectúe a favor de un
              tercero una venta de cartera o una cesión a cualquier títulose de las obligaciones a mi(nuestro) cargo, los
              efectos de la presente autorización se extenderán a éste en los mismos términos y condiciones. De igual
              forma, autorizo(amos) a la Central de Información – CIFN a que, en su calidad de operador, ponga mi(nuestra)
              información a disposición de otros operadores nacionales o extranjeros, en los términos que establece la
              ley, siempre y cuando su objeto sea similar al aquí establecido.</p>
              <p>Para constancia de lo anterior firmo en la ciudad de <u>&nbsp;&nbsp;Bogotá&nbsp;&nbsp;</u> el DÍA
              <u>&nbsp;&nbsp;{values.todayDate.getDate()}&nbsp;&nbsp;</u> MES<u>&nbsp;&nbsp;{values.todayDate.getMonth()}&nbsp;&nbsp;</u> AÑO<u>&nbsp;&nbsp;{values.todayDate.getFullYear()}&nbsp;&nbsp;</u>
              </p>
              <br/><br/><br/><br/><br/>
              <p><strong>EL DEUDOR (Persona natural) </strong></p>
              <p>Firma</p>
              <p>{values.firstName + ' ' + values.middleName + ' ' + values.firstSurName + ' ' + values.secondSurName}</p>
              <p>C.C. {values.idNumber}</p>
              <p>Dirección {values.residenceAddress}</p>
              <p>Teléfono(s) {values.homePhone}</p>
              <p>Domiciliado en la ciudad de:</p>
              <p><u>&nbsp;&nbsp;Bogotá&nbsp;&nbsp;&nbsp;&nbsp;{values.todayDate.toLocaleDateString()}&nbsp;&nbsp;</u> Ciudad y fecha (D/M/A)</p>
              <br/><br/><br/><br/><br/>
              <hr/>
              <p><strong>CARTA DE INSTRUCCIONES PAGARÉ LIBRANZAS</strong></p>
              <p><strong>SEÑORES Compañía de inversiones y libranzas S.A.S</strong></p>
              <p>Apreciados señores:</p>
              <p>El(los) abajo firmante(s), mayor(es) de edad, identificado(s) y obrando como aparece al pie de mi(nuestra)
              firma(s), me(nos) permito(imos) manifestar que autorizo(amos) en forma irrevocable a <br/>Compañía de
              inversiones y libranzas S.A.S, en su calidad de <strong>ACREEDOR,</strong> o a quien en el futuro detente
              esta calidad del crédito que apruebe Compañía de inversiones y libranzas S.A.S en virtud de la solicitud de
              crédito que para su correspondiente análisis he(mos) presentado, para llenar el pagaré a la orden con
              espacios en blanco que he(mos) suscrito a favor de Compañía de inversiones y libranzas S.A.S, de acuerdo con
              las siguientes instrucciones:</p>
              <p>1. El pagaré podrá ser diligenciado por el <strong>ACREEDOR </strong>de acuerdo con su numeración interna.
              </p>
              <p>2. El número del pagaré corresponderá al que le sea asignado por el <strong>ACREEDOR </strong>de acuerdo con
              su numeración interna.</p>
              <p>3. El <strong>ACREEDOR </strong>diligenciará el espacio correspondiente al valor del crédito con la suma de
              dinero que efectivamente desembolse a mi(nuestro) favor a título de mutuo comercial con intereses (crédito).
              </p>
              <p>4. La tasa de interés remuneratoria se expresará en términos efectivos anuales y será aquella que fije el
              <strong>ACREEDOR </strong>de acuerdo con su política interna de crédito al momento de realizarse el
              desembolso de la suma de dinero.</p>
              <p>5. El lugar para el pago del crédito corresponde a la ciudad donde se haya presentado la solicitud de
              crédito.</p>
              <p>6. El plazo de pago será el establecido por el <strong>ACREEDOR </strong>en el documento interno denominado
              carta de aprobación del crédito o en la comunicación que para el efecto sea utilizada por éste, para
              informarme(nos) sobre los términos de la operación de crédito a ser perfeccionada.</p>
              <p>7. La fecha de pago de la primera cuota mensual, será el mismo día del mes inmediatamente siguiente a aquél
              en que el <strong>ACREEDOR</strong> realice el desembolso del crédito. No obstante lo anterior, el día
              también podrá ser el solicitado por mi(nosotros) en cualquiera de los documentos que se presenten con la
              solicitud del crédito y que sea efectivamente aceptado y registrado por el <strong>ACREEDOR </strong>en sus
              sistemas internos<strong>.</strong></p>
              <p>Declaro y acepto, de manera libre y espontánea, que el pagaré así diligenciado presta mérito ejecutivo, por
              lo que Compañía de inversiones y libranzas S.A.S o quien en el futuro detente su calidad de
              <strong>ACREEDOR</strong>, podrá exigir su pago por vía judicial, sin perjuicio de las demás acciones
              legales que se puedan tener y ejercer.</p>
              <p>Las presentes instrucciones las imparto(imos) de conformidad con lo dispuesto en el inciso segundo del
              artículo 622 del Código de Comercio para todos los efectos allí previstos.</p>
              <p>Dejo constancia que recibí la presente carta de instrucciones, de acuerdo con lo ordenado por la
              Superintendencia Financiera de Colombia.</p>
              <p>Para constancia de lo anterior firmo</p>
              <p><strong>EL DEUDOR (Persona natural) </strong></p>
              <p>Firma</p>
              <p>{values.firstName + ' ' + values.middleName + ' ' + values.firstSurName + ' ' + values.secondSurName}</p>
              <p>C.C. {values.idNumber}</p>
              <p>Dirección {values.residenceAddress}</p>
              <p>Teléfono(s) {values.homePhone}</p>
              <p>Domiciliado en la ciudad de:</p>
              <p><u>&nbsp;&nbsp;Bogotá&nbsp;&nbsp;&nbsp;&nbsp;{values.todayDate.toLocaleDateString()}&nbsp;&nbsp;</u> Ciudad y fecha (D/M/A)</p>
              <br/>
            
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
                  <TextField
                    hintText="Ingrese su nombre"
                    floatingLabelText="Nombre Completo"
                    onChange={handleChange('signFullName')}
                    defaultValue={''}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField
                    hintText="Ingrese su identificación"
                    floatingLabelText="Identificación"
                    onChange={handleChange('signIdNumber')}
                    defaultValue={''}
                  />
                </TableRowColumn>
                <TableRowColumn/>                
              </TableRow>
            </TableBody>
          </Table>
          
          <FlatButton
            label="Firmar"
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


export default SignForm
