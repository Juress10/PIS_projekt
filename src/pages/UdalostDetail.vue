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
        <!--/////////////////////////////////////////////////-->
        <drag-and-drop-img v-bind:url="url"></drag-and-drop-img>
        <!--/////////////////////////////////////////////////-->
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
import DragAndDropImg from 'components/DragAndDropImg'

export default {
  components: {
    'drag-and-drop-img': DragAndDropImg
  },
  data () {
    return {
      files: [],
      url: [],
      textarea: 'sadasdadddddddddddddddddddddddddddddddddddddddddddddd',
      date: '2019-02-01 12:44',
      place: 'Bratislava'
    }
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
