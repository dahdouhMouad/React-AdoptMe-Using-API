import React ,{useState} from "react";
import { render } from "react-dom";
import { Router,Link } from  "@reach/router";
import  Pet  from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";



const App = () => {
  // top of App function body
const theme = useState("darkblue");
//  return React.createElement("div", {}, [
//    React.createElement("h1", {}, "Adopt Me!"),
//    React.createElement(Pet, {
//      name: "Charlie",
//      animal: "Dog",
//      breed: "Chihuahua",
//    }),
//    React.createElement(Pet, {
//      name: "Hula",
//      animal: "Dog",
//      breed: "German Shepherd",
//    }),
// /   React.createElement(Pet, {
//      name: "Francine",
//      animal: "Dog",
//      breed: "American Pit Bull",
//    }),
//    React.createElement(Pet, { name: "Buster", animal: "Dog", breed: "Mixed" }),
//  ]);

return(
  <ThemeContext.Provider value={theme}>
  <div>
    <header>
    <Link to="/">
        Adopt Me
    </Link>
    </header> 
    <Router>
      <SearchParams path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
  </ThemeContext.Provider>

)
};

//render(React.createElement(App), document.getElementById("root"));
render(< App/>, document.getElementById("root"));
