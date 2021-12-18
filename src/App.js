import React from 'react';
import './App.css';
import { Progress,Button } from 'reactstrap';


class App extends React.Component{
constructor(){
	super()
	this.state={
		progressPercentText:0,
		validationErrors:{}
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
		progressPercent:'',
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
<Button color="primary" onClick={this.handleOnClick}k>Submit</Button>
</div>
</div>
<div className="mt-20">
<Progress
  animated
  value={this.state.progressPercent}
/>

</div>
</div>
)
}

}
export default App;
