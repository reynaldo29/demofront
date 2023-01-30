import { useState, useEffect } from "react";
import Card from "./components/PeopleCards";
import CreateButtom from "./components/CreateButtom";
import Modal2 from "./components/Modal";
import { get } from "./services";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [modal, setModal] = useState(false);

  async function getPeople() {
    const people = await get("/people");
    setPeople(people.data);
  }

  useEffect(() => {
    getPeople();
  });

  return (
    <>
      <CreateButtom setModal={setModal}/>
      {modal === true && <Modal2 setModal={setModal}/>}
      <br></br>
      <Card people={people} />
    </>
  );
}

export default App;
