export type States = {
    id: string,
    name:string,
    uf:string
}
export type Meansurement = {
  id: string
  name: string
  initials: string
}

export type Shelves = {
  id: string
  name: string
}

export type Corridors = {
  id: string
  name: string
}

export type ProductForm = {
  batchNumber: string,
  name: string,
  date_validation: Date,
  category: string,
  brand: string,
  price: number,
  quantity: number,
  transaction_date: Date,
  purchase_price: number,
  sale_price: number,
  supplier: string,
  user: string,
}

export type TransacationForm = {
  type: string,
  batchNumber: string,
  productName: string,
  purchase_price: number,
  sale_price: number,
  quantity: number,
  transaction_date: Date,
  user: string,
  supplier: string,
}
