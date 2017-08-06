import React from 'react';
import styles from './styles'
import { css } from 'aphrodite';
import Button from '../Button'


export default class Modal extends React.Component {

  componentDidMount() {
    console.log(this.proptype)
  }
  
  exit=(event) =>{
    event.preventDefault()
    this.props.closeModal() // function that dispatched the close Modal action 
  }

  render() {
    return (
      <div className={css(styles.backgroundOverlay)} >
      	<div className={css(styles.modal)}>
          <p className={css(styles.close)} >
            close <button onClick={e => this.exit(e)} className={css(styles.exit)}> x </button>
          </p>
          {this.props.content}
          <Button handleClick={this.exit} name='Cancel'/> <Button handleClick={this.props.save} name='Save'/>
      	</div>
      </div>
    );
  }
}
// content of the Modal is passed down from parent and rendered to the page