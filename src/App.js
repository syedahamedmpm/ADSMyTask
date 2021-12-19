import React from 'react';
import './App.css';


class App extends React.Component{
constructor(){
	super()
	this.state={
		progressPercentText:0,
		validationErrors:{},
		progressPercent:0
	}
}
handleOnChange = (event)=>{
	this.setState({
		progressPercentText:event.target.value
	})
}
handleOnClick=()=>{
	const{progressPercentText}=this.state
		const errors={}
	if(this.state.progressPercentText>100){
		errors['progressPercentText']='Please Choose Under 100' 
		
		this.setState({
		progressPercent:0,
		validationErrors:errors
	})
	}
	else{
		this.setState({
		progressPercent:this.state.progressPercentText,
		validationErrors:{}
	})
	}
	
}
render(){
	const {progressPercentText:progressPercentTextError}=this.state.validationErrors
return (

<div className="container">
<div className="row">
<div className="col-md-6">
<input type="text" className="form-control"
onChange={this.handleOnChange}
value={this.state.progressPercentText}
/>
<span className="error">{progressPercentTextError}</span>
</div>
<div className="col-md-6">
<button className="btn btn-primary" onClick={this.handleOnClick}>Submit</button>
</div>
</div>
<div className="mt-20">
<div class="progress">
    <div className="progress-bar" role="progressbar" aria-valuenow={this.state.progressPercent} aria-valuemin="0" aria-valuemax="100" style={{width:`${this.state.progressPercent}%`}}>
      <span className="sr-only">{this.state.progressPercent}% Complete</span>
    </div>
  </div>

</div>
</div>
)
}

}
export default App;
