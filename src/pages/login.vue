
<template>
     <q-page class="bg-white row justify-center items-center">
        <div class="column">
            <div class="row">
                <!--<h5 class="text-h5 text-white q-my-md">Login</h5>-->
            </div>
            <q-dialog v-model="forgotPassword" transition-show="flip-down" transition-hide="flip-up">
                <q-card class="bg-cyan-8 text-white remove-top-padding">
                    <q-bar class="" style="height:60px;">
                        <p style="margin:0">Zadajte email kam vám bude odoslané heslo.</p>
                        <q-space />
                        <q-btn dense flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                        </q-btn>
                    </q-bar>

                    <q-card-section class="q-pt-none" style="padding:20px;">
                     <q-input color="white" class="add-bottom-padding" v-model="email" label="email"/>
                     <q-btn unelevated outline rounded color="white" size="md" v-on:click="changePassword()"
                     class="full-width add-bottom-padding add-top-margin" label="Odoslať nové heslo" />
                    </q-card-section>
                </q-card>
            </q-dialog>
            <div class="row">
                <q-card square bordered class="bg-blue-grey-1 q-pa-lg shadow-1">
                    <q-card-section>
                        <q-form class="q-gutter-md">
                        <q-input square filled clearable type="name" v-model="email" label="email"  />
                        <q-input square filled clearable type="password" v-model="heslo" label="heslo" />
                        </q-form>
                    </q-card-section>
                    <q-card-actions class="q-px-md">
                        <q-btn unelevated color="cyan-8" size="lg" class="full-width" v-on:click="login()" label="Prihlásiť sa" />
                    </q-card-actions>
                    <q-card-section class="text-center q-pa-none">
                        <p class="text-grey-6">Zabudli ste <span @click="forgotPassword = true" style="color:black;">heslo ?</span></p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      forgotPassword: false,
      email: '',
      heslo: ''
    }
  },
  methods: {
    async validateEmail () {
      var soap = require('soap')
      var parseString = require('xml2js').parseString
      var validate = false
      var email = this.email
      soap.createClientAsync('http://pis.predmety.fiit.stuba.sk/pis/ws/Validator?WSDL').then((client) => {
        client.validateEmail({ email: email }, function (err, result) {
          if (!result.body) {
            if (err)console.log(err)
            validate = result.success
          } else {
            // eslint-disable-next-line handle-callback-err
            parseString(result.body, function (err, res) {
              validate = res.success
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
    async login () {
      var validate = await this.validateEmail()

      if (validate) {
        this.$axios.post(
          this.$store.state.store.URL + '/api/login',
          {
            email: this.email,
            heslo: this.heslo
          }
        )
          .then(res => {
            console.log(res.data)
            this.$store.commit('store/setUser', res.data)
            this.$router.push({ name: 'employee' })
          })
          .catch(res => { console.log('error', res) })
      } else {
        console.log('not valid: ' + validate)
      }
    },
    changePassword () {
      console.log(this.email)
    }
  }
}
</script>

<style scoped>
.q-card {
  width: 400px;
  padding-top: 30px;
}
.remove-top-padding{
    padding-top: 0;
}
.add-bottom-padding{
    margin-bottom: 15px;
}
.add-top-margin{
    margin-top:20px;
}
</style>
