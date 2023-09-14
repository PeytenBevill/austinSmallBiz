import React, { Component, Fragment } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';

class AddListing extends Component {
  state = {
    bizName: '',
    address: '',
    hours: '',
    description: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    delete payload.open;
    console.log('THE LISTING', payload);

    this.props.addListing(payload);

    // Also, call the togglePopup function from props to close the popup
    this.props.togglePopup();
  };

  render() {
    return (
      <Dialog open={this.props.isPopupOpen} onClose={this.props.togglePopup}>
        <DialogTitle>Add New Listing</DialogTitle>
        <DialogContent>
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '350px',
            }}
          >
            <TextField
              id="bizName"
              placeholder="Name"
              value={this.state.bizName}
              onChange={(e) => this.setState({ bizName: e.target.value })}
              required
            />
            <TextField
              id="address"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
              required
            />
            <TextField
              id="hours"
              placeholder="Hours"
              value={this.state.hours}
              onChange={(e) => this.setState({ hours: e.target.value })}
              required
            />
            <TextField
              id="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              required
            />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

export default AddListing;
