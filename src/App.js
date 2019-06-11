import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Go to Page two</Link>
    </div>
  );
};
const PageTwo = () => {
  return <div>PageTwo</div>;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <>
          <Route path="/pagetwo" component={PageTwo} />
          <Route path="/" exact component={PageOne} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
