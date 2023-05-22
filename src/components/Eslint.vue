<script setup lang="ts">
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { execSync } from 'node:child_process'
import { useRouter } from 'vue-router'

const router = useRouter()
onKeyData(['Backspace', 'Delete'], () => {
  router.push('/nav')
})

const root = process.cwd()

interface RunInfoItem {
  message: string
  status: 'waiting' | 'progressing' | 'success' | 'failed'
  color: 'blue' | 'yellow' | 'greenBright' | 'redBright'
  value?: string
}
const runInfo = ref<RunInfoItem[]>([
  {
    message: 'Testing of the package management system used in this project：',
    status: 'waiting',
    color: 'blue',
    value: 'npm',
  },
  {
    message: 'Download eslint and @antfu/eslint-config：',
    status: 'waiting',
    color: 'blue',
  },
  {
    message: 'Setting up the eslint configuration file：',
    status: 'waiting',
    color: 'blue',
  },
])

function start() {
  try {
    runInfo.value[0].status = 'progressing'
    runInfo.value[0].color = 'yellow'
    if (existsSync(resolve(root, 'pnpm-lock.yaml')))
      runInfo.value[0].value = 'pnpm'
    else if (existsSync(resolve(root, 'yarn.lock')))
      runInfo.value[0].value = 'yarn'
    runInfo.value[0].status = 'success'
    runInfo.value[0].color = 'greenBright'
  }
  catch (e) {
    runInfo.value[0].status = 'failed'
    runInfo.value[0].color = 'redBright'
  }

  try {
    runInfo.value[1].status = 'progressing'
    runInfo.value[1].color = 'yellow'
    if (runInfo.value[0].value === 'pnpm')
      execSync('pnpm add eslint @antfu/eslint-config -D', { encoding: 'utf8' })
    else if (runInfo.value[0].value === 'yarn')
      execSync('yarn add eslint @antfu/eslint-config -D', { encoding: 'utf8' })
    else
      execSync('npm i eslint @antfu/eslint-config -D', { encoding: 'utf8' })
    runInfo.value[1].status = 'success'
    runInfo.value[1].color = 'greenBright'
  }
  catch (e) {
    runInfo.value[1].status = 'failed'
    runInfo.value[1].color = 'redBright'
  }

  try {
    runInfo.value[2].status = 'progressing'
    runInfo.value[2].color = 'yellow'
    const eslintrcPath = resolve(root, '.eslintrc')
    writeFileSync(eslintrcPath, JSON.stringify({ extends: '@antfu' }, null, 2))
    const eslintIgnoreData = readFileSync(resolve(root, '.gitignore'), 'utf-8')
    writeFileSync(resolve(root, '.eslintignore'), eslintIgnoreData)
    runInfo.value[2].status = 'success'
    runInfo.value[2].color = 'greenBright'
  }
  catch (e) {
    runInfo.value[2].status = 'failed'
    runInfo.value[2].color = 'redBright'
  }
}
onMounted(start)
</script>

<template>
  <Box
    title="Eslint"
    :width="80" :height="10"
    border-style="round"
    class="flex-col justify-center items-start gap-2 p-2"
  >
    <Text v-for="(info, i) in runInfo" :key="i">
      {{ info.message }}
      <Text :color="info.color">
        {{ info.value ?? info.status }}
      </Text>
    </Text>
  </Box>
</template>
