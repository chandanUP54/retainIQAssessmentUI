// Row.js
import React from 'react';

const Row = ({ data, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.value}</td>
      <td>
        <button onClick={() => onEdit(data.id)}>Edit</button>
        <button onClick={() => onDelete(data.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
