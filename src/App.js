import React, { Component } from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Error from './component/Error';
import Clima from './component/Clima';

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidMount() {
    this.setState({
      error:false
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
    // console.log("this.state.consulta");
    // console.log(this.state.consulta);
    // console.log("prevState.consulta");
    // console.log(prevState.consulta);
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
    
  }

  consultarApi = () => {
    const {ciudad,pais} = this.state.consulta;
    if (!ciudad || !pais) return null;

    //console.log(ciudad);
    //query con fetch api
    //Leer la url y agregar el api key
    const appId = "67d771afece158d11a952f122979ddfb";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    //console.log(url);

    // Query con fetch api
    //fetch(url).then ( respuesta => {console.log(respuesta.json())})
    fetch(url).then ( respuesta => {
      return respuesta.json();
    })
    .then(datos => {
      //console.log(datos);
      this.setState({
        resultado: datos,
      })
    })
    .catch(error => {
      console.log(error);
    })
    
  }

  datosConsulta = respuesta => {
    if (respuesta.ciudad ==='' || respuesta.pais===''){
      //console.log('Existen errores');
      this.setState({ error: true})
    } else {
      //console.log(respuesta);
      this.setState({ 
        error: false,
        consulta: respuesta
      })
    }
    
  }

  render() {

    const {error} = this.state,
    {cod} = this.state.resultado;

    let resultado;

    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios"/>
    } else if (cod==="404") {
      resultado = <Error mensaje="No existe ciudad, verifique sus datos ingresados"/>
    } else {
      // se carga componente del clima
      resultado = <Clima resultado = {this.state.resultado}/>
    }

    return (
      <div className="App">
        <Header titulo="Clima React"/>
        <Formulario datosConsulta={this.datosConsulta}/>
        {resultado}
      </div>
    );
  }
}

export default App;
