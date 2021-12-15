import React from "react";

const ConfirmedOrder = ({ confirmedOrder }) => {
  const { name, email, serviceName, servicePrice, date } = confirmedOrder;
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{serviceName}</td>
        <td>${servicePrice}</td>
        <td>{date}</td>
        <td style={{ color: "green" }}>Confirmed</td>
      </tr>
    </tbody>
  );
};

export default ConfirmedOrder;
