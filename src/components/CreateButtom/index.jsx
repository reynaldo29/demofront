import "./buttom.css";

const ButtomCreate = ({setModal}) => {
    return(
        <div onClick={()=>setModal(true)} className="buttom">
            Crear
        </div>
    
    )
}

export default ButtomCreate