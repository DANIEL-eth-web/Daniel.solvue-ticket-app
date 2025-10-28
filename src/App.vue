<template>
  <div id="app">
    <Header />
    <main class="container">
      <h2>Tickets Dashboard</h2>
      <button @click="showForm = !showForm">
        {{ showForm ? 'Hide Form' : 'Add New Ticket' }}
      </button>
      <TicketForm v-if="showForm" @close="showForm = false" />
      <TicketList />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import TicketForm from './components/TicketForm.vue';
import TicketList from './components/TicketList.vue';

const showForm = ref(false);
</script>

<style>
/* Global styles here or in App.css */
body { margin: 0; font-family: Avenir, Helvetica, Arial, sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
</style>