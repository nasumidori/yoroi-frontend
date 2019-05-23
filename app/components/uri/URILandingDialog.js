// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { Button } from 'react-polymorph/lib/components/Button';
import { ButtonSkin } from 'react-polymorph/lib/skins/simple/ButtonSkin';
import { defineMessages, intlShape } from 'react-intl';
import { Checkbox } from 'react-polymorph/lib/components/Checkbox';
import { CheckboxSkin } from 'react-polymorph/lib/skins/simple/CheckboxSkin';

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
  isSubmitting: boolean,
  error?: ?LocalizableError,
};

type State = {
  warningConfirmed: boolean,
};

@observer
export default class URILandingDialog extends Component<Props, State> {

  submit = () => {
    // this.props.onSubmit();
    console.log("submit pressed")
  };

  render() {
    const { onCancel } = this.props;
    let checkBoxInit = false;

    return (
      <Dialog
        title="Confirm transaction parameters "
        closeOnOverlayClick={false}
        closeButton={<DialogCloseButton />}
        classicTheme={true}
        onCancel={this.props.onClose}
      >
        <div>
          <div>
            <p>Please confirm the amount and recipient address<br />
            Address: {this.props.address} <br />
            Amount: {this.props.amount} <br />
            </p>
            <Button
              label={"Confirm"}
              onMouseUp={this.submit}
              disabled={!checkBoxInit}
              skin={ButtonSkin}
            />
          </div>
        </div>
      </Dialog>
    );
  }

}
