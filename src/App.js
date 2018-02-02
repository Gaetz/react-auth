import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC0fqjDZ5svMpxt2t1wFfZoBmquJ_eAeck',
            authDomain: 'react-auth-58991.firebaseapp.com',
            databaseURL: 'https://react-auth-58991.firebaseio.com',
            projectId: 'react-auth-58991',
            storageBucket: 'react-auth-58991.appspot.com',
            messagingSenderId: '725846966804'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header title="Authentification" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
