import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ onUpdateValue, totalFeedback, resetFeedback }) => {
  return (
    <div className={clsx(css.btnConteiner)}>
      <button
        className={clsx(css.button)}
        onClick={(evt) => onUpdateValue(evt.target.textContent.toLowerCase())}
      >
        Good
      </button>
      <button
        className={clsx(css.button)}
        onClick={(evt) => onUpdateValue(evt.target.textContent.toLowerCase())}
      >
        Neutral
      </button>
      <button
        className={clsx(css.button)}
        onClick={(evt) => onUpdateValue(evt.target.textContent.toLowerCase())}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(css.button)} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
