import React from "react";

export default function Backdrop_57(props) {
  return (
    <div>
      <div
        class="backdrop"
        onClick={() => {
          props.setShowModal(false);
        }}
      ></div>
    </div>
  );
}
