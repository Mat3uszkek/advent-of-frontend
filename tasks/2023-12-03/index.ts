export interface Lokalizacja {
  x: number
  y: number
  z:number
  czas: number
}

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number

const getMapValue = ({ x, y, z ,czas }: Lokalizacja, cb: MapaCzasoprzestrzenna) => cb(x, y, z, czas)

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
  if (lokalizacje.length === 0) {
    return null
  }

  let biggestMap: Lokalizacja = lokalizacje[0]

  for(let i = 0; i < lokalizacje.length; i++) {
    const result = getMapValue(lokalizacje[i], mapa)

    if(!result) {
      return null
    }

    if(result > getMapValue(biggestMap, mapa)) {
       biggestMap = lokalizacje[i]
    }
  }

  return biggestMap
}
