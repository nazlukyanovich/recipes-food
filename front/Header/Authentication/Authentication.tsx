import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Authentication.css';

interface AuthenticationProps extends RouteComponentProps {
  operation: string;
}

export const Authentication = ({
  history,
  operation,
}: AuthenticationProps): any => {
  return (
    <div className="authentication-container-fade">
      <div className="authentication-container">
        {operation}
        <span
          className="authentication-container-close"
          onClick={() => history.push('/')}
        >
          &times;
        </span>
      </div>
    </div>
  );
};
