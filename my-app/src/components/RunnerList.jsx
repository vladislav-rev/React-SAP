import React from "react";

const RunnerList = (props) => {
  const { usersList } = props;
  return (
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
          {usersList.length > 0 ? (
            usersList.map((user) => (
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
  );
};

export default RunnerList;
