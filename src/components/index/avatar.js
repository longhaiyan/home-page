import React from 'react';
import styles from './avatar.css';
import classNames from 'classnames';
class Avatar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      avatarClick: false
    }
  }

  handleClick(){
    this.setState({
      avatarClick: true
    })
  }
  render (){
    return (
      <div className={classNames(styles.avatar, {
        [styles.avatarAnimate]: this.state.avatarClick
      })} onClick={(e)=>this.handleClick()}></div>
    )
  }
}

export default Avatar;