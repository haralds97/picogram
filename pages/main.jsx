import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name=""/>
        </header>
        <p >  <Link to="/theanswer"> click to find out! </Link> </p>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />

        </main>
        <footer className="footer">
          <p>&copy; 2017 Haralds</p>
        </footer>
      </div>
    );
  }
}

export default Main;
