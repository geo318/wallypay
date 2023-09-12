import { alta, tbc, crystal, euroc, identomat, mc, cryptal } from '/public'

export const usePartners = () => {
  const partners = [
    [mc, euroc, crystal, identomat],
    [tbc, cryptal, mc, alta],
  ]
  return { partners }
}
