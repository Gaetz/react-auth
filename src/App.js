import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true: 
                return <CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection>;
            case false:
                return <LoginForm />;
            default: // null
                return <CardSection><Spinner size='large' /></CardSection>;
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header title="Authentification" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
