import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../Burger-menu';
import "./styles.scss"

const Header = () => {
  return (
    <header className='header'>
      <BurgerMenu />

      <h1 className='title'>La bibliothèque fantastique de Maggie</h1>

      <p>Texte en test</p>


    </header>
  );
};

export default Header;
