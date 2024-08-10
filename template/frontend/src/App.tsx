
import {ShortLinkContainer} from "./containers/shortLinkContainer.tsx";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
        <ShortLinkContainer/>
      </Provider>
  );
}

export default App;
