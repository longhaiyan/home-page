import React from 'react';
import styles from './nav.css';
import classNames from 'classnames';
class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  handleClick(){
    this.setState({
      avatarClick: true
    })
  }
  render (){
    return (
      <div>
        
      </div>
    )
  }
}

export default Nav;