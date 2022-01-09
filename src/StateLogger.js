import { useStore } from "react-redux";

const StateLogger = () => {
  const store = useStore();
  store.subscribe((state) =>
    console.log("store", JSON.stringify(state, undefined, 2))
  );
  return null;
};

export default StateLogger;
