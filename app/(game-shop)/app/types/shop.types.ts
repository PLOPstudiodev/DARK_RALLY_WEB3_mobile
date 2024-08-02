export interface ICollectible {
  tokenId: string,
  name: string,
  description: string,
  image: string
  properties: { [key: string]: any };
  attributes: [],
  updatedAt: string
}

export interface INftCard {
  balance?: string
  tokenId: string
  name: string
  price: string
  serie: string
  image: string
  categorie?: string,
  supply?: number,
  properties?: {
    handling: string
    speed: string
    aceleration: string
    weight: string
    overpower: string
  }
} 