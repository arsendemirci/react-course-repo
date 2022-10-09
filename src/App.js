<<<<<<< HEAD
import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
=======
import React from "react";
import useFetchApi from "./hooks/useFetchApi";

function App() {
  // const [data] = useFetchApi("movies.json");
  // console.log(data);

  return <div>Welcome To React</div>;
>>>>>>> master
}

export default App;
