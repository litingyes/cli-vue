<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

onKeyData(['Enter'], () => {
  router.push('/nav')
})
</script>

<template>
  <div
    title="liting-yes"
    :width="80"
    :height="10"
    border-style="round"
    flex-direction="column"
    align-items="center"
    justify-content="center"
  >
    <Text color="#ea580c" bold>
      Welcome to Liting Cli 🎉
    </Text>
  </div>
</template>
