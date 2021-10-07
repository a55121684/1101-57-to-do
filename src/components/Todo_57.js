/* eslint-disable */
import React, { useState } from "react";
import Backdrop_57 from "./Backdrop_57";
import Modal_57 from "./Modal_57";

function Todo_57(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button
            className="btn"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {showModal ? (
        <div>
          <Modal_57
            text="Are you sure??"
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Backdrop_57 setShowModal={setShowModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Todo_57;
