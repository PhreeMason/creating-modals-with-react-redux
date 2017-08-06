const actionTypes = ['NAME_MODAL', 'ADDRESS_MODAL', 'TEAMS_MODAL', 'CLOSE_MODAL'] // list of actiontype to validate dispatch argument

const closeModalType = () => ({type: 'CLOSE_MODAL'})


export const closeModal = () =>{
	return dispatch=>{
    dispatch(closeModalType())
	}
}

export const switchModalType = (type) =>{
	return dispatch =>{
		if (actionTypes.includes(type)) {dispatch({type: type})} // ensure that users can't change action from client side
	}
}