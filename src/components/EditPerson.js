import React, { Component } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { showPerson, editPerson } from '../actions/peopleAction';
import { showError } from '../actions/errorAction';

class EditPerson extends Component {
  // refs
  firstNameRef = React.createRef();

  lastNameRef = React.createRef();

  emailRef = React.createRef();

  componentWillMount() {
    const { showError: show } = this.props;
    show(false);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { showPerson: show } = this.props;
    show(id);
  }

  editPerson = e => {
    e.preventDefault();

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const email = this.emailRef.current.value;

    const { showError: show } = this.props;

    if (firstName === '' || lastName === '' || email === '') {
      show(true);
      return;
    }

    show(false);

    const { match, editPerson: edit, history } = this.props;
    const { params } = match;
    const { id } = params;

    const infoPerson = {
      id,
      first_name: firstName,
      last_name: lastName,
      email,
    };

    edit(infoPerson);
    history.push('/');
  };

  render() {
    const { error: existError, person } = this.props;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.editPerson}>
                <div className="form-group">
                  <label htmlFor="firstName">
                    <input
                      id="firstName"
                      ref={this.firstNameRef}
                      defaultValue={person ? person.first_name : ''}
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
                      defaultValue={person ? person.last_name : ''}
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
                      defaultValue={person ? person.email : ''}
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
                  Guardar Cambios
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

EditPerson.propTypes = {
  people: PropTypes.any,
  showError: PropTypes.func,
  showPerson: PropTypes.func,
  editPerson: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  person: PropTypes.object,
  error: PropTypes.bool,
};

const mapStateToProps = state => ({
  person: state.people.person,
  error: state.error.error,
});

export default connect(
  mapStateToProps,
  {
    showError,
    showPerson,
    editPerson,
  },
)(EditPerson);
