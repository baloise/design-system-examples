<script setup lang="ts">
import { ref } from "vue";
import {
  BalApp,
  BalFooter,
  BalHeading,
  BalNavbar,
  BalNavbarBrand,
  BalLogo,
  BalText,
  BalStage,
  BalStageBody,
  BalStageImage,
  BalCard,
  BalCardTitle,
  BalCardSubtitle,
  BalCardContent,
} from "@baloise/design-system-next-components-vue";
import {
  onBalConfigChange,
  BalConfigState,
  BalSwissLanguage,
} from "@baloise/design-system-next-components";
import PropertyComponent from "./components/Property.vue";
import EventComponent from "./components/Event.vue";
import MethodComponent from "./components/Method.vue";

const title = ref("Welcome");

onBalConfigChange((config: BalConfigState) => {
  const language = config.language as BalSwissLanguage;
  switch (language) {
    case "de":
      title.value = "Willkommen";
      break;
    case "it":
      title.value = "Benvenuta";
      break;
    case "fr":
      title.value = "Bienvenue";
      break;
    default:
      title.value = "Welcome";
      break;
  }
});
</script>

<template>
  <BalApp class="has-sticky-footer has-background">
    <header>
      <BalNavbar>
        <BalNavbarBrand>Vue Example</BalNavbarBrand>
      </BalNavbar>
      <BalStage color="green" size="small">
        <BalStageBody>
          <div class="container is-compact">
            <BalHeading space="none" data-testid="welcome-title">{{
              title
            }}</BalHeading>
            <BalHeading space="none" subtitle level="h2">
              To the Baloise Design System
            </BalHeading>
          </div>
        </BalStageBody>
      </BalStage>
    </header>
    <main class="container is-compact">
      <BalCard class="mt-6">
        <BalCardTitle>Property example</BalCardTitle>
        <BalCardSubtitle>
          A little demonstration how to change properties of our components
        </BalCardSubtitle>
        <BalCardContent>
          <PropertyComponent />
        </BalCardContent>
      </BalCard>

      <BalCard class="mt-6">
        <BalCardTitle>Event example</BalCardTitle>
        <BalCardSubtitle>
          A short example how to use the events of our components
        </BalCardSubtitle>
        <BalCardContent>
          <EventComponent />
        </BalCardContent>
      </BalCard>

      <BalCard class="mt-6">
        <BalCardTitle>Method example</BalCardTitle>
        <BalCardSubtitle>
          A tiny use case of how to call the components methods
        </BalCardSubtitle>
        <BalCardContent>
          <MethodComponent />
        </BalCardContent>
      </BalCard>
    </main>
    <BalFooter></BalFooter>
  </BalApp>
</template>
