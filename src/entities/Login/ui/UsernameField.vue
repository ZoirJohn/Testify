<script setup lang="ts">
const { t } = useI18n()
const requiredMsg = useChangeCase(t('auth.loginUsernameRequired'), 'sentenceCase')
const inputLabel = useChangeCase(t('auth.loginUsernameLabel'), 'sentenceCase')

function required(value: string) {
  if (!value) {
    return requiredMsg.value
  }
}
const rules = [required]
</script>

<template>
  <TextField :rules="rules" :label="inputLabel" />
</template>

<style scoped></style>
