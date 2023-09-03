<template>
  <v-row no-gutters>
    <v-col cols="2"></v-col>
    <v-col>
      <img
        alt="Flag Image"
        class="flag-image"
        src="@/assets/images/Flags_of_Brazil_and_Portugal.svg"
        width="175"
        height="125"
      />
    </v-col>
    <v-col cols="2">
      <ToolbarComponent>
        <SettingsView />
      </ToolbarComponent>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col>
      <div class="wrapper">
        <HeadingMessages msg="Practise Portuguese Verbs" />
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import ToolbarComponent from "@/components/ToolbarComponent.vue";
import SettingsView from "@/views/SettingsView.vue";
import HeadingMessages from "@/components/HeadingMessages.vue";
</script>

<style scoped>
.flag-image {
  display: block;
  margin: auto;
}

@media (min-width: 1024px) {
  .flag-image {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
