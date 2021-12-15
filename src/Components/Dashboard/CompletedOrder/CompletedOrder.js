import React from "react";
import "./CompletedOrder.css";

const CompletedOrder = ({ completedOrder }) => {
  const { name, email, serviceName, servicePrice, date } = completedOrder;

  return (
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{serviceName}</td>
          <td>${servicePrice}</td>
          <td>{date}</td>
          <td style={{ color: "green" }}>Completed</td>
        </tr>
      </tbody>
  );
};

export default CompletedOrder;
