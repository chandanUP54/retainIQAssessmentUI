import React, { useState } from "react";
import "./Table.css";
const initialRows = [
  { id: 1, stateName: "1" },
  { id: 2, stateName: "2" },
];

const initialColumns = [
  { id: "variant1", name: "Primary Variant" },
  { id: "variant2", name: "Variant 2" },
];

function Table() {
  const [rows, setRows] = useState(initialRows);
  const [columns, setColumns] = useState(initialColumns);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      stateName: `${rows.length + 1}`,
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (rowId) => {
    setRows(rows.filter((row) => row.id !== rowId));
  };

  const addColumn = () => {
    const newColumnId = `variant${columns.length + 1}`;
    const newColumn = {
      id: newColumnId,
      name: `Variant ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
  };

  const deleteColumn = (columnId) => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  return (
    <div className="container-table">
      <div className="table-div">
        <table className="table-div">
          <thead>
            <tr>
              <th scope="col">State Name</th>
              {columns.map((column) => (
                <th scope="col" key={column.id}>
                  {column.name}
                  <button onClick={() => deleteColumn(column.id)}>
                    Delete
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  {row.stateName}
                  <button onClick={() => deleteRow(row.id)}>Delete</button>
                </td>
                {columns.map((column) => (
                  <td key={`${row.id}-${column.id}`}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={addColumn}>Add  Column</button>
      </div>
      <div>
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
}

export default Table;
