import { useState } from "react";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

function Modal({ toggleModal, formsData, setFormsData }) {
  const [formData, setFormData] = useState({
    id: Math.random(),
    title: "",
    deadline: "",
    status: "",
  });

  function handleChange(e) {
    const { name } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.deadline) {
      toast.error("Please fill the empty inputs.");
    } else if (!formData.status) {
      toast.error("Choose a todo status.");
    } else {
      setFormsData((prevDatas) => [formData, ...prevDatas]);
      toast.success("Item added!");
      toggleModal();
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <FaTimesCircle
          onClick={toggleModal}
          className="close-modal-button"
        ></FaTimesCircle>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Title"
            value={formData.title}
          />
          <input
            name="deadline"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Deadline"
            value={formData.deadline}
          />
          <select
            name="status"
            onChange={handleChange}
            value={formData.status}
            className="input"
          >
            <option selected disabled value="">
              -- Choose --
            </option>
            <option value="ongoing">Ongoing</option>
            <option value="finished">Finished</option>
            <option value="not-started">Not Started</option>
          </select>
          <div>
            <button className="modal-submit-button" type="submit">
              <FaPlusCircle></FaPlusCircle>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
