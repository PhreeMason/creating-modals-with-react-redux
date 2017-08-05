import React from 'react';
import styles from './styles'
import { css } from 'aphrodite';


export default class Modal extends React.Component {

  render() {
    return (
      <div className={css(styles.backgroundOverlay)} >
      	<div className={css(styles.modal)}>
          <p className={css(styles.close)} >
            close <button className={css(styles.exit)}> x </button>
          </p>
          {this.props.content}
      	</div>
      </div>
    );
  }
}