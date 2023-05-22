import { type IUser } from '@/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): IUser => {
    return {
      id: '',
      name: '',
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  getters: {
    isSing: (state) => state.id !== '',
  },
  actions: {
    increment(user: IUser) {
      this.id = user.id
      this.name = user.name
    },
  },
})
