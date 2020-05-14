<template>
  <div class="row hlavny-box">
    <div class="col-8 row">
        <h5 class="col-12">Poistná udalosť</h5>
        <div class="col-5 boxicek">
            <q-input filled bottom-slots label="Id udalosti" v-model="poistna_udalost.id" >
                <template v-slot:prepend>
                    <q-icon name="vpn_key" />
                </template>
            </q-input>
        </div>
        <div class="col-5">
            <q-input filled bottom-slots label="Id poistenca" v-model="poistna_udalost.poistenec_id">
                <template v-slot:prepend>
                    <q-icon name="perm_identity" />
                </template>
            </q-input>
        </div>
        <q-input filled class="col-12 boxicek vyrovnanie-dlzky" type="textarea"
        label="Opis vzniknutej škody" v-model="poistna_udalost.opis_skody" />
        <q-input filled bottom-slots v-model="poistna_udalost.miesto_skody" class="col-6 boxicek" label="Miesto vzniknutej škody" >
            <template v-slot:prepend>
                <q-icon name="place" />
            </template>
        </q-input>
        <div class="col-5" style="">
            <q-input filled v-model="poistna_udalost.datum_skody">
            <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="poistna_udalost.datum_skody" mask="YYYY-MM-DD HH:mm" />
                </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="poistna_udalost.datum_skody" mask="YYYY-MM-DD HH:mm" format24h />
                </q-popup-proxy>
                </q-icon>
            </template>
            </q-input>
        </div>
        <!--////////////////////////////////////////////////-->
        <drag-and-drop-img v-bind:url="url"></drag-and-drop-img>
        <!--////////////////////////////////////////////////-->
        <div class="col-2 row">
            <q-btn
            class="col-12 self-end save-button"
            rounded
            color="accent"
            :size="xl"
            @click="zobrazUlozenie=true"
            v-on:click="updatePoistnaUdalost(); updatePoistnaSprava();"
            >
            <q-icon name="save" class="text-white" size="sm"/>
            <q-space></q-space>
            Uložiť
            <q-space></q-space>
            </q-btn>

            <q-btn
            class="col-12 self-end save-button"
            rounded
            color="cyan-8"
            :size="xl"
            v-on:click="potvrditUdalost()"
            >
            <q-icon name="done_outline" class="text-white" size="sm"/>
            <q-space></q-space>
            Potvrdiť
            </q-btn>
        </div>

        <q-dialog v-model="zobrazUlozenie">
          <zobraz-okno-ulozenie />
        </q-dialog>

        <q-dialog v-model="chybajuceUdaje">
          <chybajuce-udaje />
        </q-dialog>

        <q-dialog v-model="neadekvatnaSuma">
          <neadekvatna-suma />
        </q-dialog>

        <q-dialog v-model="notifikovanieEmailom">
          <notifikovanie-emailom />
        </q-dialog>

        <q-dialog v-model="notifikovanieSMS">
          <notifikovanie-sms />
        </q-dialog>

    </div>
    <!--------------------------------------------------------------------------------------------------->
     <div class="col-4">
         <h5 class="col-12">Správa o poistnej udalosti</h5>
         <div class="col-12">
            <q-input filled bottom-slots v-model="poistna_sprava.meno_priezvisko" label="Meno a priezvisko">
                <template v-slot:prepend>
                    <q-icon name="note" />
                </template>
            </q-input>
        </div>
        <div class="col-12">
            <q-input filled bottom-slots label="Odhadnuta cena" v-model="poistna_sprava.odhadnuta_suma">
                <template v-slot:prepend>
                    <q-icon name="euro_symbol" />
                </template>
            </q-input>
        </div>
        <q-input filled v-model="poistna_sprava.text_spravy" class="col-12 boxicek" type="textarea"
        label="Správa pre poistenca" />
        <div class="col-12 row justify-between">
            <div class="col-7" style="width: 150px; height:30px;">
            </div>
            <q-btn
            class="col-4 self-end save-button"
            rounded
            color="accent"
            :size="xl"
            v-on:click="updatePoistnaSprava()"
            ><q-icon name="save" class="text-white" size="sm"/>
            <q-space></q-space>
                Uložiť
            <q-space></q-space>
            </q-btn>
        </div>
     </div>
  </div>
</template>

<script>
import DragAndDropImg from 'components/DragAndDropImg'

