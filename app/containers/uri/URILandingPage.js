// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ROUTES } from '../../routes-config';
import environment from '../../environment';
import { getUrlParameterByName } from '../../utils/routing';
import type { InjectedProps } from '../../types/injectedPropsType';
import URILandingDialogContainer from './URILandingDialogContainer'

type Props = InjectedProps;

@observer
export default class URILandingPage extends Component<Props> {

  onClose = () => {
    this.props.actions.dialogs.closeActiveDialog.trigger();
    this.props.actions.router.goToRoute.trigger({ route: ROUTES.WALLETS.ADD });
  };

  onConfirm = () => {
    const { wallets } = this.props.stores.substores[environment.API];
    let params = {};
    if (wallets.hasAnyWallets) params = { id: wallets.first.id };
    this.props.actions.router.goToRoute.trigger({
      route: ROUTES.WALLETS.SEND,
      params: params
    });
  }

  render() {

    return (
      <URILandingDialogContainer
        onConfirm={this.onConfirm}
        onClose={this.onClose}
        address={this.props.stores.loading.uriParams.address}
        amount={this.props.stores.loading.uriParams.amount}
      />
    );
  }

}
