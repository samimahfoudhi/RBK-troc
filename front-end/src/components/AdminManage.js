import React from "react";

const AdminManage = (props) => {
  return (
    <div>
      <p>{props.e.email}</p>
      <button>delete</button>
    </div>
  );
};

export default AdminManage;
