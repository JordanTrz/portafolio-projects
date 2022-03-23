import './main.css';

function Main(props){
  const {children} = props
  return(
    <div>
      <h2 className="nameProducto">Productos</h2>
      <main>{children}</main>
    </div>
  )
}

export { Main }