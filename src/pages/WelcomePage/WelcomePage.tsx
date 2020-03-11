import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import WelcomeStyle from "./WelcomeStyle";
import baseStyle from "../../common/style/baseStyle";
import history from "history";
// import {Link} from "react-router-native";
export namespace WelcomePage {
    export interface IProps {
        history: history.MemoryHistory;
    }
}

export class WelcomePage extends React.Component<WelcomePage.IProps> {
    public render() {
        // const img = require("../../assets/img/bg.jpg");
        return (
            <ImageBackground source={require("../../assets/img/bg.jpg")} style={WelcomeStyle.bgStyle}>
                <View style={[baseStyle.page, WelcomeStyle.page]}>
                    <View style={WelcomeStyle.mainBlock}>
                        <Text style={[baseStyle.webTitle]}>Akaba Manga</Text>
                        <View style={WelcomeStyle.btnRow}>
                            <TouchableOpacity
                                style={[WelcomeStyle.btn, WelcomeStyle.firstChildLeft]}
                                onPress={this.pressReadBtn.bind(this)}
                            >
                                <Text style={WelcomeStyle.btnTxt}>阅读</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={WelcomeStyle.btn}
                                onPress={this.pressOperateBtn.bind(this)}
                            >
                                <Text style={WelcomeStyle.btnTxt}>操作</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
    public pressReadBtn() {
        this.props.history.push("/read/books");
        console.log("click read");
    }
    public pressOperateBtn() {
        this.props.history.push("/operator/books");
        console.log("click operate");
    }
}
