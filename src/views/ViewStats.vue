<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ totalNumberOfNotes }}</td>
        </tr>
        <tr>
          <td>Number of Characters of all notes</td>
          <td>{{ totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

let totalNumberOfNotes = storeNotes.totalNumberOfNotes
let totalCharactersCount = storeNotes.totalCharactersCount

</script>

<style scoped>

</style>