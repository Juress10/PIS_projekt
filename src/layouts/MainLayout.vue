<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <router-link to="/">
        <img
          class="logo-rotation"
          alt="Vue logo"
          src="~assets/car_logo.png"
          style="width: 99px;"
          >
          </router-link>
        <q-toolbar-title>
        </q-toolbar-title>

        <q-btn unelevated rounded color="blue-grey-8" class="text-white" to="/login">Prihlásiť sa</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-4"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Hodnotiteľ',
          caption: 'Hodnotenie poistných udalostí',
          icon: 'group',
          link: '/employee'
        },
        {
          title: 'Manažér',
          caption: 'Kontrola ohodnotených poistných udalostí',
          icon: 'how_to_reg',
          link: '/login'
        }
      ]
    }
  }
}
</script>
