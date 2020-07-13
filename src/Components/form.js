import React from 'react';
import { Card } from 'antd';


class Form extends React.Component{

  constructor(props){
    super(props)

  }  



    render() {
        return (

          <div className="container">
            <div className="row">
            <div className="col"> 
            <div className="card " >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Estado del tiempo</h6>
            <form onSubmit={this.props.getClima}>
  
  <div className="">
    <div className="">
      <label >City</label>
      <input type="text" className="form-control " name="ciudad"  required placeholder="Ciudad"/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
   
  </div>
  <br></br>
  <button className="btn btn-primary btn-block" type="submit" >Buscar</button>
</form>
          </div>
        </div>
            </div>
            </div>
          </div>

      
            
        );
    }
}
  
  export default Form;