import React, { Component } from 'react';

import SideBar from '../SideBar/SideBar';


class Layout extends Component {

  state = {
    fold: false
  }

  fold = () => {
    console.log(this.state.fold)
    this.setState(prevState => ({
      fold: !prevState.fold
    }))
  }

  render() {
    const foldClass = ['app__dashboard', this.state.fold? "app__fold" : null]
    return (
      <div className="app">
        <div className="app__header">
        </div>
        <div className="app__body">
          <div className={foldClass.join(" ")}>
            <SideBar show={this.state.fold} onclick={this.fold} />
          </div>
          <div className="app__content">
            {this.props.children}
          </div>                   
        </div>
      </div>
    );
  }
}

export default Layout;
