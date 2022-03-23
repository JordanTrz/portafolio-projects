// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'; // importado librería react
import ReactDOM from 'react-dom'; // importador funcionalidad para renderizar elementos en el virtual dom
import "./index.css";
import { Header } from './Components/1_header/header';
import { Main } from './Components/2_main/main';
import { Fruits } from './Components/3-1_fruits/fruits';
import { Footer } from './Components/3_footer/footer';

const Frutas = [{
  name : "Naranja Huando",
  price : "2.50",
  stock : 10
},
{
  name : "Platano",
  price : "3.50",
  stock : 10
},
{
  name : "Mandarina",
  price : "4.50",
  stock : 10
},
{
  name : "Cereza",
  price : "2.50",
  stock : 10
},
{
  name : "Sandría",
  price : "50",
  stock : 10
},
{
  name : "Mango",
  price : "14.50",
  stock : 10
},
{
  name : "Naranja Huando",
  price : "1.50",
  stock : 10
},
{
  name : "Naranja Huando",
  price : "1.50",
  stock : 10
},
{
  name : "Naranja Huando",
  stock : 10
},
]

function App(){
  return(
    <div className="globalWrapper">
      <Header />
      <Main>
        {Frutas.map((fruta) => {
          return <Fruits name={fruta.name} price={fruta.price} stock={fruta.stock} />
        })}
      </Main>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))