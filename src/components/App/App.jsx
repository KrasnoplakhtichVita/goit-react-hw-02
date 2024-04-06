import { useState, useEffect } from "react";
import css from "./App.module.css";
import information from "../data/information.json";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [value, setValue] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(value));
  }, [value]);

  const { good, neutral, bad } = value;

  const updateFeedback = (option) => {
    setValue({
      ...value,
      [option]: value[option] + 1,
    });
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const resetFeedback = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description
        name={information.name}
        description={information.description}
      />
      <Options
        onUpdateValue={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback ? (
        <Feedback
          value={value}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
