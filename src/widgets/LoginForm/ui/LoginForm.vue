<script setup lang="ts">
const {xs} = useDisplay()
</script>

<template>
  <v-form class="d-flex">
    <v-card
      class="d-flex flex-column ga-4 pa-8 items-center justify-center align-self-center"
      :width="xs?375:425"
    >
      <UsernameField />
      <PasswordField />
      <v-btn class="flex-grow-0 align-self-end text-capitalize bg-blue-grey-darken-3">{{
        $t('auth.loginButtonLabel')
      }}</v-btn>
    </v-card>
  </v-form>
</template>

<style scoped></style>
