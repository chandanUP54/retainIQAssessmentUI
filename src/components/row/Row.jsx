import React, { useContext, useState } from "react";
import "./Row.css";
import FilterProduct from "./FilterProducts";
import RowComponents from "./RowComponents";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import { UserContext } from "../contexts/UserContext";

const Row = ({ row, columns, rows, setRows, setColumns }) => {
  const { msg, setMsg } = useContext(UserContext);

  const deleteRow = (rowId) => {
    setRows(rows.filter((row) => row.id !== rowId));
    setMsg("state remove");
  };

  const addColumn = () => {
    const newColumnId = `variant${columns.length + 1}`;
    const newColumn = {
      id: newColumnId,
      name: `Variant ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
    setMsg("varient added");
  };

  return (
    <>
      <tr key={row.id} className="row-tr">
        <td className="row-td ">
          <h2> {row.stateName}</h2>
          <DragIndicatorOutlinedIcon className="row-td-drag" />
          <DeleteOutlinedIcon
            onClick={() => deleteRow(row.id)}
            className="row-td-delete"
          />
        </td>

        <td className="row-td-filter">
          <FilterProduct />
        </td>

        {columns.map((column) => (
          <td key={`${row.id}-${column.id}`} className="row-td-added">
            <RowComponents />
          </td>
        ))}
        <td>
          <button onClick={addColumn}>
            {" "}
            <AddTwoToneIcon />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Row;
