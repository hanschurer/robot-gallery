import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "Han Wang",
  shoppingCart: { items: [] },
};

interface Props {
  children: React.ReactNode;
}

export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined);

export const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
          {children}
          </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
