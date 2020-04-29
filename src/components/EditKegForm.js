import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({name: event.target.name.value, brand: event.target.brand, price: event.target.price, flavor: event.target.flavor, id: event.target.id})
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Keg"/>
    </React.Fragment>
  );
}

export default EditKegForm;

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};