import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';


class App extends React.Component {
  state = {
    pendingGuest: '',
    isFiltered: false,
    guests: [
      {
        name: "Tanjiro",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Luffy",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Deku",
        isConfirmed: true,
        isEditing: false
      }
    ]
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () => 
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e => 
    this.setState({ pendingGuest: e.target.value });
  
  addNewGuest = e => {
    e.preventDefault();
    let newGuest = {
      name:this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false,
    }
    this.setState( prevState => ({
      guests: [newGuest, ...prevState.guests],
      pendingGuest: ''
    }));
  }

  removeGuestAt = index => 
    this.setState( prevState =>({
      guests: [
        ...prevState.guests.slice(0, index),
        ...prevState.guests.slice(index + 1),
      ],
    }))

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => 
    this.state.guests.reduce((total, guest) => guest.isConfirmed? total + 1 : total, 
    0);

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          addNewGuest={this.addNewGuest}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
