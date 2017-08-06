import React from 'react'
import Modal from '../Modal'
import Form from '../Form'
import {closeModal} from '../redux/modules/modals/actions'
import {changeName} from '../redux/modules/settings/actions'
import {connect} from 'react-redux'

class NameForm extends React.Component {

  constructor() {
    super();
    this.state={
      name: ''
    }
  }
  
  handleChange = (e) =>{
  	const name = e.target.name
    this.setState({
    	[name]: e.target.value
    })
  }

  save = () => {
    if (this.state.name) {this.props.changeName(this.state.name)} // only changes the store if the state changes
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
			  	title="Edit Name"
			  	handleChange={this.handleChange}
		  	/>
		  }/>   
		) 
  }
}

export default connect(null, {closeModal, changeName})(NameForm)