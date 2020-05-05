<template>
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
</template>

<script>
export default {
  name: 'DragAndDropImg',
  props: ['url'],
  data () {
    return {
      files: []
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

</style>
