import { useSelector, useDispatch } from "react-redux";
import "./footer.css";
import {
  decreasePageNumber,
  increasePageNumber,
  setPage
} from "../../context/action/action";
// import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pageChanger = (no) => {
    dispatch({ type: setPage, payload: no });
    navigate(`/page/${no}`);
  };

  return (
    <div className="footer">
      <span>{state.page}/10</span>
      <span className="paginate-no">
        <button
          className="paginate-btn"
          onClick={() => dispatch({ type: decreasePageNumber })}
        >
          <ArrowBackIosIcon fontSize="" />
        </button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <button
            onClick={() => pageChanger(item)}
            className={
              +item === +state.page
                ? "paginate-btn paginate-active"
                : "paginate-btn"
            }
            key={item}
          >
            {item}
          </button>
        ))}
        <button
          className="paginate-btn"
          onClick={() => dispatch({ type: increasePageNumber })}
        >
          <ArrowForwardIosIcon fontSize="" />
        </button>
      </span>
    </div>
  );
}
