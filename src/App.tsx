import React from "react";

import { Routes } from "./routes";
import { store, persistor } from "./redux";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
// import { createTheme, ThemeProvider } from "@material-ui/core";
// import { green, purple } from "@material-ui/core/colors";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={theme}> */}
        <Routes />
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
