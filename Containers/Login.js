import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {SIGN_IN, SIGN_OUT} from "../Constants/actionTypes";


export const Login = props => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = props.navigation.navigate;
    const dispatch = useDispatch();
    const {isLogin} = useSelector(state => ({isLogin: state.loginReducer.isLogin}), shallowEqual);

    const signIn = () => {
        if (login === 'admin' && password === 'admin') {
            dispatch({type: SIGN_IN});
            setPassword('');
            setLogin('');
            setError('');
        } else {
            setError('Wrong login or password.')
        }
    };
    const signOut = () => dispatch({type: SIGN_OUT});

    return (
        <View style={styles.loginContainer}>
            {!isLogin ? (
                <View style={[{alignSelf: 'stretch'}, {alignItems: 'center'}]}>
                    <Input
                        placeholder='Enter email or login'
                        leftIcon={
                            <Icon
                                name='envelope'
                                size={18}
                                color='black'
                            />
                        }
                        label={"Email or login"}
                        containerStyle={styles.inputContainer}
                        leftIconContainerStyle={styles.leftIconContainerStyle}
                        value={login}
                        onChange={(e) => setLogin(e.nativeEvent.text)}
                    />
                    <Input
                        placeholder='Enter password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        label={"Password"}
                        containerStyle={styles.inputContainer}
                        leftIconContainerStyle={styles.leftIconContainerStyle}
                        value={password}
                        onChange={(e) => setPassword(e.nativeEvent.text)}
                        type={"password"}
                        secureTextEntry={true}
                    />
                    {error ? (
                        <Text style={styles.errorText}>{error}</Text>
                    ) : false}
                    <TouchableHighlight style={styles.button} onPress={() => signIn()}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableHighlight>
                </View>
            ) : (
                <View style={styles.loginContainer}>
                    <Text style={styles.text}>You are logged in as admin</Text>
                    <TouchableHighlight style={styles.button} onPress={() => signOut()}>
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableHighlight>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        padding: 10
    },
    leftIconContainerStyle: {
        marginRight: 8
    },
    button: {
        margin: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: '#fff',
        fontSize: 22
    },
    errorText: {
        color: '#ed0909'
    },
    text:{
        fontSize: 20
    }
});