export default {
  components: {
    'drag-and-drop-img': DragAndDropImg,

    'zobraz-okno-ulozenie': require('components/Modals/zobrazUlozenie.vue').default,
    'chybajuce-udaje': require('components/Modals/chybajuceUdaje.vue').default,
    'neadekvatna-suma': require('components/Modals/neadekvatnaSuma.vue').default,
    'notifikovanie-emailom': require('components/Modals/notifikovanieEmailom.vue').default,
    'notifikovanie-sms': require('components/Modals/notifikovanieSMS.vue').default
  },
  data () {
    return {
      files: [],
      url: [],
      poistna_udalost: {},
      poistna_sprava: {},

      zobrazUlozenie: false,
      chybajuceUdaje: false,
      neadekvatnaSuma: false,
      notifikovanieEmailom: false,
      notifikovanieSMS: false
    }
  },
  methods: {
    async sendEmail () {
      var soap = require('soap')
      var parseString = require('xml2js').parseString
      var validate = false

      soap.createClientAsync('http://pis.predmety.fiit.stuba.sk/pis/ws/NotificationServices/Email?WSDL').then((client) => {
        client.notify({
          team_id: '074',
          password: '4GKU4S',
          email: this.poistna_udalost.poistenec_id + '@gmail.com',
          subject: 'oboznamenie o poistke',
          message: this.poistna_sprava.text_spravy
        }, function (err, result) {
          if (!result.body) {
            if (err)console.log(err)
            validate = result
          } else {
            // eslint-disable-next-line handle-callback-err
            parseString(result.body, function (err, res) {
              validate = res
            })
          }
        })
      })
      await this.sleep(2000)
      return validate
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async potvrditUdalost () {
      if (typeof this.poistna_sprava.id !== 'undefined' && typeof this.poistna_sprava.meno_priezvisko !== 'undefined' &&
      typeof this.poistna_sprava.odhadnuta_suma !== 'undefined' && typeof this.poistna_sprava.text_spravy !== 'undefined' &&
      typeof this.poistna_udalost.datum_skody !== 'undefined' && typeof this.poistna_udalost.opis_skody !== 'undefined' &&
      this.poistna_udalost.miesto_skody !== 'undefined') {
        this.$axios.post(this.$store.state.store.URL + '/api/potvrdit',
          {
            id: this.poistna_udalost.id,
            suma: this.poistna_sprava.odhadnuta_suma
          }).then(function (response) {
          console.log(response)
        })
          .catch(function (error) {
            console.log(error)
          })
        var validate = await this.sendEmail()
        console.log('email bol poistencovy poslany: ' + validate.success)
      }
    },
    updatePoistnaUdalost () {
      console.log(this.poistna_udalost)
      this.$axios.put(
        this.$store.state.store.URL + '/api/udalost/update/' + this.poistna_udalost.id,
        this.poistna_udalost
      )
        .then(res => {
          console.log(res)
        })
        .catch(res => { console.log('error', res) })
    },
    updatePoistnaSprava () {
      console.log(this.poistna_sprava)
      if (typeof this.poistna_sprava.id !== 'undefined') {
        this.$axios.put(
          this.$store.state.store.URL + '/api/sprava/update/' + this.poistna_sprava.id,
          this.poistna_sprava
        )
          .then(res => {
            console.log(res)
          })
          .catch(res => { console.log('error', res) })
      } else {
        this.poistna_sprava.poistna_udalost_id = this.poistna_udalost.id
        this.$axios.post(
          this.$store.state.store.URL + '/api/sprava/create',
          this.poistna_sprava
        )
          .then(res => {
            console.log(res)
          })
          .catch(res => { console.log('error', res) })
      }
    }
  },
  created: function () {
    this.$axios.get(this.$store.state.store.URL + '/api/udalost/read/' + this.$route.params.id)
      .then(res => {
        console.log(res.data)
        this.poistna_udalost = res.data
      })
      .catch(res => { console.log('error', res) })
      .then(() => {
        if (this.poistna_udalost != null) {
          this.$axios.get(this.$store.state.store.URL + '/api/sprava/read/' + this.poistna_udalost.id)
            .then(res2 => {
              this.poistna_sprava = res2.data
              console.log(this.poistna_sprava)
            })
            .catch(res => { console.log('error', res) })
        }
      })
  }
}
</script>

<style>
  .col-2{
      margin-right: 10px;
      margin-bottom: 10px;
  }
  .hlavny-box{
      padding: 30px;
  }
  .boxicek{
      margin-right: 20px;
      margin-bottom: 20px;
  }
  .vyrovnanie-dlzky{
      max-width: 739px !important;
  }
  .save-button{
      max-height: 40px;
      position: bottom;
  }
  h5{
      margin-top:0;
  }
</style>
