import { RouterProvider } from "react-router"
import { router } from "./router"
import Footer from "./footer"
import MovingDetailsForm from "./components/forms/movingDetailsForm";
import store from "./store/store";
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
      <RouterProvider router={router} />
      {/* <MovingDetailsForm/>  */}
      <Footer/>
      </Provider> 
    {/* 
     <Footer/> 
  */}
    </>
  )
}

export default App;
