import React from "react";
import baseStyle from "../../common/style/baseStyle";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { MemoryHistory } from "history";
import OpBooksStyle from "./OpBooksStyle";
import { MainDB } from "assets/class/MainDB";

export namespace OpBooks {
    export interface IProps {
        history: MemoryHistory;
    }
    export interface IState {
        bookName: string;
        author: string;
        updateMethod: string;
        updateURL: string;
    }
}

export class OpBooks extends React.Component<OpBooks.IProps, OpBooks.IState>{
    public readonly state = {
        bookName: "",
        updateMethod: "",
        updateURL: "",
        author: "",
    };
    public render() {
        return (
            <View style={baseStyle.page}>
                <Text style={baseStyle.webTitle}>op books</Text>
                <View>
                    <View style={[OpBooksStyle.rightBtn]}>
                        <TouchableOpacity onPress={this.returnHomepage.bind(this)} style={[baseStyle.btn, OpBooksStyle.btn]}>
                            <Text style={baseStyle.btnTxt}>返回首页</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[baseStyle.formRowCenter, OpBooksStyle.formRowCenter]}>
                        <Text style={OpBooksStyle.formLabel}>书名:</Text>
                        <TextInput style={[baseStyle.input, OpBooksStyle.formInput]} value={this.state.bookName} onChangeText={this.updateBookName.bind(this)} />
                    </View>
                    <View style={[baseStyle.formRowCenter, OpBooksStyle.formRowCenter]}>
                        <Text style={OpBooksStyle.formLabel}>作者:</Text>
                        <TextInput style={[baseStyle.input, OpBooksStyle.formInput]} value={this.state.author} onChangeText={this.updateAuthor.bind(this)} />
                    </View>
                    <View style={[baseStyle.formRowCenter, OpBooksStyle.formRowCenter]}>
                        <Text style={OpBooksStyle.formLabel}>更新方式:</Text>
                        <TextInput style={[baseStyle.input, OpBooksStyle.formInput]} value={this.state.updateMethod} onChangeText={this.updateUpdateMethod.bind(this)} />
                    </View>
                    <View style={[baseStyle.formRowCenter, OpBooksStyle.formRowCenter]}>
                        <Text style={OpBooksStyle.formLabel}>更新网址:</Text>
                        <TextInput style={[baseStyle.input, OpBooksStyle.formInput]} value={this.state.updateURL} onChangeText={this.updateUpdateURL.bind(this)} />
                    </View>
                    <View style={[OpBooksStyle.btnRowCenter]}>
                        <TouchableOpacity onPress={this.saveData.bind(this)} style={[baseStyle.btn, OpBooksStyle.btn]}>
                            <Text style={baseStyle.btnTxt}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    protected returnHomepage() {
        this.props.history.push("/");
    }
    protected updateBookName(text: string) {
        this.setState({
            bookName: text,
        });
    }
    protected updateUpdateMethod(text: string) {
        this.setState({
            updateMethod: text,
        });
    }
    protected updateUpdateURL(text: string) {
        this.setState({
            updateURL: text,
        });
    }
    protected updateAuthor(text: string) {
        this.setState({
            author: text,
        });
    }
    protected saveData() {
        console.log(this.state);
        const list = [
            this.state.bookName,
            this.state.author,
            this.state.updateMethod,
            this.state.updateURL,
        ];
        if (list.every((txt) => txt.length && txt.trim().length)) {
            this.saveDataToDB(list);
        }
    }
    protected saveDataToDB(list: string[]) {
        // MainDB.getInstance()
        //     .then((db) => {
        //         const sql = `INSERT INTO `;
        //         db.executeSql();
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    }
}
