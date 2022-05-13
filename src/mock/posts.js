import { LoremIpsum } from 'lorem-ipsum'
import { getRandomInt, getRandomDate } from '~/core/lib/getRandom'
import { format } from 'fecha'

const lorem = new LoremIpsum()

export const generate = (count = 10) => {
  return Array.from({ length: count }).map((key) => ({
    id: key,
    title: lorem.generateWords(getRandomInt(10)),
    content: lorem.generateParagraphs(getRandomInt(15)),
    created: format(getRandomDate(), 'MM.DD.YYYY'),
    updated: format(getRandomDate(), 'MM.DD.YYYY'),
  }))
}
