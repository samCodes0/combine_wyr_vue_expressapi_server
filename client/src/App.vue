<script setup>
import {ref, onMounted} from 'vue';
import wyrService from "./services/wyrService.js";
import WouldYouRather from './components/WouldYouRather.vue'

const wyrQuestion = ref('Live in a house shaped like a triangle or shaped like a circle?')
const wyrAnswer1 = ref('Triangle house')
const wyrAnswer2 = ref('Circle house')

// the answer that the user chooses will be stored here
const userSelection = ref('')

// this is commonly referred to as a hook. This onMounted hook registers the callback function to run after the
// component is first rendered
onMounted(() => {
  wyrService.getRandomWYR().then((wyrData) => {
    wyrQuestion.value = wyrData.question;
    wyrAnswer1.value = wyrData.answer1;
    wyrAnswer2.value = wyrData.answer2;
  })
});

// to be called when answer-selected is emitted from WouldYouRather component
const updateUserSelection = (userChoice) => {
  userSelection.value = `Thank you! You chose, ${userChoice}`
}

</script>

<template>
  <div id="app-component">
    <h1>Hello! Would You Rather?</h1>
    <WouldYouRather
        v-bind:question="wyrQuestion"
        v-bind:answer1="wyrAnswer1"
        v-bind:answer2="wyrAnswer2"
        v-on:answer-selected="updateUserSelection">
    </WouldYouRather>
    <p>{{userSelection}}</p>
  </div>
</template>

<style scoped>
  #app-component {
    background-color: black;
    padding: 40px;
  }

  p {
    font-family: 'Courier New', Courier, monospace;
  }
</style>
