import React from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
const RowComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background:"white",padding:"8px",borderRadius:"5px"}}>
        <AddTwoToneIcon />
      </div>
    </div>
  );
};

export default RowComponents;
