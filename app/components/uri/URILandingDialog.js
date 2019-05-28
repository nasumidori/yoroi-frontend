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
  uriLandingDialogTitle: {
    id: 'uri.landing.dialog.title',
    defaultMessage: '!!!Please read the following information',
  },
  uriLandingDialogWarningText: {
    id: 'uri.landing.dialog.warning.text',
    defaultMessage: "!!!You are about to perform a transaction from a URI link. Before continuing, please make sure you are on Yoroi's official app, and that you are not being victim of a phishing or man-in-the-middle attack.",
  },
  uriLandingDialogConfirmLabel: {
    id: 'uri.landing.dialog.confirm.label',
    defaultMessage: "!!!I understand",
  },
});

type Props = {
  onSubmit: Function,
  onClose: Function,
  error?: ?LocalizableError,
  classicTheme: boolean,
};

@observer
export default class URILandingDialog extends Component<Props> {

  static defaultProps = {
    onSubmit: undefined,
    onClose: undefined,
    error: undefined,
    classicTheme: true
  }

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  submit = () => {
    this.props.onSubmit();
  };

  render() {
    const { onClose, classicTheme } = this.props;

    return (
      <Dialog
        title={this.context.intl.formatMessage(messages.uriLandingDialogTitle)}
        closeOnOverlayClick={false}
        closeButton={<DialogCloseButton />}
        classicTheme={classicTheme}
        onClose={onClose}
      >
        <div>
            <p>
              {this.context.intl.formatMessage(messages.uriLandingDialogWarningText)}
            </p>
            <Button
              label={this.context.intl.formatMessage(messages.uriLandingDialogConfirmLabel)}
              onMouseUp={this.submit}
              disabled={false}
              skin={ButtonSkin}
            />
        </div>
      </Dialog>
    );
  }

}
