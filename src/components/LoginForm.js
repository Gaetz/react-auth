import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '' };

    render() {
        return (
            <Card>     
                <CardSection>
                    <Input label='Email' placeholder='user@domain.org' value={this.state.email} onChangeText={ text => this.setState({ email: text })} />
                </CardSection>

                <CardSection>
                    <Input />
                </CardSection>
                
                <CardSection>
                    <Button>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
