import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';


class About extends React.Component {
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
          <p> <b> The idea of the What to Do.</b> People often don't know what they want to do. And if somebody could just tell them what to do - the satisfaction guaranteed!  </p>

  <p> <b> How does it work? </b> When user clicks on button 'What to do' (or the logo 'What to do'), a randomly selected task is presented for him/her on the screen. Try it out (you click and it works). </p>

  <p> <b> What are the options? </b> So generally, there are 2 options - to do the generated task or to ask for something else. And later - to create private profile and <em> to do</em> tasks.</p>





        </main>
        <footer className="footer">
          <p>&copy; 2017 Haralds</p>
        </footer>
      </div>
    );
  }
}

export default About;
