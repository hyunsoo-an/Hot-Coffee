export interface GoogleDistanceAPIResult {
  destination_addresses: string[]
  origin_addresses: string[]
  rows: Row[]
  status: string
}

export interface Row {
  elements: Element[]
}

export interface Element {
  distance: ElementResult
  duration: ElementResult
  status: string
}

export interface ElementResult {
  text: string
  value: number
}
