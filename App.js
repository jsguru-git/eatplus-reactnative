/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
} from 'react-native';

import Form from './app/components/Form';
/*
<ImageBackground style={styles.container} source={require('./app/img/bg.jpg')}>
    <Text style={styles.header}>eatplus</Text>
    <Form />
</ImageBackground>
*/
export default class App extends Component<Props> {
    state = {
        isLoggedIn: false
    }
    render() {
        if (this.state.isLoggedIn)
            return (
                <View>
                    <Text>Welcome to eatplus.</Text>
                </View>
            );
        else
            return (
                <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                    <Text style={styles.header}>eatplus</Text>
                    <View style={styles.container}>
                        <Form onLoginPress={()=>this.setState({isLoggedIn: true})}/>
                        <View style={styles.dummy}></View>
                    </View>
                </KeyboardAvoidingView>
            );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 18,
        marginRight: 35,
        marginLeft: 35,
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f7941d',
        paddingTop: 18,
        paddingBottom: 14,
        paddingRight: 25,
        paddingLeft: 25,
        borderRadius: 10,
    },
    header: {
        fontSize: 85,
        color: '#f7941d',
        fontWeight: 'bold',
    },
    dummy: {
        alignSelf: 'stretch',
        backgroundColor: '#fab767',
        borderRadius: 30,
        marginTop: 12,
        marginLeft: 25,
        marginRight: 25,
        height: 77,
    }
});
