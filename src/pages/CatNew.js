import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form:{
                 name: "",
                 age: "",
                 enjoys: ""
            },
        submitted: false
        }
    }

    handleSubmit = () => {
        this.props.createNewCat(this.state.form)
        this.setState({submitted: true})
      }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        // form["name"]
        // form["age"]
        // form["enjoys"]
    
        this.setState({ form: form })    
    }

    handleSubmit() {
        this.props.createNewCat(this.state.form)
    }

    render() {
        return (
            <>
                <h3>I am the Cat New</h3>
                <Form>
  <FormGroup>
    <Label for="name">Cat's Name</Label>
    <Input
      name="name"
      type="text"
      value={this.state.form.name}
      onChange={this.handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="age">Cat's Age </Label>
    <Input
      name="age"
      type="number"
      value={this.state.form.age}
      onChange={this.handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="enjoys">What does cat enjoy?</Label>
    <Input
      name="enjoys"
      type="text"
      value={this.state.form.enjoys}
      onChange={this.handleChange}
    />
  </FormGroup>
  <Button
      onClick = {this.handleSubmit} 
    >
    Add a New Cat
  </Button>
  </Form>
  {this.state.submitted && <Redirect to="/catindex" />}
            </>
        );
    }
}

export default CatNew;
