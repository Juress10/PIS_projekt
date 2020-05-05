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
              <div class="text-left col-10 zarovnanie">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel rhoncus ante, eget auctor mi. Curabitur scelerisque mattis dui nec malesuada. Cras ligula neque, ornare sed enim vel, ullamcorper placerat sem. Etiam sagittis nibh ut nisl consectetur dictum. Sed hendrerit, est vel vulputate aliquam, ipsum dui ultrices est, a faucibus magna leo eget leo. Suspendisse est urna, ullamcorper at neque id, rhoncus aliquam purus. Vestibulum quis neque in magna euismod dictum. Mauris nec purus vitae elit iaculis malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ac tristique velit. Aliquam ultricies aliquam tempor. Proin convallis sed lorem ac consequat. Quisque nec eros ex. Sed finibus velit vitae libero pharetra lobortis.</div>
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
        { name: 'opis', label: 'dátum vzniknutej škody', field: 'opis', sortable: true, sort: (a, b) => new Date(a) - new Date(b) },
        { name: 'miesto', label: 'miesto vzniknutej škody', field: 'miesto', sortable: true },
        { name: 'poistenec', label: 'meno poistenca', field: 'poistenec', sortable: true },
        { name: 'stav', label: 'stav', field: 'stav', sortable: true }
      ],
      data: [
        {
          id: 7,
          opis: '12.3.2018',
          miesto: 'Bratislava',
          poistenec: 'Maddox Walter',
          stav: 'ohodnotená'
        },
        {
          id: 6,
          opis: '12.3.2019',
          miesto: 'Bratislava',
          poistenec: 'Pickett Garza',
          stav: 'rozpacovaná'
        },
        {
          id: 10,
          opis: '12.3.2020',
          miesto: 'Košice',
          poistenec: 'Leon Ellis',
          stav: 'ohodnotená'
        },
        {
          id: 3,
          opis: '12.9.2018',
          miesto: 'Košice',
          poistenec: 'Paige Rhodes',
          stav: 'ohodnotená'
        },
        {
          id: 9,
          opis: '1.3.2020',
          miesto: 'Bratislava',
          poistenec: 'Marsh Harmon',
          stav: 'rozpacovaná'
        },
        {
          id: 12,
          opis: '12.8.2017',
          miesto: 'Banská Bystrica',
          poistenec: 'Katheryn Briggs',
          stav: 'ohodnotená'
        },
        {
          id: 8,
          opis: '1.1.2020',
          miesto: 'Bratislava',
          poistenec: 'Ray Larsen',
          stav: 'podozrivá'
        },
        {
          id: 22,
          opis: '12.12.2019',
          miesto: 'Košice',
          poistenec: 'Ross Carpenter',
          stav: 'ohodnotená'
        }
      ]
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
