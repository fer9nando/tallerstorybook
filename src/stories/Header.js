import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './header.scss';

/**
 * Header de la aplicacion sus estilos se basaron en [esta pagina](https://www.google.com.mx/)
 */
export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>EMEEFE</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
   /**
   * User
   */
  user: PropTypes.shape({}),
   /**
   * Is this the principal call to action on the page?
   */
  onLogin: PropTypes.func.isRequired,
   /**
   * Is this the principal call to action on the page?
   */
  onLogout: PropTypes.func.isRequired,
   /**
   * Is this the principal call to action on the page?
   */
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
