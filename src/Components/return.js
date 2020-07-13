import React from 'react';


const Info = props =>{
    console.log(props)
    const a = props.temperature
    if(a!=''){
    return(

       
        <div class="card border-primary mb-3 text-dark" >
        <div class="card-header">{props.country}</div>
        <div class="card-body">
          <h4 class="card-title">{props.city}</h4>
          <p class="card-text">
          Humedad :  {props.humedity}  <br></br>
        Temperatura:  {props.temperature} °C<br></br>
        Velocidad del viento:  {props.wind_speed}<br></br>
              </p>
        </div>
      </div>

      
    )
}else{
    return(
        <div>

        </div>
    )
}
}
export default Info;