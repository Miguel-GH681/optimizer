export interface Floor {
    image: Image
    name: String
    _id: string
    code: string
    material: string
    floorDimensions: string
    brand: string
    madeIn: string
    boxPerformance: number
    typeOfUse: string
    piecesPerBox: string
    __v: number
  }
  
  export interface Image {
    url: string
    id: string
  }
  