export interface stock{
  stockID: number,
  itemName: string,
  itemDetail: string,
  itemPrice: number,
  quantity: number,
  location: string,
  expiryDate: Date,
  companyId: number
  }

  export interface stockCreationDTO{
  itemName: string,
  itemDetail: string,
  itemPrice: number,
  quantity: number,
  location: string,
  expiryDate: Date,
  companyId: number
  }