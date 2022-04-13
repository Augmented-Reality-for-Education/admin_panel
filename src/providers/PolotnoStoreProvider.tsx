import createStore from "polotno/model/store";
import { FC, useState, createContext } from "react";

const createEmptyStore = () => {
  const store = createStore();
  store.addPage({ background: "transparent" });
  return store;
};

export const PolotnoStoreContext = createContext({
  id: undefined as number | undefined,
  setId: (id: number | undefined) => {},
  name: undefined as string | undefined,
  setName: (name: string | undefined) => {},
  store: createEmptyStore(),
  resetStore: () => {},
});

const PolotnoStoreProvider: FC = ({ children }) => {
  const [id, setId] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>("");
  const [store, setStore] = useState(createEmptyStore());

  const resetStore = () => {
    setStore(createEmptyStore());
    setId(undefined);
  };

  const context = { id, setId, name, setName, store, resetStore };

  return (
    <PolotnoStoreContext.Provider value={context}>
      {children}
    </PolotnoStoreContext.Provider>
  );
};

export default PolotnoStoreProvider;
