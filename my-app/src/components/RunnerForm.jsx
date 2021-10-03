import React, { useState } from "react";

const RunnerForm = (props) => {
  const { handleSubmit } = props;
  const [currentAddUser, setCurrentAddUser] = useState({
    id: 0,
    date: 0,
    name: "",
    email: "",
    phone: "",
    distance: 0,
    payment: 0,
  });
  const handleInputChange = (e) => {
    setCurrentAddUser({
      ...currentAddUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    handleSubmit(currentAddUser);
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
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
      <input type="number" name="payment" onChange={handleInputChange}></input>
      <button type="submit">Отправить заявку</button>
    </form>
  );
};

export default RunnerForm;
