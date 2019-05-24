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
    verifyTxData: undefined,
  };

  onSubmit = () => {
    this.setState({
      verifyTxData: true,
    });
  };

  onVerifiedSubmit = () => {
    this.props.actions.router.goToRoute.trigger({ route: ROUTES.WALLETS.SEND });
  };

  render() {

    const {verifyTxData} = this.state;

    if (verifyTxData) {
      return (
        <URIVerifyDialog
          onSubmit={this.onSubmit}
          onClose={this.props.onClose}
          address={this.props.address}
          amount={this.props.amount}
        />
      );
    }

    return (
      <URILandingDialog
        onSubmit={this.onSubmit}
        onClose={this.props.onClose}
        address={this.props.address}
        amount={this.props.amount}
      />
    );


  }

}
