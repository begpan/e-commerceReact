import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { setCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);

  const [categories, setCategories] = useState([]);
  // apiden kategori verileri al

  useEffect(() => {
    // hangi url istek atacagını belirle

    // const url =
    //   category === "all"
    //     ? "https://fakestoreapi.com/products"
    //     : `https://fakestoreapi.com/products/${category}`;

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);
  // sepetteki ürün sayısını hesapla

  const total = basket.reduce((total, product) => total + product.amount, 0);

  return (
    <nav className="navbar navbar-dark bg-black sticky-top navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Context Store
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checkout">
                  <span>Cart</span>
                  <span className="badge bg-danger ms-1">{total}</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li onClick={() => setCategory("all")}>
                    <span className="dropdown-item" href="/">
                      all
                    </span>
                  </li>

                  {categories?.map((cat) => (
                    <li onClick={() => setCategory(cat)}>
                      <span className="dropdown-item" href="/">
                        {cat}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
