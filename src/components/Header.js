import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
      <h1>
        <Link to="/" className="text-light">
          CRUD
        </Link>
      </h1>
      <Link to="/people/new" className="btn btn-success">
        Agregar Producto
      </Link>
    </nav>
  );
}
