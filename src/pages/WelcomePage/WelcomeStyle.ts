import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainBlock: {
        width: 500,
    },
    page: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    btn: {
        width: 80,
        backgroundColor: "#f60",
        alignItems: "center",
        padding: 10,
    },
    firstChildLeft: {
        marginRight: 60,
    },
    btnRow: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center",
    },
    btnTxt: {
        color: "white",
    },
    bgStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
    testImgStyle: {
        width: 50,
        height: 50,
        borderColor: "#ff0",
        borderWidth: 5,
        resizeMode: "stretch",
    },
});
