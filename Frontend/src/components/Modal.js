import Card from "./Card";
import "./Components.css";
import { useState } from "react";
import EditInvestment from "./EditInvestment";

import InvestInput from "./InvestInput";
const Modal = (props) => {
  const [showEdit , setShowEdit] = useState(false)
  
  let edit;

  if(showEdit){
    edit = "Cancel"
  }
  else{
    edit = "Edit"
  }

  console.log("Modal Rendering")
  if (props.show == null) {
    console.log("Modal is hidden");
    return null;
  }


  return (
    <div className="modal">
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">
      <Card company={props.company} />
     
        <div className="box mt-1">
          {showEdit && <EditInvestment company = {props.company} onClose = {props.onClose} />}
          {!showEdit && <InvestInput />}   
        </div>
        <button className="button is-danger" onClick={props.onClose}>
          Close
        </button>
        <button className="button is-warning ml-3" onClick = {() => setShowEdit(!showEdit)}>
          {edit}
        </button>
      </div>

    </div>
  );
};

export default Modal;
