<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>documentation</template>

    SIMP’s
    <a href="#" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>become a simp</template>
    as an independent project originally developed by one person, SIMP relies on community backing for its sustainability. you can help
    me by
    <a href="#" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>contribute</template>
    SIMP is an open source project and welcomes contributions. you can read more about contributing in the
    <a href="#" target="_blank" rel="noopener">GitHub repository</a> for SIMP.
  </WelcomeItem>
</template>
