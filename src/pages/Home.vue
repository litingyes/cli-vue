<script setup lang="ts">
import { TuiNewline } from 'vue-termui'
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
    <TuiNewline :n="1" />
    <Text>
      [Enter] to start
    </Text>
  </div>
</template>
