import React, { Component } from 'react';
import { Segment, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react';
import { connect } from "react-redux";

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]
class AddStudent extends Component {

    render() {
        const { match } = this.props
        console.log(match.url)
        return (
            <Segment.Group horizontal raised>
                <Segment>
                    <Form>
                        <Divider horizontal section ><Header as='h3' color='green'>Dane ucznia</Header></Divider>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Imię' icon='user' iconPosition='left' />
                            <Form.Input fluid label='Nazwisko' icon='user' iconPosition='left' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='E-mail' icon='at' iconPosition='left' />
                            <Form.Input fluid label='Numer tel' icon='phone' iconPosition='left' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Ulica' icon='home' iconPosition='left' />
                            <Form.Input fluid label='Kod' width={5} icon='envelope' iconPosition='left' />
                            <Form.Input fluid label='Miasto' icon='marker' iconPosition='left' />
                        </Form.Group>

                        <Divider horizontal section> <Header as='h3' color='green'>Dane do faktury</Header></Divider>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Nazwa firmy' icon='money' iconPosition='left' />
                            <Form.Input fluid label='NIP' icon='calculator' iconPosition='left' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Ulica' icon='home' iconPosition='left' />
                            <Form.Input fluid label='Kod' width={5} icon='envelope' iconPosition='left' />
                            <Form.Input fluid label='Miasto' icon='marker' iconPosition='left' />
                        </Form.Group>

                        <Divider horizontal section> <Header as='h3' color='green'>Dane do rozliczenia</Header></Divider>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Data podpisania umowy' placeholder='DD-MM-YYYY' icon='calendar' iconPosition='left' />
                            <Form.Input fluid label='Kwota za lekcję' icon='dollar' iconPosition='left' />
                            <Form.Select fluid label='Grupa' options={options} placeholder='Wybierz grupę' />
                        </Form.Group>

                        <Button type='submit' floated='right' positive>Zapisz</Button>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}
const mapStateToProps = state => {
    return {
        groupsName: state.groups
    };
};
export default connect(mapStateToProps)(AddStudent);