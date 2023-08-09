import { useState, useEffect, useRef } from "react";
import "./Search.scss";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { closeSearch } from "../../features/searchSlice";
import { useSearchProductsQuery } from "../../services/products";
import { Link } from "react-router-dom";

const Search = () => {
  const dispatch = useAppDispatch();
  const { isSearchOpen } = useAppSelector((state) => state.search);
  const [search, setSearch] = useState("");
  const componentRef = useRef(null);
  const { data, isLoading, isError } = useSearchProductsQuery(search);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handleEscapeKey = (e: any) => {
      if (e.key === "Escape") {
        dispatch(closeSearch());
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className={`${isSearchOpen ? "show-search" : "hide-search"}`}>
      <div
        className="close-icon"
        onClick={() => {
          dispatch(closeSearch());
        }}
      >
        <AiOutlineClose />
      </div>
      <form onSubmit={handleSubmit} ref={componentRef}>
        <div className="form-control">
          <input
            type="text"
            name="search"
            value={search || ""}
            onChange={handleChange}
            placeholder="search for products"
          />
          <button>
            <AiOutlineSearch />
          </button>
          <ul className="list">
            {search.length > 0 &&
              !isLoading &&
              !isError &&
              data.products.length > 0 &&
              // @ts-ignore
              data.products.map((product, index) => (
                <Link
                  to={`/product/${product._id}`}
                  key={index}
                  onClick={() => dispatch(closeSearch())}
                >
                  <li className="item">{product.title} </li>
                </Link>
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Search;
