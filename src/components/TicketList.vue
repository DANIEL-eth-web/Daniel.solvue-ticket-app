<template>
  <div class="ticket-list">
    <TicketItem
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
      @delete="deleteTicket"
    />
    <p v-if="tickets.length === 0">No tickets yet—add one!</p>
  </div>
</template>

<script setup>
import { useTicket } from '../composables/useTicket';
import TicketItem from './TicketItem.vue';

const { tickets, deleteTicket } = useTicket();
</script>