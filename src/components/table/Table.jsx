import React, { useContext, useState } from "react";
import "./Table.css";
import Row from "../row/Row";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

import { UserContext } from "../contexts/UserContext";
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
  const {msg,setMsg}=useContext(UserContext)
  const [columns, setColumns] = useState(initialColumns);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      stateName: `${rows.length + 1}`,
    };
    setRows([...rows, newRow]);
    setMsg("state added")
   
  };

  const deleteColumn = (columnId) => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  return (
    <div className="container-table">
    

      <div className="table-wrap">
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th className="empthy-th"></th>
                <th className="product-filter-th">Product Filter</th>
                {columns.map((column) => (
                  <th key={column.id} className="items-th">
                    <div className="item-th-column">
                      {column.name}
                      <MoreVertIcon />
                    </div>

                    {/* <MoreVertIcon onClick={() => deleteColumn(column.id)} /> */}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <Row
                  key={row.id}
                  row={row}
                  rows={rows}
                  setRows={setRows}
                  columns={columns}
                  setColumns={setColumns}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-button">
          <button onClick={addRow}>
            <AddTwoToneIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
