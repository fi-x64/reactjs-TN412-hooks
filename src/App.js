import { Fragment } from "react"
import {QueryClient, QueryClientProvider} from "react-query";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import routes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <div className="App">
            <Routes>
              {routes.map((item, index) => {
                let Layout = DefaultLayout;
                if (item.layout) Layout = item.layout;
                if (item.layout === null) Layout = Fragment;
                let Page = item.component;
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      <Layout>
                        <Page></Page>
                      </Layout>
                    }
                  ></Route>
                );
              })}
            </Routes>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
