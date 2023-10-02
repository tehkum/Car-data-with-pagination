import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPage } from "../../context/action/action";
import { useParams } from "react-router-dom";

export default function Homepage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pageNo } = useParams();

  useEffect(() => {
    dispatch({ type: setPage, payload: pageNo });
  }, [dispatch, pageNo]);

  const filterData = (state.search
    ? state.data
    : state?.data?.slice(state.page * 6 - 6, state.page * 6)
  ).filter((item) =>
    item.name.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div>
      <div className="display-cars">
        {filterData.length ? (
          filterData.map((item, index) => <Card props={item} key={index} />)
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}
