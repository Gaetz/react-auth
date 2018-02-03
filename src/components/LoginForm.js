import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({error: 'Authentification failed'});
            });
        });
    }

    render() {
        return (
            <Card>     
                <CardSection>
                    <Input label='Email' placeholder='user@domain.org' value={this.state.email} onChangeText={ text => this.setState({ email: text })} />
                </CardSection>

                <CardSection>
                    <Input label='Password' placeholder='password' value={this.state.password} onChangeText={ text => this.setState({ password: text })} isPassword />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
} 

export default LoginForm;
