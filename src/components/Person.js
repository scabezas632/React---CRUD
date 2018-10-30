import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { removePerson } from '../actions/peopleAction';
import { showTotal } from '../actions/tableAction';

class Person extends Component {
  deletePerson = () => {
    const { info, removePerson: remove, showTotal: show } = this.props;
    const { id } = info;
    remove(id);
    show();
  };

  render() {
    const { info } = this.props;
    const { id, first_name: firstName, last_name: lastName, email } = info;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{email}</td>
        <td>
          <Link to={`people/edit/${id}`} className="btn btn-primary mr-1">
            Editar
          </Link>
          <button
            onClick={this.deletePerson}
            type="button"
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  }
}

Person.propTypes = {
  info: PropTypes.object,
  id: PropTypes.any,
  removePerson: PropTypes.func,
  showTotal: PropTypes.func,
};

export default connect(
  null,
  {
    removePerson,
    showTotal,
  },
)(Person);
