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
  { desc: 'card', Icon: CardIcon },
  { desc: 'topUp', Icon: TopUpIcon },
  { desc: 'wallet', Icon: WalletIcon },
  { desc: 'utilities', Icon: UtilitiesIcon },
  { desc: 'loan', Icon: LoanIcon },
  { desc: 'transfer', Icon: TransferIcon },
] as const
