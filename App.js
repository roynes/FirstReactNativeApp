import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";

import React, { Component } from "react";
import NativeApp from "./src/NativeApp";

import { Provider } from "react-redux";

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NativeApp/>
        </PersistGate>
      </Provider>
    );
  }
}