import React from "react";
import Modal from "./Modal";

const StreamDelete = () => {
  const actions = (<div className="actions">
    <button className="ui primary button">Delete</button>
    <button className="ui button">Cancel</button>
  </div>);

  return (
    <div>
      StreamDelete
      <Modal title="Delete Stream" content="Are you sure you want to delete this stream?" actions={actions}/>
    </div>
  );
};

export default StreamDelete;
