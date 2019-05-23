// @flow
export const ROUTES = {
  ROOT: '/',
  NO_WALLETS: '/no-wallets',
  PROFILE: {
    LANGUAGE_SELECTION: '/profile/language-selection',
    TERMS_OF_USE: '/profile/terms-of-use',
  },
  WALLETS: {
    ROOT: '/wallets',
    ADD: '/wallets/add',
    PAGE: '/wallets/:id/:page',
    TRANSACTIONS: '/wallets/:id/transactions',
    SEND: '/wallets/:id/send',
    RECEIVE: '/wallets/:id/receive',
  },
  SETTINGS: {
    ROOT: '/settings',
    WALLET: '/settings/wallet',
    GENERAL: '/settings/general',
    PAPER_WALLET: '/settings/paper-wallet',
    DISPLAY: '/settings/display',
    TERMS_OF_USE: '/settings/terms-of-use',
    SUPPORT: '/settings/support',
    ABOUT_YOROI: '/settings/about-yoroi',
    ADA_REDEMPTION: '/settings/ada-redemption',
  },
  DAEDALUS_TRANFER: {
    ROOT: '/daedalus-transfer',
  },
  SEND_FROM_URI: {
    ROOT: '/send-from-uri',
  },
};
