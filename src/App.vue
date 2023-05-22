<script lang="ts" setup>
import { TuiLink, isKeyDataEvent } from 'vue-termui'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = computed(() => route.name as string)

const tip = computed(() => {
  if (routeName.value === 'Home')
    return '[Enter] Start'
  else if (routeName.value === 'Nav')
    return '[Enter] Select | [←] Back'
  else if (['Version', 'Eslint'].includes(routeName.value))
    return '[←] Back'
  else
    return ''
})

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
  <Box :width="80" class="flex justify-between">
    <Text dimmed>
      {{ tip }}
    </Text>
    <TuiLink
      href="https://github.com/liting-yes/cli.git" :fallback="false"
      :inverse="false"
    >
      GitHub
    </TuiLink>
  </Box>
</template>
