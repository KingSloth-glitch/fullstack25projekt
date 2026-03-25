import React from 'react';

class userProfile extends React.component {
    render() {
        const { name, email, bio } = this.props;
    
    return (
        <div>
            <h2>{name}</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Bio:</strong> {bio}</p>
        </div>
    );
  }
}

export default userProfile;
