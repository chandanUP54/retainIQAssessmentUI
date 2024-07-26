
import React from "react";
import "./Row.css";
import FilterProduct from "./FilterProducts";
import RowComponents from "./RowComponents";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
const Row = ({ row, columns, rows, setRows }) => {
  const deleteRow = (rowId) => {
    setRows(rows.filter((row) => row.id !== rowId));
  };
  return (
    <>
      <tr key={row.id} className="row-tr">
        <td className="row-td ">
          {row.stateName}
          <DragIndicatorOutlinedIcon />
          <DeleteOutlinedIcon onClick={() => deleteRow(row.id)} />
        </td>

        <td className="row-td-filter">
          <FilterProduct />
        </td>

        {columns.map((column) => (
          <td key={`${row.id}-${column.id}`} className="row-td-added">
            <RowComponents />
          </td>
        ))}
      </tr>
    </>
  );
};

export default Row;
