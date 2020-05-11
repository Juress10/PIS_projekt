<template>
  <q-page class="flex flex-center bg-cyan-8"> <!-- odstran nastavenie usera-->
    <img
      class="logo-rotation"
      alt="Vue logo"
      src="~assets/car_logo.png"
      style="width: 500px;"
      v-on:click="setUser()"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    setUser () {
      this.$store.commit('store/setUser', { id: '1', meno: 'Lenka', pozicia: 'h' })
    }
  }
}
</script>

<style>
.logo-rotation:before {
    height:80px;
    width:80px;
    background:#c00;
    content:"";
    position:absolute;

    -moz-transform:rotate(30deg);
    -webkit-transform:rotate(30deg);
    -o-transform:rotate(30deg);
    transform:rotate(30deg);
}
.logo-rotation:after {
    height:80px;
    width:80px;
    background:#c00;
    content:"";
    position:absolute;
    -moz-transform:rotate(-30deg);
    -webkit-transform:rotate(-30deg);
    -o-transform:rotate(-30deg);
    transform:rotate(-30deg);
}
.logo-rotation:hover {
    -moz-transform:rotate(-20deg);
    -webkit-transform:rotate(-20deg);
    -o-transform:rotate(-20deg);
    transform:rotate(-20deg);
}
</style>
