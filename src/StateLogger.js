import { useStore } from "react-redux";

const StateLogger = () => {
  const store = useStore();
  console.log("store", JSON.stringify(store.getState(), undefined, 2));
  return null;
};

export default StateLogger;
