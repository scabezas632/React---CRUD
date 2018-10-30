import React, { Component } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { addPerson } from '../actions/peopleAction';
import { showError } from '../actions/errorAction';
import { showTotal } from '../actions/tableAction';

class NewPerson extends Component {
  // refs
  firstNameRef = React.createRef();

  lastNameRef = React.createRef();

  emailRef = React.createRef();

  componentWillMount() {
    const { showError: show } = this.props;
    show(false);
  }

  newPerson = e => {
    e.preventDefault();

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const email = this.emailRef.current.value;

    const { showError: showE } = this.props;

    if (firstName === '' || lastName === '' || email === '') {
      showE(true);
      return;
    }

    showE(false);

    const infoPerson = {
      first_name: firstName,
      last_name: lastName,
      email,
    };

    const { addPerson: add, showTotal: showT, history } = this.props;

    add(infoPerson);
    showT();

    history.push('/');
  };

  render() {
    const { error: existError } = this.props;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.newPerson}>
                <div className="form-group">
                  <label htmlFor="firstName">
                    <input
                      id="firstName"
                      ref={this.firstNameRef}
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    <input
                      id="lastName"
                      ref={this.lastNameRef}
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <input
                      id="emiail"
                      ref={this.emailRef}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </form>
              {existError ? (
                <div className="font-weight-bold alert-danger text-center mt-4">
                  Todos los campos son obligatorios
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewPerson.propTypes = {
  showError: PropTypes.func,
  addPerson: PropTypes.func,
  showTotal: PropTypes.func,
  history: PropTypes.object,
  error: PropTypes.bool,
};

const mapStateToProps = state => ({
  error: state.error.error,
});

export default connect(
  mapStateToProps,
  {
    showError,
    addPerson,
    showTotal,
  },
)(NewPerson);
