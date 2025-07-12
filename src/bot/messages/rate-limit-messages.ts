export class RateLimitMessages {
  constructor() {}

  static walletWasPaused(walletAddress: string): string {
    const messageText = `
Am very MAD right now <code>${walletAddress}</code> is spamming to many txs per second and it will be paused for some mins
`

    return messageText
  }

  static walletWasResumed(walletAddress: string): string {
    const messageText = `
Not MAD again <code>${walletAddress}</code> has been resumed from sleeping after 2 hours!
        `

    return messageText
  }

  static walletWasBanned(walletAddress: string): string {
    const messageText = `
Werey <code>${walletAddress}</code> was banned and no longer being tracked due to hard spamming txs
`

    return messageText
  }
}
