<template>
  <div class="q-pa-md row justify-center items-center table">
    <q-table
      title="Poistné udalosti"
      :data="data"
      :columns="columns"
      row-key="id"
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="bg-cyan-8 text-white"
          >
            {{ col.label }}
          </q-th>
          <q-th class="bg-cyan-8" auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" color="cyan-8" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props" class="bg-grey-4">
          <q-td colspan="100%">
            <div class="row justify between">
              <div class="text-left col-10 zarovnanie">{{ props.row.opis_skody }}</div>
              <q-btn unelevated rounded :to="`udalost/${ props.row.id }`" class="bg-cyan-8 col-2 text-white" size="sm">Zobraziť</q-btn>
            </div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$axios.get(this.$store.state.store.URL + '/api/udalost/all/' + this.$store.state.store.user.id)
      .then(res => {
        this.data = res.data
      })
      .catch(res => { console.log('error', res) })
  },
  data () {
    return {
      columns: [
        {
          name: 'id',
          required: false,
          label: 'id',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'datum_skody', label: 'dátum vzniknutej škody', field: 'datum_skody', sortable: true, sort: (a, b) => new Date(a) - new Date(b) },
        { name: 'datum_pridelenia', label: 'dátum pridelenia', field: 'datum_pridelenia', sortable: true },
        { name: 'poistenec_id', label: 'id poistenca', field: 'poistenec_id', sortable: true },
        { name: 'stav', label: 'stav', field: 'stav', sortable: true }
      ],
      data: []
    }
  }
}
</script>
<style scoped>
    .table{
        margin-top: 20px;
    }
    .q-table tbody td {
    max-width: 100px;
    white-space: normal;
    }
    .zarovnanie{
      width: 100%;
    }
</style>
