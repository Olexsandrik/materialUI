import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("./../public/api/users.json")
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.log("Error:", e));
  }, []);

  console.log(user);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default App;
