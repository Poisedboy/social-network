import React from "react";
import Header from './Header.jsx';
import { connect } from "react-redux";
import { getAuthUserData, logout } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData, logout } )(HeaderContainer);