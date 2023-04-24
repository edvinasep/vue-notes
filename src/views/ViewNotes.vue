<template>
  <div class="notes">

    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" class="button is-link has-background-success" :disabled="!newNote">Add New
          Note</button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note"></Note>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/notes/Note.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const newNote = ref('')
const addEditNoteRef = ref(null)

const storeNotes = useStoreNotes()

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>

<style scoped></style>