<script lang="ts" setup>
import { TuiLink, isKeyDataEvent } from 'vue-termui'

const stop = onInputData(({ event }) => {
  if (isKeyDataEvent(event)) {
    if (event.key === 'C' && event.ctrlKey) {
      stop()
      process.exit(0)
    }
  }
})
</script>

<template>
  <Box>
    <RouterView />
  </Box>
  <Box :width="80" class="justify-end">
    <TuiLink
      href="https://github.com/liting-yes/cli.git" :fallback="false"
      :inverse="false"
    >
      GitHub
    </TuiLink>
  </Box>
</template>
