<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="textLabel" class="label has-text-white">{{ textLabel }}</label>
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea"
          :placeholder="placeholder" ref="textareaRef" v-autofocus></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  textLabel: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextarea = () => textareaRef.value.focus()

defineExpose({
  focusTextarea
})

</script>

<style scoped></style>