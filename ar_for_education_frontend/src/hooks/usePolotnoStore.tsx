import { useContext } from "react";
import { PolotnoStoreContext } from "../providers/PolotnoStoreProvider";

const usePolotnoStore = () => {
  const context = useContext(PolotnoStoreContext);
  return context;
};

export default usePolotnoStore;
