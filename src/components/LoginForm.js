import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
        });
    }

    onLoginSuccess() {
        this.setState({ email:'', password:'', loading: false, error: '' })
    }

    onLoginFailed() {
        this.setState({ error: 'Authentification failed', loading: false })
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size='small' />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
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
                    {this.renderButton()}
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
