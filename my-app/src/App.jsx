import React, { useState } from "react";
import RunnerForm from "./components/RunnerForm";
import RunnerList from "./components/RunnerList";
function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      date: "11.03.1987",
      name: "Куклина Мария Ивановна",
      email: "kyklina@mail.ru",
      phone: "+79223625999",
      distance: "5km",
      payment: 500,
    },
    {
      id: 2,
      date: "8.05.1997",
      name: "Мокрушина Галина Юрьевна",
      email: "mokrushina@mail.ru",
      phone: "+79881125999",
      distance: "10km",
      payment: 300,
    },
    {
      id: 3,
      date: "24.01.1986",
      name: "Ольга Сергеевна Заводская",
      email: "olga.zavodckaia@mail.ru",
      phone: "+79008011000",
      distance: "3km",
      payment: 1500,
    },
  ]);
  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  return (
    <div className="wrapper">
      <RunnerForm handleSubmit={addUser} />
      <RunnerList usersList={users} />
    </div>
  );
}

export default App;
