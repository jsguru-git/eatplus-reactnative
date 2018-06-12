import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoggingIn: false,
            message: ''
        }
    }

    _userLogin () {
        this.setState({isLoggingIn: true, message: ''});

        // var params = {
        //     username: this.state.username,
        //     password: this.state.password,
        // }

        // const params = new FormData();
        // params.append('username', this.state.username);
        // params.append('password', this.state.password);

        const params = {
            username: 'alexei',
            email: '',
            password: 'rootpassword'
        }

        var proceed = false;
        // fetch("http://localhost:8000/api/auth/login/", {
        // fetch("http://10.0.2.2:8000/api/auth/login/", {
        // fetch("http://192.168.100.35:8000/api/auth/login/", {            
        fetch("http://beta.eatplus.com/api/auth/login/", {
            method: "POST",
            headers: {
                // 'Content-Type': 'multipart/form-data;',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: params
            body: JSON.stringify(params)
        })
        .then((response)=>response.json())
        .then((response)=>{
            if (response.error) this.setState({message: response.message});
            else proceed = true;
        })
        .then(()=>{
            this.setState({isLoggingIn: false})
            if (proceed) this.props.onLoginPress();
        })
        .done();
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder='USER NAME'
                        placeholderTextColor='#f6c7a1'
                        style={styles.textInput}
                        onChangeText={(username)=>this.setState({username})}
                        value={this.state.username}
                        underlineColorAndroid={'transparent'}/>
                    <TextInput
                        placeholder='PASSWORD'
                        placeholderTextColor='#f6c7a1'
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                        underlineColorAndroid={'transparent'}/>
                </View>
                <TouchableOpacity style={styles.button}
                    disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                    onPress={this._userLogin.bind(this)}>
                    <Text style={styles.btntext}>login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#fff',
        paddingBottom: 12,
        borderRadius: 12,
    },
    inputGroup: {
        paddingTop: 130,
        paddingBottom: 130,
        paddingRight: 25,
        paddingLeft: 25,
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 14,
        fontSize: 28,
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginBottom: 20,
    },
    button: {
        alignSelf: 'stretch',
        marginTop: 20,
        backgroundColor: '#f7941d',
        alignItems: 'center',
        padding: 14,
        borderRadius: 15,
        // borderWidth: 1,
        // borderColor: '#000',
    },
    btntext: {
        color: '#fff',  
        fontSize: 28,
        fontWeight: 'bold',
    }
});
