import React from 'react'
import styles from './styles'
import { css } from 'aphrodite';

const Form = (props) =>{
  return( 
	 	<form onSubmit={e=>e.preventDefault()} className={css(styles.form)} >

	 	  <div className={css(styles.heading)}>
	 	    <h3>{props.title}</h3>
	 	  </div>

      {props.fields.map((field, i) =>
			  <div key={i} className={css(styles.rows)}>
		      <label className={css(styles.item)} htmlFor={field}>
			      <span className={css(styles.span)}>{field.replace("_", " ")} </span>
			      <input
			        className={css(styles.input)} 
			        type="text" 
			        id={field} 
			        name={field} onChange={props.handleChange} 
			      />
		      </label>
			  </div>
			)}
	  </form>
  )
}

export default Form