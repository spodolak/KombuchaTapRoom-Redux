import React from "react";
import ReusableForm from "./ReuseableForm";
import { v4 } from 'uuid';
 
function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand, price: event.target.price, flavor: event.target.flavor});
  }

  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

export default NewKegForm;