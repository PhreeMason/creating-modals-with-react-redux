import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  backgroundOverlay: {
  	position: 'absolute',
  	bottom: '0px',
  	left: '0px',
  	width: '100%', // ensures the entire screen is grey
  	height: '100%', // ensures the entire screen is grey
  	zIndex: '50', // places the overlay above all elements on screen
    backgroundColor: 'rgba(0,0,0,0.5)', // makes screen grey but transparent so that elements behindd can be seen
  },
  
  modal: {
    minWidth: '100px',
    minHeight: '100px',
    position: 'absolute',
    top: '50%',  // positions modal in the center of screen
    left: '50%', // positions modal in the center of screen
    zIndex: '100',
    transform: 'translate(-50%, -50%)', // centers the modal
    border: 'solid 1px black',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: 'white',
  },

  close: {
    position: 'absolute',
    top: '1%', // places button at top right
    right: '2%', // places button at top right
    display: 'block'
  },

  exit: {
    color: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#358df2'
  },

  buttons: {
    postion: 'absolute',
    bottom: '0px'
  }

});

export default styles