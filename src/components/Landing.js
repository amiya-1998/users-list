import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../actions';

import Pagination from './Pagination';

class Landing extends Component {
  state = {
    search: '',
    pageOfItems: []
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  indexHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => a['id'] - b['id'])
      ];
    });
  };

  ageHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => a['age'] - b['age'])
      ];
    });
    // this.props.sortUsers(this.props.users[0], 'age');
  };

  zipHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => a['zip'] - b['zip'])
      ];
    });
  };

  firstnameHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['first_name'] < b['first_name']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  lastnameHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['last_name'] < b['last_name']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  companyNameHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['company_name'] < b['company_name']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  cityHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['city'] < b['city']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  stateHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['state'] < b['state']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  emailHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['email'] < b['email']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  webHandler = () => {
    this.setState(state => {
      return [
        state.search,
        state.pageOfItems.sort((a, b) => {
          if (a['web'] < b['web']) {
            return -1;
          }
          return 1;
        })
      ];
    });
  };

  updateSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  onChangePage = pageOfItems => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    const users = this.props.users[0];
    if (this.state.search && this.state.search.length >= 2) {
      var filteredUser = users.filter(user => {
        let first_name = user.first_name.toLowerCase();
        return first_name.indexOf(this.state.search.toLowerCase()) !== -1;
      });
    }

    return (
      <div>
        <input
          type="text"
          className="form-control mb-3"
          value={this.state.search}
          onChange={this.updateSearch}
          placeholder="Search By First Name"
        />
        <table className="table table-bordered" style={{ fontSize: '13px' }}>
          <thead>
            <tr>
              <th scope="col">
                <button className="btn bg-white" onClick={this.indexHandler}>
                  User ID
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn bg-white"
                  onClick={this.firstnameHandler}
                >
                  First Name
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.lastnameHandler}>
                  Last Name
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn bg-white"
                  onClick={this.companyNameHandler}
                >
                  Company Name
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.cityHandler}>
                  City
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.stateHandler}>
                  State
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.zipHandler}>
                  Zip
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.emailHandler}>
                  Email
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.webHandler}>
                  Web
                </button>
              </th>
              <th scope="col">
                <button className="btn bg-white" onClick={this.ageHandler}>
                  Age
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUser && filteredUser.length > 0
              ? filteredUser.map(user => (
                  <tr key={user.id}>
                    <th scope="row">
                      <Link
                        to={{
                          pathname: `/user/${user.id}`,
                          state: { selectedUser: users[user.id - 1] }
                        }}
                      >
                        {user.id}
                      </Link>
                    </th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.company_name}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zip}</td>
                    <td>{user.email}</td>
                    <td>{user.web}</td>
                    <td>{user.age}</td>
                  </tr>
                ))
              : this.state.pageOfItems
              ? this.state.pageOfItems.map(user => (
                  <tr key={user.id}>
                    <th scope="row">
                      <Link
                        to={{
                          pathname: `/user/${user.id}`,
                          state: { selectedUser: users[user.id - 1] }
                        }}
                      >
                        {user.id}
                      </Link>
                    </th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.company_name}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zip}</td>
                    <td>{user.email}</td>
                    <td>{user.web}</td>
                    <td>{user.age}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        {this.state.search ? null : (
          <Pagination items={users} onChangePage={this.onChangePage} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Landing);
