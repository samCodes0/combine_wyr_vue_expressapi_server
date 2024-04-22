<script setup>
import { ref, watch } from 'vue'

// these are the properties that can be passed into this component from the parent component
defineProps({
  question: String,
  answer1: String,
  answer2: String
})

// defineEmits returns the emit function to be used to emit signals to communicate with the parent component
// Pass an array of signal names that can be passed as an argument into the emit function
const emit = defineEmits([
    'answer-selected'
])

const choice = ref(null)

// function choiceMade() {
//   // calling the emit function with the answer-selected signal.
//   // the second argument to the function is the data that we want to pass
//   emit('answer-selected', choice.value)
// }

// the watch method calls the passed callback function when the first value changes
// this is an alternative to adding v-on:change="someFunction"
// we can pass values into the callback function like, oldVal, newVal
watch(choice, () => {
  emit('answer-selected', choice.value);
})

</script>

<template>
  <div id="wyr">
    <h2>Make Your Choice</h2>

    <h3>{{question}}</h3>

    <div>
      <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1">
      <label for="answer-1">{{answer1}}</label>
      <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2">
      <label for="answer-2">{{answer2}}</label>
    </div>
  </div>
</template>

<style scoped>
/* Scoped attribute ensures that the styles apply only to this component */
#wyr {
  background-color: darkcyan;
  border-radius: 20px;
  padding: 20px;
}

</style>
