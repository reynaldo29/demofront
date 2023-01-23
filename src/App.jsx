import { useState, useEffect } from "react";
import Card from "./components/PeopleCards";
import { get } from "./services";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  async function getPeople() {
    const people = await get("/people");
    console.log(people.data)
    setPeople(people.data);
  }

  useEffect(() => {
    getPeople();
  });

  return (
    <div>
      <Card people={people} />
    </div>
  );
}

export default App;
