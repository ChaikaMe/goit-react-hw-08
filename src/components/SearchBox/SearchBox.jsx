import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}
