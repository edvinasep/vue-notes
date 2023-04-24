<template>
  <div class="edit-note">
    <AddEditNote v-model="noteContent" ref="addEditNoteRef" bgColor="link" placeholder="Edit note" textLabel="Edit note">
      <template #buttons>
        <!-- <button class="button is-link is-light" @click="$router.push('/')">Cancel</button> -->
        <button class="button is-link is-light mr-2" @click="$router.back()">Cancel</button>
        <button class="button is-link has-background-link" :disabled="!noteContent" @click="saveHandler">Save Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const route = useRoute()
const router = useRouter()

const storeNotes = useStoreNotes()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const saveHandler = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}

</script>

<style scoped>

</style>