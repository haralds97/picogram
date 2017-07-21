import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';


class Error extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name=""/>
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          Page not found - error
        </main>
        <footer className="footer">
          <p>&copy; 2017 Janis</p>
        </footer>
      </div>
    );
  }
}

export default Error;
