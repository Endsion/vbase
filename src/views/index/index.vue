<template>
  <div>
    <router-link to="/list">
      {{ text }}
    </router-link>
    <div @click="addCount">{{ counterStore.count }}</div>
    <div>{{ count }}</div>
    <div>{{ counterStore.isSing }}</div>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const text = 'index'

const addCount = () => {
  ++counterStore.count
  counterStore.$patch({ count: ++counterStore.count })
  counterStore.increment()
}
</script>
