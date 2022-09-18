import { FaPlusSquare } from "react-icons/fa";
import React, { useState } from "react";

function ModalButton({ toggleModal }) {
  return (
    <div onClick={toggleModal} className="modal-button">
      <span className="plus-button">Add</span>
      <FaPlusSquare className="plus-button"></FaPlusSquare>
    </div>
  );
}

export default ModalButton;
