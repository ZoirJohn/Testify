<script setup lang="ts">
const { t } = useI18n()
const requiredMsg = useChangeCase(t('auth.loginPasswordRequired'), 'sentenceCase')
const inputLabel = useChangeCase(t('auth.loginPasswordLabel'), 'sentenceCase')

function required(value: string) {
  if (!value) {
    return requiredMsg.value
  }
}
const rules = [required]
</script>

<template>
  <TextField type="password" :label="inputLabel" :rules="rules" />
</template>

<style scoped></style>
