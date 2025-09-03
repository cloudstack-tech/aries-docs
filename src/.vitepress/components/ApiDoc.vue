<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter: fm } = useData()

const base = computed(() => {
    return fm.value.base
})
</script>

<template>
    <div class="api-doc">
        {{ base.title }}
        <slot />
    </div>
</template>

<style></style>