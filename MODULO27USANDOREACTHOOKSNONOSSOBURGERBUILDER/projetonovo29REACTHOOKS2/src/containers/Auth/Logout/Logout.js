// import React, { Component, useEffect } from 'react';

import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import * as actionTypes from '../../../store/actions/index';

import { connect } from 'react-redux';

// class Logout extends Component {
//   componentDidMount() {
//     this.props.onLogout();
//     alert('User logged out. Redirecting to home page...');
//   }

//   render() {
//     return <Redirect to="/" />;
//   }
// }

const Logout = (props) => {
  useEffect(() => {
    props.onLogout();
  }, []);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actionTypes.authLogout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
