import React from "react";
import {
  FieldSet,
  Form,
  Email,
  Password,
  SigninButton,
  RegisterLink,
  EventButton,
} from "../Form/form.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState(() => {
      return { signInEmail: event.target.value };
    });
  };

  onPasswordChange = (event) => {
    this.setState(() => {
      return {
        signInPassword: event.target.value,
      };
    });
  };

  onSubmitSignIn = () => {
    fetch("https://safe-reef-32266-2f5bd9d95d9f.herokuapp.com/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
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
    const { onRouteChange } = this.props;
    const { onEmailChange, onPasswordChange, onSubmitSignIn } = this;
    return (
      <Form>
        <legend className="f2 fw6 ph0 mh0"> Sign In</legend>
        <FieldSet>
          <Email onEmailChange={onEmailChange} />
          <Password onPasswordChange={onPasswordChange} />
        </FieldSet>
        <EventButton value={"Sign in"} onSubmitSignIn={onSubmitSignIn} />
        <RegisterLink onRouteChange={onRouteChange} />
      </Form>
    );
  }
}

export default SignIn;
