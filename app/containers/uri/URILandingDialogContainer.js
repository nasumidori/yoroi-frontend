// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import type { InjectedDialogContainerProps } from '../../types/injectedPropsType';
import { ROUTES } from '../../routes-config';

import URILandingDialog from '../../components/uri/URILandingDialog';
import URIVerifyDialog from '../../components/uri/URIVerifyDialog';

import { Logger } from '../../utils/logging';

type Props = InjectedDialogContainerProps & {
  onConfirm: Function,
  address: ?string,
  amount: ?number,
};
type URIDialogState = {
  verifyTxData?: boolean,
};

@observer
export default class URILandingDialogContainer
  extends Component<Props, URIDialogState> {

  state = {
    verifyTxData: false,
  };

  onSubmit = () => {
    this.setState({
      verifyTxData: true,
    });
  };

  onVerifiedSubmit = () => {
    this.props.onConfirm();
  };

  onCancel = () => {
    this.props.onClose();
  }

  cancelVerification = () => {
    this.setState({
      verifyTxData: false,
    });
  };

  render() {

    const { verifyTxData } = this.state;

    if (verifyTxData) {
      return (
        <URIVerifyDialog
          onSubmit={this.onVerifiedSubmit}
          onCancel={this.cancelVerification}
          address={this.props.address}
          amount={this.props.amount}
          classicTheme={this.props.classicTheme}
        />
      );
    }

    return (
      <URILandingDialog
        onSubmit={this.onSubmit}
        onClose={this.onCancel}
        address={this.props.address}
        amount={this.props.amount}
        classicTheme={this.props.classicTheme}
      />
    );


  }

}
