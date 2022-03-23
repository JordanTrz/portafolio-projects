import './header.css';
import { Button } from '../1-1_button/button';
import { Cart } from '../1-2_cart/cart';

function Header(props){
  // const {
  //   children
  // } = props;
  return(
  <header>
    <h1>Shopping Car</h1>
    <div>
      <Button />
      <Cart />
    </div>
  </header>
  )
}

export { Header };