// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ROUTES } from '../../routes-config';
import { getUrlParameterByName } from '../../utils/routing';
import type { InjectedProps } from '../../types/injectedPropsType';
import URILandingDialogContainer from './URILandingDialogContainer'

type Props = InjectedProps;

// just for testing purposes. this logic doesn't belong here
const url = decodeURIComponent(window.location.href);
console.log(url);
const addRegex = new RegExp('cardano:([A-Za-z0-9]+)\?');
const addMatch = addRegex.exec(url);
const amountRegex = new RegExp('amount=([0-9]+\.?[0-9]*)');
const amountMatch = amountRegex.exec(url);
let address = '';
let amount = '';
if (!addMatch && !amountMatch) {
  console.error("can't retrieve parameters!");
} else {
  address = addMatch[1];
  amount = amountMatch[1];
  console.log(address);
  console.log(amount);
}

@observer
export default class URILandingPage extends Component<Props> {

  onClose = () => {
    // this.props.actions.dialogs.closeActiveDialog.trigger();
  };

  render() {
    return (
      <URILandingDialogContainer
        onClose={this.onClose}
        address={address}
        amount={amount}
      />
    );
  }

}
