// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { Button } from 'react-polymorph/lib/components/Button';
import { ButtonSkin } from 'react-polymorph/lib/skins/simple/ButtonSkin';
import { defineMessages, intlShape } from 'react-intl';

import Dialog from '../widgets/Dialog';
import DialogCloseButton from '../widgets/DialogCloseButton';
import DialogBackButton from '../widgets/DialogBackButton';
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
  error?: ?LocalizableError,
};

type State = {
  warningConfirmed: boolean,
};

@observer
export default class URILandingDialog extends Component<Props, State> {

  render() {
    const { onCancel, onSubmit } = this.props;

    return (
      <Dialog
        title="Confirm transaction parameters"
        closeOnOverlayClick={false}
        closeButton={<DialogCloseButton />}
        classicTheme={true}
        onClose={this.props.onClose}
        backButton={<DialogBackButton onBack={onCancel} />}
      >
        <div>
          <div>
            <p>Please confirm the amount and recipient address<br />
            Address: {this.props.address} <br />
            Amount: {this.props.amount} <br />
            </p>
            <Button
              label="Sounds good, take me to my wallet"
              onMouseUp={onSubmit}
              disabled={false}
              skin={ButtonSkin}
            />
          </div>
        </div>
      </Dialog>
    );
  }

}
