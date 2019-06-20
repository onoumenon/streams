import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
        <>
          <Header />
          <Switch>
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
            <Route path="/" exact component={StreamList} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
