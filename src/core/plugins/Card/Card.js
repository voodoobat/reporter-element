import { createApp } from 'vue'

import CardView from './CardView.vue'
import icon from './svg/card.svg?raw'

export default class Card {
  static get toolbox() {
    return {
      title: 'Card',
      icon,
    }
  }

  constructor({ data }) {
    this.data = data || {}
  }

  updateData(blockData) {
    this.data = { ...this.data, ...blockData }
  }

  render() {
    const root = document.createElement('div')
    createApp(CardView, {
      blockData: this.data,
      handler: this.updateData,
    }).mount(root)

    return root
  }

  save() {
    return this.data
  }
}
