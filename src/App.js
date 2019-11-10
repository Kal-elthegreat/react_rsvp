import React from 'react';
import GuestList from './components/GuestList';
import Counter from './components/Counter';


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
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.addNewGuest}>
            <input
              type="text"
              onChange={this.handleNameInput}
              value={this.state.pendingGuest}
              placeholder="Invite Someone"
            />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />{" "}
              Hide those who haven't responded
            </label>
          </div>
          <Counter
          totalInvited={totalInvited}
          numberAttending={numberAttending} 
          numberUnconfirmed={numberUnconfirmed}
          />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
