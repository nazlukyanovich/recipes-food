/* eslint-disable require-jsdoc */
import * as React from 'react';
import { Component } from 'react';

type AuthenticationProps = {
  operation: string;
};

export default class Authentication extends Component<
  AuthenticationProps,
  unknown
> {
  render(): any {
    return <div className="authentication-container"></div>;
  }
}
