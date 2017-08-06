import React from 'react';
import styles from './styles'
import { css } from 'aphrodite';


const Button = (props) => {
  return (
    <button 
      id={props.id} // used to hold switchModal action type
      className={css(styles.button)} 
      onClick={e=>props.handleClick(e)}
    >
      {props.name}
    </button>
  )  
}

export default Button

// content of the Modal is passed down from parent and rendered to the page