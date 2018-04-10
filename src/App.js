import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "866cdc553eb44193af29d08b7eb7f908";

class App extends React.Component{
    render (){
      return (
        <div>
          <Titles/>
          <Form/>
          <Weather/>
        </div>
      );
    }
}

export default App;