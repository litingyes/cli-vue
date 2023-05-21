<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

onKeyData(['Backspace', 'Delete'], () => {
  router.push('/')
})

const navMap = [
    {
        label: 'version',
        path: '/version',
    },
]
const total = navMap.length
const selectedNav = ref(0)
onKeyData(['ArrowLeft'], () => {
    selectedNav.value = (selectedNav.value - 1 + total) % total
})
onKeyData(['ArrowRight', 'Tab'], () => {
    selectedNav.value = (selectedNav.value + 1) % total
})
onKeyData(['Enter'], () => {
  router.push(navMap[selectedNav.value].path)
})
</script>

<template>
  <Box title="Nav" :width="80" :height="10" border-style="round" class="flex-col p-2">
    <Box v-for="(item, i) in navMap" :key="item.label" :width="15" :height="3" :border-color="i === selectedNav ? 'yellow' : 'white'">
      <Text :color="i === selectedNav ? 'yellow' : 'white'">
        {{ item.label }}
      </Text>
    </Box>
  </Box>
</template>
