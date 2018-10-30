import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@babel/polyfill';

// REDUX
import { connect } from 'react-redux';
import { showPeople } from '../actions/peopleAction';
import { setLimit, setPage, showTotal } from '../actions/tableAction';

// Components
import Person from './Person';
import TableFilter from './TableFilter';

class People extends Component {
  // limitRef = React.createRef();

  componentDidMount() {
    const { showPeople: show, page, limit, showTotal: total } = this.props;
    total();
    show(page, limit);
  }

  componentDidUpdate(prevProps) {
    const { showPeople: show, page, limit, total } = this.props;
    if (
      prevProps.page !== page ||
      prevProps.limit !== limit ||
      prevProps.total !== total
    ) {
      show(page, limit);
    }
  }

  render() {
    const { people } = this.props;
    return (
      <React.Fragment>
        <h2 className="text-center my-5">Personas</h2>
        <TableFilter />
        <div className="row justify-content-center">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre Completo</th>
                  <th scope="col">Email</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {people.map(person => (
                  <Person key={person.id} info={person} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

People.propTypes = {
  people: PropTypes.any,
  page: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.any,
  showTotal: PropTypes.func,
  showPeople: PropTypes.func,
  setLimit: PropTypes.func,
  setPage: PropTypes.func,
};

// state
const mapStateToProps = state => ({
  people: state.people.people,
  page: state.table.page,
  limit: state.table.limit,
  total: state.table.total,
});

export default connect(
  mapStateToProps,
  {
    showPeople,
    setLimit,
    setPage,
    showTotal,
  },
)(People);
