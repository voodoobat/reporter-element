import { LoremIpsum } from 'lorem-ipsum'
import { getRandomInt, getRandomDate } from '~/core/lib/getRandom'

const lorem = new LoremIpsum()

export const generate = (count = 10) => {
  return Array.from({ length: count }).map((key) => ({
    id: key,
    title: lorem.generateWords(getRandomInt(10)),
    content: lorem.generateParagraphs(getRandomInt(15)),
    created: getRandomDate(),
    updated: getRandomDate(),
  }))
}
