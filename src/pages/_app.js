import { Provider } from "react-redux";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
