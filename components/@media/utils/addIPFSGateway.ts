export const addIPFSGateway = (mediaUrl: string) => {
  if (mediaUrl.startsWith('ipfs'))
    try {
      return mediaUrl.replace(/^ipfs?:\/\//, 'https://zora-prod.mypinata.cloud/ipfs/')
    } catch (err) {
      return mediaUrl
    }
  else {
    return mediaUrl
  }
}
