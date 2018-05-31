import React, { SFC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FoodiRouter from "./routes";
import { history, persistor, store } from "./store";

const App: SFC<{}> = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FoodiRouter history={history} />
    </PersistGate>
  </Provider>
);

export default App as any;
