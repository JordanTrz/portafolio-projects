import "./add.css";

function Add(){
  return(
    <div className="addButton">
        <button className="button btn-1">-</button>
      <div className="Number">
        <p>0</p>
      </div>
        <button className="button btn-2">+</button>
    </div>
  )
}

export { Add }