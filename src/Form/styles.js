import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  form: {
  	maxWidth: '500px',
    padding: '20px 12px 10px 20px',
    color: 'grey',
  },
  
  heading: {
    marginBottom: '10px',
    paddingBottom: '3px',
  },

  item: {
    display: 'block',
    margin: '0px 0px 15px 0px',
  }, 

  span: {
    width: '100px',
    float: 'left',
    paddingTop: '8px',
    paddingRight: '5px',
  },

  input:{
  	width: '50%',
  	boxSizing: 'border-box',
    border: '1px solid #C2C2C2',
    boxShadow: '1px 1px 4px #EBEBEB',
    borderRadius: '3px',
    padding: '7px',
    outline: 'none'
  }
 
});

export default styles

