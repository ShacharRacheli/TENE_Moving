import { RouterProvider } from "react-router"
import { router } from "./router"
import Footer from "./footer"
import store from "./store/store";
import { Provider } from 'react-redux';

function App() {
  
  return (
    <>
        <Provider store={store}>
          <RouterProvider router={router} />
          <Footer />
        </Provider>
    </>
  )
}

export default App;
