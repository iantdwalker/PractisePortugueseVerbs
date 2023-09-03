<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

var userTheme = ref("light-theme");

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});

function getTheme(): string | null {
  return localStorage.getItem("user-theme");
}

function getMediaPreference(): string {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}

function setTheme(theme: string): void {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
}

function toggleTheme(): void {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
}
</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--color-theme-toggle-background);
  border: calc(var(--theme-toggle-element-size) * 0.025) solid
    var(--color-theme-toggle-border);
  border-radius: var(--theme-toggle-element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--theme-toggle-element-size) * 0.3);
  height: calc(var(--theme-toggle-element-size) * 0.58);
  position: relative;
  padding: calc(var(--theme-toggle-element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: 4.5rem;
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--color-background);
  border-radius: 50%;
  top: calc(var(--theme-toggle-element-size) * 0.07);
  left: calc(var(--theme-toggle-element-size) * 0.07);
  height: calc(var(--theme-toggle-element-size) * 0.4);
  width: calc(var(--theme-toggle-element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(
    calc(var(--theme-toggle-element-size) * 0.55)
  ) !important;
}
</style>
