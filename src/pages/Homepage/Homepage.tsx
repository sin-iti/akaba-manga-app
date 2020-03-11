import React from "react";
import { NativeRouter, Route } from "react-router-native";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { OpBooks } from "../OpBooks/OpBooks";
import store, { history } from "../../store/index";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ToastAndroid } from "react-native";
import { RdBooks } from "../RdBooks/RdBooks";
import { MainDB } from "../../assets/class/MainDB";
import { SQLError } from "react-native-sqlite-storage";

export default class Homepage extends React.Component {
    public readonly state = {
        openDBStateText: "",
    };
    public render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <NativeRouter>
                        <Route path={"/operator/books"} component={OpBooks} />
                        <Route path={"/read/books"} component={RdBooks} />
                        <Route path={"/"} exact={true} component={WelcomePage} />
                    </NativeRouter>
                </ConnectedRouter>
            </Provider>
        );
    }
    public componentDidMount() {
        this.openDB();
    }
    protected openDB() {
        MainDB.getInstance()
            .then(() => {
                ToastAndroid.show("成功打开数据库", 1000);
            })
            .catch((err: SQLError) => {
                ToastAndroid.show("打开数据库时出现错误", 4000);
                console.error(err);
            });
    }
}
