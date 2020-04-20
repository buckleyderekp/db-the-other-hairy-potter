let primaryKeyForAPieceOfPottery = 1

export const makePottery = (shapeparam, weightparam, heightparam) => {
  return {
      shape: shapeparam,
      weight: weightparam,
      height: heightparam,
      id: primaryKeyForAPieceOfPottery += 1
  }
}