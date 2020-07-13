import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/form';
import Info from './Components/return';





class App extends React.Component{
  
  state={
    temperature:'',
    description:'',
    humedity:'',
    wind_speed:'',
    city:'',
    country:'',
    error:null

  }

  
  getClima = e =>{

    console.log(e.target.elements)
    const {pais, ciudad} = e.target.elements
    const valuec= ciudad.value;
    

    const URL="https://community-open-weather-map.p.rapidapi.com/weather?id=2172797"+ 
    "&units=metric&q="+valuec

    fetch(URL, { 
      method: 'get', 
      headers: new Headers({
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "1d519ea04amshe22b6632369f71bp1fb181jsn5c70f16d421b",
        "useQueryString": true
      })
      
    }).then(res => res.json()
      
    ).then(json => {
    
      if(json.cod==200){

      this.setState({
        temperature: json.main.temp,
        description: json.weather[0].main,
        humedity: json.main.humidity,
        wind_speed: json.wind.speed,
        city: json.name,
        country: json.sys.country,
        error : null        
      });
    }else{

      this.setState({
        error : 'No existe la ciudad ingresada'   

      })
    }


  });
    
    
    e.preventDefault();
  }
  render() {
    const a = this.state.description
    return (
     
       <header className="App-header">
       <div className="col mx-auto">
         <br></br>
        

       <Form getClima={this.getClima}/>
       <br></br>
       <br></br>
       
       <Info {...this.state}/>
       </div>
     
     </header> 
      
    );
  }
}




export default App;
