import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";

const Pages = lazy(() => import("@/pages/pages"));

import { Provider } from "react-redux";
import { store } from "./redux";
import InitialLoading from "./components/initialLoading/InitialLoading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<InitialLoading />}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
