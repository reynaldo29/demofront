import "./modal.css";
import { useState } from "react";
import { post } from "../../services";

const Modal2 = ({ setModal }) => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const handler = (e) => {
    const { name, value } = e.target;
    {
      name == "age"
        ? setData({
            ...data,
            [name]: Number(value),
          })
        : setData({
            ...data,
            [name]: value,
          });
    }

    console.log(data);
  };

  const handleOnSubmit = async () => {
    const response = await post("/people", data);
    console.log("hey", response);
    handleOpen();
  };

  return (
    <div className="backshadow">
      <div className="modal">
        <div onClick={() => setModal(false)} className="delete-icon">
          x
        </div>
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="name" onChange={handler} />
          <br />
          <input type="number" name="age" onChange={handler} />
          <br />
          <button type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal2;
