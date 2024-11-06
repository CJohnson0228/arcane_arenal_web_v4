export const artisans: string[] = [
  'amethyst-m.png',
  'amethyst-f.png',
  'black-m.png',
  'black-f.png',
  'blue-m.png',
  'blue-f.png',
  'brass-m.png',
  'brass-f.png',
  'bronze-m.png',
  'bronze-f.png',
  'copper-m.png',
  'copper-f.png',
  'crystal-m.png',
  'crystal-f.png',
  'emerald-m.png',
  'emerald-f.png',
  'gold-m.png',
  'gold-f.png',
  'green-m.png',
  'green-f.png',
  'red-m.png',
  'red-f.png',
  'sapphire-m.png',
  'sapphire-f.png',
  'silver-m.png',
  'silver-f.png',
  'topaz-m.png',
  'topaz-f.png',
  'white-m.png',
  'white-f.png',
]

export function getArtisanIndex() {
  const index = Math.floor(Math.random() * 30)
  return index
}