import React, { Component } from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Error from './component/Error';

class App extends Component {

  state = {
    error: '',
    consulta: {}
  }

  componentDidMount() {
    this.setState({
      error:false
    })
  }

  componentDidUpdate() {
    this.consultarApi();
  }

  consultarApi = () => {
    const {ciudad,pais} = this.state.consulta;
    if (!ciudad || !pais) return null;

    //console.log(ciudad);
    //query con fetch api
    const appId = "67d771afece158d11a952f122979ddfb";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    //console.log(url);
    //Leer la url y agregar el api key

    //consultar con Fetch
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

    const error = this.state.error;

    let resultado= undefined;

    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios"/>
    } 
    // else {
    //   // se carga componente del clima
      
    // }

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
