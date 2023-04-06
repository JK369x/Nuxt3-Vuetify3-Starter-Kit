<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
const drawer = ref(null);
const themeToggler = ref(false);
watch(themeToggler, () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
});
</script>
