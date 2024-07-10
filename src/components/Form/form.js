import React from "react";

const Form = (props) => {
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure "></div>
        {props.children}
      </main>
    </article>
  );

  // <div>{props.children}</div>;
};

const FieldSet = (props) => {
  return (
    <div>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        {props.children}
      </fieldset>
    </div>
  );
};

const Name = ({ onNameChange }) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">
        Name
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="text"
        name="name"
        id="name"
        onChange={onNameChange}
      />
    </div>
  );
};
const Email = ({ onEmailChange }) => {
  return (
    <>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">
          Email
        </label>
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="email"
          name="email-address"
          id="email-address"
          onChange={onEmailChange}
        />
      </div>
    </>
  );
};
const Password = ({ onPasswordChange }) => {
  return (
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">
        Password
      </label>
      <input
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="password"
        name="password"
        id="password"
        onChange={this.onPasswordChange}
      />
    </div>
  );
};

const SigninButton = () => {
  return (
    <div className="">
      <input
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
        value="Register"
        onClick={this.onSubmitSignIn}
      />
    </div>
  );
};

const RegisterLink = ({ onRouteChange }) => {
  return (
    <div className="lh-copy mt3">
      <p
        onClick={() => onRouteChange("register")}
        className="f6 link dim black db pointer"
      >
        Register
      </p>
    </div>
  );
};
export { FieldSet, Form, SigninButton, Email, Name, Password, RegisterLink };
