import { LoremIpsum } from 'lorem-ipsum'
import { getRandomInt, getRandomDate } from '~/core/lib/getRandom'
import { format } from 'fecha'
import { uid } from 'uid'

const lorem = new LoremIpsum()

export const posts = ((count) => {
  return Array.from({ length: count }).map(() => ({
    id: uid(),
    title: lorem.generateWords(getRandomInt(10)),
    content: lorem.generateParagraphs(getRandomInt(15)),
    created: format(getRandomDate(), 'MM.DD.YYYY'),
    updated: format(getRandomDate(), 'MM.DD.YYYY'),
  }))
})(20)
