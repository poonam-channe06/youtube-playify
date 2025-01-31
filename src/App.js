
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store} >


    <div>
      <Head />
      <Body />
     {/**
      * Head
      * Body
      *   - sidebar
      *      - menu items
      *   - main container 
      *      - buttons list
      *      - video container
      *      - videp Card
      */}
    </div>
    </Provider>

  );
}

export default App;
