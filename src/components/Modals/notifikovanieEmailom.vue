<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6"><b>Ohodnotenie úspešné</b></div>
            <q-space />
        </q-card-section>

        <q-card-section class="q-pt-none">
           Ohodnotenie bolo uspešné. Poistenec bude notifikovaný na email.
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup @click="vratNaVsetky()"/>
        </q-card-actions>
    </q-card>
</template>
<script>
export default {
  methods: {
    async vratNaVsetky () {
      this.$router.push({ name: 'employee' })
    }
  }
}
</script>
