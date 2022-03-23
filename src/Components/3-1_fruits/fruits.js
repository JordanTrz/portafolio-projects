import "./fruits.css";
import { Add } from '../3-2_add/add';
import Fruta from '../img/fruit.png';

function Fruits(props){
  let {name,price,stock} = props;
  return(
    <div className="Fruits">
      <img src={Fruta} alt="Fruta"/>
      <p>{name}</p>
      <p className="pNewColor">Kilo S/ {price}</p>
      <p>{stock}</p>
      <Add/>
    </div>
  )
}

export { Fruits }