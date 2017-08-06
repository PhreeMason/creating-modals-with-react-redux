import React, { Component } from 'react';
import './App.css';
import AddressForm from './AddressForm'
import TeamsForm from './TeamsForm'
import NameForm from './NameForm'
import {connect} from 'react-redux'
import {switchModalType} from './redux/modules/modals/actions'
import Button from './Button'

/* places the three types of Modals inside of an object. This object is used
to switch between modals.
*/
const modals = {
  address: <AddressForm/>,
  teams: <TeamsForm/>,
  name: <NameForm/>
}


class App extends Component {

  switchModal= (e) =>{
    e.preventDefault()
    this.props.switchModalType(e.target.id)  // grabs the action type from the button and used for dispatch
  }

  render() {
    
    const {settings, currentModal} = this.props 
    // grabs the current settings and Modal from the props, which is taken from store

    return (
      <div>
        <div className="App">
          {currentModal ? 
            modals[currentModal] : null // no modal is rendered if currentModal is set to null
          }
          <div className="App-header">
            <h1>Sports Magazine</h1>
          </div>

          <div className="App-content">

            <h2>Sports Magazine Settings</h2>
          </div>

          <div className="App-content">
            <div className='button'>
              <Button id='NAME_MODAL' name='Edit Name' handleClick={this.switchModal}/>
            </div>   
            <p><b>Name</b></p>
            <p>{settings.name}</p>
          </div>

           <div className="App-content">
            <div className='button'>
              <Button id='ADDRESS_MODAL' name='Edit Address' handleClick={this.switchModal}/>
            </div>
            <p><b>Address</b></p>
            {settings.address.map((line, i)=><p key={'addLine_'+i}>{line}</p>)}
          </div>

           <div className="App-content">
            <div className='button'>
              <Button id='TEAMS_MODAL' name='Add Teams' handleClick={this.switchModal}/>
            </div>
            <p><b>Favorite Teams</b></p>
            {settings.favoriteTeams.map((team, i)=><p key={'team__'+i}>{team}</p>)}
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    currentModal: state.modals.currentModal // adds the current state to the app
  }
}

export default connect(mapStateToProps, {switchModalType}) (App); // connects the switchModalType action to store so it can utilize the dispatch function
