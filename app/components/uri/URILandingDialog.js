// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { Button } from 'react-polymorph/lib/components/Button';
import { ButtonSkin } from 'react-polymorph/lib/skins/simple/ButtonSkin';
import { defineMessages, intlShape } from 'react-intl';

import Dialog from '../widgets/Dialog';
import DialogCloseButton from '../widgets/DialogCloseButton';
import LocalizableError from '../../i18n/LocalizableError';

const messages = defineMessages({
  titleLabel: {
    id: 'wallet.send.from.uri.label',
    defaultMessage: '!!!Title',
  },
});

type Props = {
  onSubmit: Function,
  onCancel: Function,
  onCancel: Function,
  error?: ?LocalizableError,
};

type State = {
  warningConfirmed: boolean,
};

@observer
export default class URILandingDialog extends Component<Props, State> {

  static defaultProps = {
    error: undefined,
    onBack: undefined,
  }

  submit = () => {
    this.props.onSubmit();
  };

  render() {
    const { onCancel, onBack } = this.props;

    return (
      <Dialog
        title="Please read the following information"
        closeOnOverlayClick={false}
        closeButton={<DialogCloseButton />}
        classicTheme={true}
        onClose={this.props.onClose}
      >
        <div>
          <div>
            <p>
              You are about to perform a transaction from a URI link.
              Before redirecting you to your wallet, please be aware that
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.

              So please make sure that duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolor.
            </p>
            <Button
              label={"I understand"}
              onMouseUp={this.submit}
              disabled={false}
              skin={ButtonSkin}
            />
          </div>
        </div>
      </Dialog>
    );
  }

}