// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class AccountSetup extends Component {
  constructor(props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
  }

  updateProperty(key, value) {
    console.log(key, value);
  }
}

export default AccountSetup;
