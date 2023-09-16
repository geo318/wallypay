import {
  CardIcon,
  DownloadIcon,
  LoanIcon,
  RegisterIcon,
  TopUpIcon,
  TransferIcon,
  UtilitiesIcon,
  WalletIcon,
} from '/components/icons'

export const highlights = [
  { desc: 'download', Icon: DownloadIcon },
  { desc: 'register', Icon: RegisterIcon },
  { desc: 'topUp', Icon: TopUpIcon },
  { desc: 'wallet', Icon: WalletIcon },
  { desc: 'utilities', Icon: UtilitiesIcon },
  { desc: 'loan', Icon: LoanIcon },
  { desc: 'card', Icon: CardIcon },
  { desc: 'transfer', Icon: TransferIcon },
] as const
