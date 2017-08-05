const initialState = {
	currentModal: null,

}

export default (state = initialState, action) => {
	switch(action.type){
		case 'NAME_MODAL':
		  return {
			 	currentModal: "name"
			}
    case 'ADDRESS_MODAL':
      return {
			 	currentModal: "address"
			}
    case 'TEAMS_MODAL':
      return {
			 	currentModal: "teams"
			}
    case 'CLOSE_MODAL':
		  return {
			 	currentModal: null
			}
		default:
		  return state;
	}
}