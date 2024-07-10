import React from "react";
import {
  FieldSet,
  Form,
  Email,
  Password,
  EventButton,
  Name,
} from "../Form/form.js";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  };
  onPasswordChange = (event) => {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  };

  onSubmitSignIn = () => {
    fetch("https://safe-reef-32266-2f5bd9d95d9f.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onEmailChange, onPasswordChange, onSubmitSignIn, onNameChange } =
      this;
    return (
      <Form>
        <legend className="f2 fw6 ph0 mh0"> Register</legend>
        <FieldSet>
          <Name onNameChange={onNameChange} />
          <Email onEmailChange={onEmailChange} />
          <Password onPasswordChange={onPasswordChange} />
        </FieldSet>
        <EventButton value={"Register"} onSubmitSignIn={onSubmitSignIn} />
      </Form>
    );
  }
}

export default Register;
