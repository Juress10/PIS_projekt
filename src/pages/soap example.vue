/* eslint-disable handle-callback-err */

<template>
<div class="row">

</div>
</template>

<script>
export default {
  name: 'SOAP',
  data () {
    return {
      bodyResponse: null
    }
  },
  created () {
    var soap = require('soap')
    var parseString = require('xml2js').parseString

    var url = 'http://pis.predmety.fiit.stuba.sk/pis/ws'
    var args = [
      {
        team_id: '074',
        password: '4GKU4S',
        task_id: '14',
        answer: 'a)12, b)2 false, c)ELSBETH3,GOQUEST,GOSEARCHER, d)Commercial Resupply Services (CRS) are a series of contracts..',
        name: 'Juraj Ďurej',
        services: {
          service: 'https://api.spacexdata.com/v3/'
        }
      }
    ]
    // eslint-disable-next-line handle-callback-err
    soap.createClient(url, function (err, client) {
      args.forEach(element => {
        client.insert(element, function (err, result) {
          if (!result.body) {
            if (err)console.log(err)
            console.log(result)
          } else {
            // eslint-disable-next-line handle-callback-err
            parseString(result.body, function (err, res) {
              console.log(res)
              // body = res
            })
          }
        })
      })
    })
  },
  methods: {
    print () {
      console.log(this.bodyResponse)
    }
  }
}
</script>
