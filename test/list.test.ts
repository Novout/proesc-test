import { expect, test } from 'vitest'
import { useList } from '../src/use/list'

const list = useList()

test('should get correct books list', async () => {
  const target = await list.get('books')

  expect(target.length).toBe(7)
  expect(target[0].attributes.author).toBe('J. K. Rowling')
})

test('should get correct characters list', async () => {
  const target = await list.get('characters')

  expect(target.length).toBe(100)
  expect(target[0].attributes.name).toBe('1992 Gryffindor vs Slytherin Quidditch match spectators')
})

test('should get correct movies list', async () => {
  const target = await list.get('movies')

  expect(target.length).toBe(11)
  expect(target[0].attributes.directors[0]).toBe('Chris Columbus')
})

test('should get correct potions list', async () => {
  const target = await list.get('potions')

  expect(target.length).toBe(100)
  expect(target[0].attributes.name).toBe('Ageing Potion')
})

test('should get correct spells list', async () => {
  const target = await list.get('spells')

  expect(target.length).toBe(100)
  expect(target[0].attributes.name).toBe('Age Line')
})

test('should get correct specific item in list', async () => {
  const target = await list.getItem('99015cdb-bf16-4042-863a-b25b41b004f2', 'books')

  expect(target.id).toBe('99015cdb-bf16-4042-863a-b25b41b004f2')
})