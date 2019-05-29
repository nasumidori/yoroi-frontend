// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'react-polymorph/lib/components/Button';
import { ButtonSkin } from 'react-polymorph/lib/skins/simple/ButtonSkin';
import { defineMessages, intlShape } from 'react-intl';

import Dialog from '../widgets/Dialog';
import DialogCloseButton from '../widgets/DialogCloseButton';
import DialogBackButton from '../widgets/DialogBackButton';
import LocalizableError from '../../i18n/LocalizableError';

// TODO: internationalization
const messages = defineMessages({
  titleLabel: {
    id: 'wallet.send.from.uri.label',
    defaultMessage: '!!!Title',
  },
});

type Props = {
  onSubmit: Function,
  onCancel: Function,
  classicTheme: boolean,
  address: ?string,
  amount: ?number,
};

@observer
export default class URILandingDialog extends Component<Props> {

  render() {
    const { onCancel, onSubmit, classicTheme } = this.props;

    return (
      <Dialog
        title="Confirm transaction parameters"
        closeOnOverlayClick={false}
        closeButton={<DialogCloseButton />}
        classicTheme={classicTheme}
        onClose={onCancel}
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
