import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  getters: {
    isSing: () => {
      const userStore = useUserStore()
      return userStore.isSing
    },
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
