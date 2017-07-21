import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Todolist from '../components/todolist'


class Theanswer extends React.Component {
  runAlert() {
    alert("The idea of the method - you don't have to choose!  \n \nSo - go back and do the thing.");
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name=""/>
        </header>
        <main className="content">
          <div className="centered">
                <Todolist />
                <button onClick={this.runAlert}> not happy? press this! </button>
          </div>
        </main>
        <footer className="footer">
          <p>&copy; 2017 Haralds</p>
        </footer>
      </div>
    );
  }
}

export default Theanswer;
