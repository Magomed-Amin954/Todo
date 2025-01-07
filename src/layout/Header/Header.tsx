import image from '../../assets/Layer 1.png'
import AddTodo from '../../components/AddTodo/AddTodo';
import './Header.scss'


const Header = () => {
  return (
    <div className="Header"> 
    <div className="Header-Container">
        <img className="Header-img" src={image}/>
        <h1 className="Header-Todo">todo </h1>
        <div className="Header-Name">by unicode </div>
    </div>
    </div>
  );
};

export default Header;
