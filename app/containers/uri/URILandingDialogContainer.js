// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import environment from '../../environment';
import type { InjectedDialogContainerProps } from '../../../types/injectedPropsType';

import URILandingDialog from '../../components/uri/URILandingDialog';

import { Logger } from '../../utils/logging';

type Props = InjectedDialogContainerProps;

@observer
export default class URILandingDialogContainer extends Component<Props> {

  render() {

    return(
      <URILandingDialog
        onClose={this.props.onClose}
        address={this.props.address}
        amount={this.props.amount}
      />
    );

  }

}
