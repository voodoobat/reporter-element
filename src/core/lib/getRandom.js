/**
 * getRandomInt
 * @param max {Number}
 * @returns {Number}
 */
export const getRandomInt = (max = 10) => {
  return Math.floor(Math.random() * (max + 1))
}

/**
 * getRandomDate
 * @param start {Date}
 * @param end {Date}
 * @returns {Date}
 */
export const getRandomDate = (
  start = new Date(2010, 0, 1),
  end = new Date()
) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}
