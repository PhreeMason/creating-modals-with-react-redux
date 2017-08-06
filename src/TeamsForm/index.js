import React from 'react'
import Modal from '../Modal'
import Form from '../Form'
import {closeModal} from '../redux/modules/modals/actions'
import {changeTeams} from '../redux/modules/settings/actions'
import {connect} from 'react-redux'

class TeamsForm extends React.Component {

  constructor() {
    super();
    this.state={
      Team_Name: '',
    }
  }
  
  handleChange = (e) =>{
  	const name = e.target.name
    this.setState({
    	[name]: e.target.value
    })
  }

  save = () => {
    const teams = [this.state['Team_Name']]
    if (teams[0]) {this.props.changeTeams(teams)} // will only dispatch an action to the store if the state changes
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
			  	title="Add Teams"
			  	handleChange={this.handleChange}
		  	/>
		  }/>   
		) 
  }
}

export default connect(null, {closeModal, changeTeams})(TeamsForm)