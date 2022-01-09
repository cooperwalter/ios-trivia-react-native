import { useEffect } from "react";
import { useStore } from "react-redux";

const StateLogger = () => {
  const store = useStore();
  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      console.log(JSON.stringify(store.getState(), undefined, 2))
    );
    return unsubscribe;
  }, []);
  return null;
};

export default StateLogger;
