const initialState = {
	name: 'Johnny Smith',
	address: [
	  '123 Bowl Lane',
    'New York, NY 10021'
	],
	favoriteTeams: ['None Added']
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'CHANGE_NAME':
		  return {
		  	...state,
			 	name: action.name
			}
    case 'CHANGE_ADDRESS':
      let address = [...state.address]
      Object.keys(action.address).forEach((key, idx) => {
        if (action.address[key]) {address[idx] = action.address[key]} // Only changes the specific address line that is edited
      })
      return {
      	...state,
			 	address: address
			}
    case 'ADD_TEAMS':
      if (state.favoriteTeams[0] === 'None Added') {
      	return {
      		...state,
			 	  favoriteTeams: [ // removes the default team item from initial state
            ...action.teams
			 	  ]
      	}
      }
      return {
      	...state,
			 	favoriteTeams: [
          ...state.favoriteTeams,
          action.teams
			 	]
			}
		default:
		  return state;
	}
}