import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../actions';

class UserDetails extends Component {
  componentDidMount() {
    if (!this.props.users[0]) {
      this.props.fetchUsers();
    }
  }
  render() {
    if (this.props.location.state === undefined) {
      // If no news are selected then return to newsList
      this.props.history.replace('/');
      return <></>;
    } else {
      const user = this.props.location.state.selectedUser;
      return (
        <div className="card">
          <div className="card-header">
            {user.first_name + ' ' + user.last_name}
          </div>
          <div className="card-body w-100">
            <div className="row">
              <div className="col-6">
                <p>FirstName:</p>
                <p>LastName:</p>
                <p>City:</p>
                <p>State:</p>
                <p>ZIP:</p>
                <p>Email:</p>
                <p>Web:</p>
                <p>Age:</p>
              </div>
              <div className="col-6 text-right">
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.city}</p>
                <p>{user.state}</p>
                <p>{user.zip}</p>
                <p>{user.email}</p>
                <p>{user.web}</p>
                <p>{user.age}</p>
              </div>
            </div>
            <Link to="/" className="btn btn-primary">
              Go Back
            </Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserDetails);
