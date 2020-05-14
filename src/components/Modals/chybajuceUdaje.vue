<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6"><b>Chyba</b></div>
            <q-space />
            <q-btn
                v-close-popup
                flat
                round
                dense
                icon="close" />
        </q-card-section>

        <q-card-section class="q-pt-none">
           Niektoré údaje chýbajú. Prosím, vyplňte všetky údaje.
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>
<script>
export default {

}
</script>
