const changeAddressType = (address) =>{
  return {
  	type: 'CHANGE_ADDRESS',
  	address: address
  }
}

const changeTeamsType = (teams) =>{
  return {
  	type: 'ADD_TEAMS',
  	teams: teams
  }
}

const changeNameType = (name) =>{
  return {
  	type: 'CHANGE_NAME',
  	name: name
  }
}


export const changeName = (name) =>{
	return dispatch=>{
    dispatch(changeNameType(name))
	}
}

export const changeTeams = (teams) =>{
	return dispatch=>{
    dispatch(changeTeamsType(teams))
	}
}

export const changeAddress = (address) =>{
	return dispatch=>{
    dispatch(changeAddressType(address))
	}
}