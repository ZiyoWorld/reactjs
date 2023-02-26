import React from "react";
import ReactDOM from 'react-dom/client';
import Root from "./root";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import 'antd/dist/reset.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <Root />
            </Provider>
        </React.StrictMode>
);
