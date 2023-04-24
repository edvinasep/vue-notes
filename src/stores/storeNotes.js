import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", () => {
  const notes = ref([
    {
      id: "id1",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident expedita quas debitis omnis iste",
    },
    {
      id: "id2",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  const getNoteContent = computed(() => {
    return (id) => notes.value.filter(note => id === note.id)[0].content 
  })

  const totalNumberOfNotes = computed(() => notes.value.length)

  const totalCharactersCount = computed(() => {
    let totalCount = 0
    notes.value.forEach(note => totalCount += note.content.length)
    return totalCount
  })  

  function addNote(newNote) {
    let note = {
      id: new Date().getTime().toString(),
      content: newNote,
    };
    notes.value.unshift(note);
  }

  function deleteNote(idToDelete) {
    notes.value = notes.value.filter(note => idToDelete !== note.id)
  }

  function updateNote(id, content) {
    let index = notes.value.findIndex(note => note.id === id)
    notes.value[index].content = content
  }

  return { notes, getNoteContent, totalNumberOfNotes, totalCharactersCount, addNote, deleteNote, updateNote };
});
