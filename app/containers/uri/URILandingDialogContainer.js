// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import environment from '../../environment';
import type { InjectedDialogContainerProps } from '../../../types/injectedPropsType';
import { ROUTES } from '../../routes-config';

import URILandingDialog from '../../components/uri/URILandingDialog';
import URIVerifyDialog from '../../components/uri/URIVerifyDialog';

import { Logger } from '../../utils/logging';

type Props = InjectedDialogContainerProps;

@observer
export default class URILandingDialogContainer extends Component<Props> {

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

    const {verifyTxData} = this.state;

    if (verifyTxData) {
      return (
        <URIVerifyDialog
          onSubmit={this.onVerifiedSubmit}
          onClose={this.props.onClose}
          onCancel={this.cancelVerification}
          address={this.props.address}
          amount={this.props.amount}
        />
      );
    }

    return (
      <URILandingDialog
        onSubmit={this.onSubmit}
        onClose={this.props.onClose}
        onCancel={this.onCancel}
        address={this.props.address}
        amount={this.props.amount}
      />
    );


  }

}
