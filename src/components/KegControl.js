import React from 'react';
import NewKegForm from './NewKegForm';
import KegThumbnailList from './KegThumbnailList';
import KegDetails from './KegDetails'

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Strawberry",
          brand: "Topsy Turvy",
          price: "$.99",
          flavor: "Strawberry",
        },
        {
          name: "Banana",
          brand: "Topsy Turvy",
          price: "$.99",
          flavor: "Strawberry",
        },
        {
          name: "Kiwi",
          brand: "Topsy Turvy",
          price: "$.99",
          flavor: "Strawberry",
        },
      ],
      selectedKeg: null, 
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg})
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleDeletingTicket = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedTicket: null
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingTicket} />
      buttonText="Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegThumbnailList kegList = {this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick ={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;