<template>
<div class="modal is-active p-2">
  <div class="modal-background"></div>
  <div class="modal-card" ref="modalCardRef">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete Note?</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete this note?
    </section>
    <footer class="modal-card-foot is-justify-content-flex-end">
      <button class="button" @click="closeModal">Cancel</button>
      <button class="button is-danger" @click="storeNotes.deleteNote(noteID)">Delete Note</button>
    </footer>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from '@/stores/storeNotes'

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    noteID: {
      type: String,
      required: true
    }
  })

  const storeNotes = useStoreNotes()

  const emit = defineEmits(['update:modelValue'])

  const closeModal = () => {
    emit('update:modelValue', false)
  }

  const modalCardRef = ref(null)
  onClickOutside(modalCardRef, closeModal)

  const keyboardHandler = (event) => {
    if (event.key === 'Escape') closeModal()
  }
  onMounted(() => {
    document.addEventListener('keyup', keyboardHandler)
  })
  onUnmounted(() => {
    document.removeEventListener('keyup', keyboardHandler)
  })

</script>

<style scoped>

</style>