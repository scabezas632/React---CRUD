import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@babel/polyfill';

// REDUX
import { connect } from 'react-redux';
import { setLimit, setPage } from '../actions/tableAction';

class TableFilter extends Component {
  limitRef = React.createRef();

  previusPage = () => {
    const { setPage: set, page } = this.props;
    if (page) {
      if (page >= 2) {
        set(page - 1);
      }
    }
  };

  nextPage = () => {
    const { setPage: set, page, total, limit } = this.props;
    if (page) {
      if (page <= total / limit) {
        set(page + 1);
      }
    }
  };

  limitPage = () => {
    const limitSelect = Number(this.limitRef.current.value);
    const { setLimit: set, page } = this.props;
    if (page) {
      set(limitSelect);
    }
  };

  render() {
    const { limit } = this.props;
    return (
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-5">
              <button
                onClick={this.previusPage.bind(this)}
                type="button"
                className="btn btn text-uppercase d-block w-100"
              >
                &lArr; Anterior
              </button>
            </div>
            <div className="col-2">
              <select
                value={limit}
                ref={this.limitRef}
                onChange={this.limitPage.bind(this)}
                className="form-control"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="col-5">
              <button
                onClick={this.nextPage.bind(this)}
                type="button"
                className="btn btn text-uppercase d-block w-100"
              >
                Siguiente &rArr;
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

TableFilter.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
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
    setLimit,
    setPage,
  },
)(TableFilter);
