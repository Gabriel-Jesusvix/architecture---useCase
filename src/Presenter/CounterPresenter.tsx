/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import CounterModel from "../Model/couterModal";
import CounterView from "../View/CounterView";

const CounterPresenter: React.FC = () => {
  const [model] = useState<CounterModel>(new CounterModel());
  const [count, setCount] = useState<number>(model.getCount());

  useEffect(() => {
    setCount(model.getCount());
  }, [model]);

  const handleIncrement = () => {
    const updatedCount = count + 1;
    model.setCount(updatedCount);
    setCount(updatedCount);
  };

  const handleDecrement = () => {
    const updatedCount = count - 1;
    model.setCount(updatedCount);
    setCount(updatedCount);
  };

  return (
    <CounterView
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
};

export default CounterPresenter;
