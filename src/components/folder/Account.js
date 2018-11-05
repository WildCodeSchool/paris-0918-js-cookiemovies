
import React from 'react';

import AuthUserContext from './AuthUserContext';
import WithAuthorization from './WithAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
      </div>
    }
    </AuthUserContext.Consumer>
    
const authCondition = (authUser) => !!authUser;
export default WithAuthorization(authCondition)(AccountPage);
