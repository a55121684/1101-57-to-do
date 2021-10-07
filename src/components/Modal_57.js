import React from "react";

export default function Modal_57(props) {
  return (
    <div>
      <div class="modal">
        <p>{props.text}</p>
        <button
          class="btn btn--alt"
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          Cancel
        </button>
        <button
          class="btn"
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
