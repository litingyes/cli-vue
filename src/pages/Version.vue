<script setup lang="ts">
import { useRouter } from 'vue-router'
import pkgInfo from '../../package.json'

const router = useRouter()

onKeyData(['Backspace', 'Delete'], () => {
  router.push('/nav')
})

const version = pkgInfo.version ?? 'unknown'
</script>

<template>
  <Box
    :width="80" :height="10"
    border-style="round"
    class="flex-row justify-center items-center gap-2"
  >
    <Text>
      The current version is:
    </Text>
    <Text bold color="greenBright">
      {{ version ?? 'unknown' }}
    </Text>
  </Box>
</template>
