export type ListType = 'books' | 'characters' | 'movies' | 'potions' | 'spells'

export interface Item {
  id: string
  type: string
  links: {
    self: string
  }
}

export interface BookItem extends Item {
  attributes: Partial<{
    author: string,
    cover: string,
    dedication: string
    pages: number
    release_date: string
    slug: string
    summary: string
    title: string
    wiki: string
    [key: string]: any
  }>
  relationships: {
    chapters: {
      id: string,
      type: string
    }[]
  }
}

export interface CharacterItem extends Item {
  attributes: Partial<{
    name: string,
    slug: string
    wiki: string
    family_members: string[]
    gender: string
    [key: string]: any
  }>
}

export interface MovieItem extends Item {
  attributes: Partial<{
    title: string,
    slug: string
    wiki: string
    family_members: string[]
    gender: string
    [key: string]: any
  }>
}

export interface SpellItem extends Item {
  attributes: Partial<{
    characteristics: string
    difficulty: string
    effect: string
    image: string
    ingredients: string
    inventors: string
    manufacturers: string
    name: string
    side_effects: string
    slug: string
    time: string
    wiki: string
    [key: string]: any
  }>
}


export interface PotionItem extends Item {
  attributes: Partial<{
    category: string
    creator: string
    effect: string
    hand: string
    image: string
    incantation: string
    light: string
    name: string
    slug: string
    wiki: string
    [key: string]: any
  }>
}

export type ListItem = BookItem | CharacterItem | MovieItem | SpellItem