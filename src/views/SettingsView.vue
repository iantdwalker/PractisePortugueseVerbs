<template>
  <div class="settings-div">
    <v-container>
      <v-row align="center">
        <v-col cols="2">
          <font-awesome-icon icon="cog" class="icon" />
        </v-col>
        <v-col cols="10">
          <div>Settings</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="divider">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row align="center" pb="10">
        <v-col>
          <div class="app-theme-label">App theme:</div>
          <ThemeButton />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col>
          <v-radio-group label="App language:" hide-details>
            <v-radio
              disabled
              :label="language.name"
              :value="language.name"
              v-for="language in languages"
              :key="language.name"
            ></v-radio>
            <!-- <v-radio label="English" :value="english" name="language"></v-radio>
            <v-radio label="Portuguese" :value="portuguese" name="language"></v-radio> -->
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col>
          <v-radio-group
            v-model="feedback"
            label="Answer feedback:"
            hide-details
          >
            <v-radio disabled label="On submit" value="submit"></v-radio>
            <v-radio disabled label="On tab" value="tab"></v-radio>
            <v-radio disabled label="On type" value="input"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-switch
          disabled
          v-model="showVerbHint"
          class="ms-2"
          color="green-lighten-2"
          label="Show verb hint off/on"
          hide-details
        ></v-switch>
      </v-row>
      <v-row align="center">
        <v-switch
          disabled
          v-model="acceptAltVerbs"
          class="ms-2"
          color="green-lighten-2"
          label="Accept alternative verbs off/on"
          hide-details
        ></v-switch>
      </v-row>
      <v-row align="center">
        <v-switch
          disabled
          v-model="timer"
          class="ms-2"
          color="green-lighten-2"
          label="Timer off/on"
          hide-details
        ></v-switch>
      </v-row>
      <v-row align="center">
        <v-switch
          disabled
          v-model="autoAdvance"
          class="ms-2"
          color="green-lighten-2"
          label="Auto advance off/on"
          hide-details
        ></v-switch>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ThemeButton from "@/components/ThemeButton.vue";
const languages = reactive([{ name: "English" }, { name: "Portuguese" }]);
var feedback = ref("submit");
var showVerbHint = ref(true);
var acceptAltVerbs = ref(false);
var timer = ref(false);
var autoAdvance = ref(false);
</script>

<style scoped>
.settings-div {
  min-height: 100vh;
  color: var(--color-text);
  background-color: var(--color-background);
}

.divider {
  padding-top: 3px;
  padding-bottom: 3px;
}

.icon {
  font-size: 2em;
}

.app-theme-label {
  margin-bottom: 10px;
}
</style>
