<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6"><b>Chyba</b></div>
            <q-space />
        </q-card-section>

        <q-card-section class="q-pt-none">
           Odhadovaná suma je neadekvátna. Posúvam na posúdenie manažérovi.
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
