import React from 'react';
import FormInput from './FormInput.js';
import '../styles/form.css';
import DatePicker from './DateTimeSelector.js';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count + 1)
    );
    return count;
};

class SearchLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            radius: '',
            startDateTime: '',
            endDateTime: '',
            formValid: false,
            errorCount: null,
            done: false,
            loading: false,
            errors: {
                latitude: '',
                longitude: '',
                radius: '',
                startDateTime: '',
                endDateTime: ''
            }
        }
    }

    handleDateChange = (key) => (event) => {
        console.log('event', event);
        this.setState({
            [key]: event
        });
    };

    handleChange = ({ target: { value, name } }) => {

        let errors = this.state.errors;

        this.setState({ errors, [name]: value });
        this.setState({ formValid: validateForm(this.state.errors) });
        this.setState({ errorCount: countErrors(this.state.errors) });
    }

    submit = (event) => {
        event.preventDefault();

        if (this.state.formValid) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        const data = {
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            radius: this.state.radius,
            startTime: this.state.startDateTime,
            endTime: this.state.endDateTime,
            limit: 2
        }

        if (this.state.formValid) {
            this.props.history.push('/user/home/locationresults', data);
        }
    };

    render() {
        const { errors, formValid } = this.state;

        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                    <h2 className='form-header'>Search Location</h2>
                    <br />
                    <h5 className='form-header'>Please fill out all fields</h5>
                    <br />
                    <Form.Group className='latitude'>
                        <Form.Label>Latitude</Form.Label>
                        <FormInput name='latitude' type='number' placeholder='Latitude' value={this.state.latitude} handleChange={this.handleChange} />
                        {errors.latitude.length > 0 && <span className='error'>{errors.latidue}</span>}
                    </Form.Group>
                    <Form.Group className='longitude'>
                        <Form.Label>Longitude</Form.Label>
                        <FormInput name='longitude' type='number' placeholder='Longitude' value={this.state.longitude} handleChange={this.handleChange} />
                        {errors.longitude.length > 0 && <span className='error'>{errors.longitude}</span>}
                    </Form.Group>
                    <Form.Group className='radius'>
                        <Form.Label>Radius</Form.Label>
                        <FormInput name='radius' type='number' placeholder='Radius' value={this.state.radius} handleChange={this.handleChange} />
                        {errors.radius.length > 0 && <span className='error'>{errors.radius}</span>}
                    </Form.Group>
                    <Form.Group className='startDateTime'>
                        <Form.Label>Start time</Form.Label>
                        <DatePicker
                            name='startDateTime'
                            value={this.state.startDateTime}
                            handleChange={this.handleDateChange('startDateTime')}
                            dateFormat='MMMM d, yyyy h:mm aa' />
                        {errors.startDateTime.length > 0 && <span className='error'>{errors.startDateTime}</span>}
                    </Form.Group>
                    <Form.Group className='endDateTime'>
                        <Form.Label>End time</Form.Label>
                        <DatePicker name='endDateTime'
                            value={this.state.endDateTime}
                            handleChange={this.handleDateChange('endDateTime')}
                            dateFormat='MMMM d, yyyy h:mm aa' />
                        {errors.endDateTime.length > 0 && <span className='error'>{errors.endDateTime}</span>}
                    </Form.Group>
                    <Button variant='dark' id='submit-button' type='submit'>Submit</Button>
                    <br />
                    {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : <p className="form-status">Form not submitted</p>}
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        admin: state.signin.isAdmin
    }
}

export default connect(mapStateToProps)(SearchLocation);