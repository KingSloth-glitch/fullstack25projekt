


import React from 'react';
import UserProfile from './username';

class app extends React.Component {
  render() {
    return (
      <div>
        <UserProfile
          name = "Jane Doe"
          email = "jane.doe@example.com"
          bio = "Software developer passionate about creating intuitive user experiences."
        />
      </div>
    );
  }
}

export default app;