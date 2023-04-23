import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './styles.scss'

const BurgerMenu = () => {

    // NOTE: Pour modifier le style du menu :  https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <Link id="home" className="menu-item" to="/">Accueil</Link >
        <Link id="blog" className="menu-item" to="/blog">Blog</Link >
        <Link id="podcast" className="menu-item" to="/podcast">Podcast</Link >
        <Link id="about" className="menu-item" to="/about">À Propos de moi</Link >
        <Link id="contact" className="menu-item" to="/contact">Contact</Link >
      </Menu>
    );
  }

export default BurgerMenu;