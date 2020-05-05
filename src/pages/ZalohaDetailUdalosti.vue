<template>
  <div class="row hlavny-box">
    <!--<ul>
        <li v-for="file in files" v-bind:key="file.name">
        {{ file.name }} ({{ file.size | kb }} kb) <button @click="removeFile(file)" title="Remove">X</button>
        </li>
    </ul>
    <button :disabled="uploadDisabled" @click="upload">Upload</button>
-->
    <div class="col-8 row">
        <h5 class="col-12">Poistná udalosť</h5>
        <div class="col-3 boxicek">
            <q-input filled bottom-slots label="Id" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="vpn_key" />
                </template>
            </q-input>
        </div>
        <div class="col-8">
            <q-input filled bottom-slots label="Janko Hrasko" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="perm_identity" />
                </template>
            </q-input>
        </div>
        <q-input filled v-model="textarea" class="col-12 boxicek vyrovnanie-dlzky" type="textarea"
        label="Opis vzniknutej škody"/>
        <q-input filled bottom-slots v-model="place" class="col-6 boxicek" label="Miesto vzniknutej škody" :dense="dense">
            <template v-slot:prepend>
                <q-icon name="place" />
            </template>
        </q-input>
        <div class="col-5" style="">
            <q-input filled v-model="date">
            <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm" />
                </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
                </q-popup-proxy>
                </q-icon>
            </template>
            </q-input>
        </div>
        <div class="q-pa-md col-9">
            <div class="q-col-gutter-md row items-start" >
                <q-img
                v-for="img in url" v-bind:key="img.pathname"
                class="col-2 rounded-borders"
                :src="img"
                style="width: 170px; height:115px;"
                >
                <div class="absolute-bottom text-subtitle1 text-center">
                    {{img.pathname}}
                </div>
                <q-btn color="grey-3" text-color="black" @click="removeImg(img)" title="Remove" style="color: grey;"><q-icon
                name="clear" class="text-black" size="sm"/></q-btn>
                </q-img>

                <div class="col-2 bg-blue-grey-3 row justify-center items-center"
                style="border: dotted 3px black; width: 170px; height:115px; padding: 0;"
                v-cloak @drop.prevent="addFile" @dragover.prevent
                @dragover="dragover" @dragleave="dragleave">
                    <q-icon name="cloud_upload" class="text-blue-grey" size="xl"/>
                </div>
            </div>
        </div>
        <q-btn
        class="col-2 self-end save-button"
        rounded
        color="cyan-8"
        :size="xl"
        >
        <q-icon name="save" class="text-white" size="sm"/>
        Uložiť
        </q-btn>
    </div>
    <!--------------------------------------------------------------------------------------------------->
     <div class="col-4">
         <h5 class="col-12">Správa o poistnej udalosti</h5>
         <div class="col-12">
            <q-input filled bottom-slots label="Janko Hrasko" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="note" />
                </template>
            </q-input>
        </div>
        <div class="col-12">
            <q-input filled bottom-slots label="Odhadnuta cena" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="euro_symbol" />
                </template>
            </q-input>
        </div>
        <q-input filled v-model="textarea" class="col-12 boxicek" type="textarea"
        label="Správa pre poistenca"/>
        <div class="col-12 row justify-between">
            <div class="col-7" style="width: 150px; height:30px;">
            </div>
            <q-btn
            class="col-4 self-end save-button"
            rounded
            color="cyan-8"
            :size="xl"
            ><q-icon name="save" class="text-white" size="sm"/>
                Uložiť
            </q-btn>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      files: [],
      url: [],
      textarea: 'sadasdadddddddddddddddddddddddddddddddddddddddddddddd',
      date: '2019-02-01 12:44',
      place: 'Bratislava'
    }
  },
  computed: {
    uploadDisabled () {
      return this.files.length === 0
    }
  },
  methods: {
    addFile (e) {
      event.currentTarget.classList.add('bg-blue-grey-3')
      event.currentTarget.classList.remove('bg-cyan-8')
      const droppedFiles = e.dataTransfer.files
      if (!droppedFiles) return;
      ([...droppedFiles]).forEach(f => {
        this.url.push(URL.createObjectURL(f))
        this.files.push(f)
      })
    },
    dragover (event) {
      console.log('fsfsd')
      if (!event.currentTarget.classList.contains('bg-cyan-8')) {
        event.currentTarget.classList.remove('bg-blue-grey-3')
        event.currentTarget.classList.add('bg-cyan-8')
      }
    },
    dragleave (event) {
      // Clean up
      event.currentTarget.classList.add('bg-blue-grey-3')
      event.currentTarget.classList.remove('bg-cyan-8')
    },
    removeFile (file) {
      this.files = this.files.filter(f => {
        return f !== file
      })
    },
    removeImg (file) {
      this.url = this.url.filter(f => {
        return f !== file
      })
    },
    upload () {
      const formData = new FormData()
      this.files.forEach((f, x) => {
        formData.append('file' + (x + 1), f)
      })
      fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
      }).then(res => res.json())
        .then(res => {
          console.log('done uploading', res)
        }).catch(e => {
          console.error(JSON.stringify(e.message))
        })
    }
  }
}
</script>

<style scoped>
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
      max-width: 739px;
  }
  .save-button{
      max-height: 40px;
      position: bottom;
  }
  h5{
      margin-top:0;
  }
</style>
