import { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineFilter, AiOutlineUp } from "react-icons/ai";
import "./Filters.scss";
import { useGetProductsByFiltersQuery } from "../../services/products";
import { hideFilteredResults, setProducts } from "../../features/productsSlice";
import { useAppDispatch } from "../../features/hooks";

const Filters = () => {
  const dispatch = useAppDispatch();
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: "",
    category: "",
    size: "",
    price: 200,
  });
  const [skip, setSkip] = useState(true);
  const { data, isError, isLoading, isUninitialized } =
    useGetProductsByFiltersQuery(filters, { skip: skip });
  const [sortBy, setSortBy] = useState("");
  const min = 0;
  const [max, setMax] = useState(200);

  const items = ["A to Z", "Z to A", "Low to high", "High to low"];
  const sizes = ["XS", "S", "M", "L", "Xl", "XXl"];
  const categories = ["Accessories", "Blouses", "Shirts", "Pants"];

  useEffect(() => {
    setSkip(false);
    if (!isLoading && !isError && !isUninitialized) {
      // this action will set the showFilteredResults to true
      console.log("useGetProductsByFiltersQuery", filters);
      dispatch(setProducts({ products: data.products }));
    }
    if (
      filters.sortBy === "" &&
      filters.category === "" &&
      filters.size === "" &&
      filters.price === 200
    ) {
      dispatch(hideFilteredResults());
    }
  }, [filters, isError, isLoading, isUninitialized]);

  const handleClickItem = (item: string) => {
    setSortBy(item);
    setFilters((prev) => {
      return { ...prev, sortBy: item };
    });
    setIsSelectActive(false);
  };

  const handleRangeChange = (e: any) => {
    setMax(e.target.value);
    setFilters((prev) => {
      const updatedFilters = { ...prev, price: e.target.value };
      return updatedFilters;
    });
  };

  const handleClickCategory = (c: string) => {
    setFilters((prev) => {
      return { ...prev, category: c };
    });
  };

  const handleClickSize = (s: string) => {
    setFilters((prev) => {
      return { ...prev, size: s };
    });
  };

  return (
    <div className="filters">
      <div className="top">
        <div
          className="filter-toggle"
          onClick={() =>
            setIsFiltersActive((isFiltersActive) => !isFiltersActive)
          }
        >
          <span>
            <AiOutlineFilter />
          </span>
          <span>Filters</span>
        </div>

        <div className="list-wrapper">
          <div
            className="title"
            onClick={() =>
              setIsSelectActive((isSelectActive) => !isSelectActive)
            }
          >
            <span>{sortBy === "" ? "Sort by : " : sortBy}</span>
            {isSelectActive ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>

          <ul className={`list ${isSelectActive ? "list-active" : ""}`}>
            {items.map((item, index) => (
              <li
                className={`item ${item === sortBy ? "item-active" : ""} `}
                key={index}
                onClick={() => handleClickItem(item)}
              >
                {" "}
                {item}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${isFiltersActive ? "show-filters" : "hide-filters"}`}>
        <div className="col">
          <div className="heading">
            <span>Category</span>
            <hr />
          </div>
          <ul className="filters-list">
            {categories.map((c) => (
              <li className="item" key={c}>
                <input
                  type="checkbox"
                  onClick={() => handleClickCategory(c)}
                  checked={c === filters.category ? true : false}
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Size</span>
            <hr />
          </div>
          <ul className="filters-list">
            {sizes.map((s) => (
              <li className="item" key={s}>
                <input
                  type="checkbox"
                  onClick={() => handleClickSize(s)}
                  checked={s === filters.size ? true : false}
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Composition</span>
            <hr />
          </div>
          <ul className="filters-list">
            <li className="item">
              <input type="checkbox" />
              <span>polyster</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Cotton</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Style</span>
            <hr />
          </div>
          <ul className="filters-list">
            <li className="item">
              <input type="checkbox" />
              <span>Casual</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Classy</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Streetwear</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Price</span>
            <hr />
          </div>
          <div className="details">
            <span>{min} </span>
            <input
              type="range"
              min={0}
              max={200}
              onChange={handleRangeChange}
              className="slider"
            />
            <span>{max} </span>
          </div>
        </div>

        <div className="col">
          <button
            onClick={() =>
              setFilters({ sortBy: "", category: "", size: "", price: 200 })
            }
            className="reset-btn"
            style={{
              padding: "0.3rem 1rem",
              backgroundColor: "var(--white)",
              color: "var(--black)",
              boxShadow: "0 0 0 1px var(--black)",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
