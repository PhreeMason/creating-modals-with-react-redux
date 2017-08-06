import React from 'react'
import Modal from '../Modal'
import Form from '../Form'
import {closeModal} from '../redux/modules/modals/actions'
import {changeAddress} from '../redux/modules/settings/actions'
import {connect} from 'react-redux'

class AddressForm extends React.Component {

  constructor() {
    super();
    this.state={
    	Line_1: '',
    	Line_2: ''
    }
  }
  
  handleChange = (e) =>{
  	const name = e.target.name  // a nice easy way to edit state when more than one key is present
    this.setState({
    	[name]: e.target.value  
    })
  }

  save = () => {
    if (this.state['Line_1'] || this.state['Line_2']) { // only changes the store if the state changes
      this.props.changeAddress(this.state)  
    } 

    this.props.closeModal()
  }

  render() {
		return (
		  <Modal 
  		  save={this.save}
  		  closeModal={this.props.closeModal} 
  		  content={
		  	<Form 
			  	fields={Object.keys(this.state)}
			  	title="Edit Address"
			  	handleChange={this.handleChange}
		  	/>
		  }/>   
		) 
  }
}

export default connect(null, {closeModal, changeAddress})(AddressForm)