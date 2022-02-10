<script setup lang="ts">
import {
  BalApp,
  BalNavbar,
  BalNavbarBrand,
  BalIcon,
  BalText,
  BalFooter,
  BalTabs,
  BalTabItem,
} from '@baloise/design-system-components-vue'
import { routes } from '../router'
</script>

<template>
  <BalApp class="has-background has-sticky-footer">
    <header class="has-background-white">
      <BalNavbar no-burger>
        <BalNavbarBrand>
          <BalIcon name="logo" inverted size="large"></BalIcon>
          <BalText style="margin-left: 15px"> <strong>Vue</strong> Starter-Kit </BalText>
        </BalNavbarBrand>
      </BalNavbar>
      <div class="container">
        <BalTabs>
          <router-link
            v-for="routeItem in routes"
            :key="routeItem.name"
            :to="routeItem"
            v-slot="{ href, route, navigate, isActive }"
            exact
          >
            <BalTabItem
              :active="isActive"
              :href="href"
              :label="route.name"
              :value="route.name"
              @balNavigate="navigate"
            ></BalTabItem>
          </router-link>
        </BalTabs>
      </div>
    </header>
    <main>
      <div class="container">
        <!-- Page content -->
        <router-view />
      </div>
    </main>
    <BalFooter>
      <div class="container">
        <!-- Footer content -->
        Footer
      </div>
    </BalFooter>
  </BalApp>
</template>
