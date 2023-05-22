import React from 'react';

class PartyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Make your party fun!</h1>
        <p>Create your own custom playlist today.</p>
        <button style= {{ backgroundColor: '#ff9900' }}>Create Playlist</button>
      </div>
    );
  }
}

export default PartyComponent;
