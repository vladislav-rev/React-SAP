import React, { useState } from "react";

import usersObject from "./users.json";

function App() {
  const [runners, setRunners] = useState(usersObject.users);

  const [currentAddUser, setCurrentAddUser] = useState({
    id: 0,
    date: 0,
    name: "",
    email: "",
    phone: "",
    distance: 0,
    payment: 0,
  });

  const addUser = (e) => {
    e.preventDefault();

    let max = 0;
    runners.forEach((runner) => {
      if (runner.id > max) {
        max = runner.id;
      }
    });
    let userToAdd = currentAddUser;
    userToAdd.id = max + 1;

    setRunners([...runners, userToAdd]);
  };

  const handleInputChange = (e) => {
    setCurrentAddUser({
      ...currentAddUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={addUser}>
        <h2>Заявка на участие</h2>
        <p>ФИО</p>
        <input name="name" type="text" onChange={handleInputChange} />
        <p>Дата рождения</p>
        <input type="date" name="date" onChange={handleInputChange}></input>
        <p>Email</p>
        <input
          required
          type="email"
          name="email"
          placeholder="email@mail.ru"
          onChange={handleInputChange}
        ></input>
        <p>Телефон</p>
        <input
          id="online_phone"
          type="tel"
          name="phone"
          placeholder="+7 (999) 99-99-999"
          onChange={handleInputChange}
        ></input>
        <p>
          Дистанция -
          <select name="distance" onChange={handleInputChange}>
            <option defaultValue value="3km">
              3 км
            </option>
            <option value="5km">5 км</option>
            <option value="10km">10 км</option>
          </select>
        </p>
        <p>Сумма взноса, руб</p>
        <input
          type="number"
          name="payment"
          onChange={handleInputChange}
        ></input>
        <button type="submit">Отправить заявку</button>
      </form>
      <div className="tableRunners">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Distance</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {runners.length > 0 ? (
              runners.map((user) => (
                <tr key={user.id}>
                  <td>{user.date}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.distance}</td>
                  <td>{user.payment}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
