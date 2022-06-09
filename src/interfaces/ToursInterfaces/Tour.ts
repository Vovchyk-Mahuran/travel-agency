export interface Tour {
  id: string,
  name: string,
  photo: string,
  price: number,
  description?: string,
  pets?: boolean,
  exstras?: Array<string>,
  from?: string,
  to?: string,
  discount?: number,
  breakfast?:boolean,
}