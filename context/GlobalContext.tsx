import React from "react";

const contextValues = () => {
  const user = useUser();

  // Step
  const [step, setStep] = React.useState(0);

  return {
    step,
    setStep,
  };
};

const GlobalContext = React.createContext({} as ReturnType<typeof contextValues>);

const GlobalContextProvider = ({ children }: any) => {
  return <GlobalContext.Provider value={contextValues()}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
export { GlobalContextProvider };