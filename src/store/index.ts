import { createMemoryHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
export const history = createMemoryHistory();

export default createStore(
    createRootReducer(history), // root reducer with router state
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
        ),
    ),
);
