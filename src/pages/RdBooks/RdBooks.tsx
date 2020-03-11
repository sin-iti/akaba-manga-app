import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import baseStyle from "../../common/style/baseStyle";

export namespace RdBooks {
}

export class RdBooks extends React.Component<any, any>{
    public render() {
        return (
            <View style={baseStyle.page}>
                <Text style={baseStyle.webTitle}> rd books</Text>
                <View>
                    <View>
                        <TouchableOpacity onPress={this.returnHomepage.bind(this)}>
                            <Text>返回首页</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    protected returnHomepage() {
        this.props.history.push("/");
    }
}
