<template>
  <div class="ticket-card">
    <h3 :data-testid="`ticket-${ticket.id}-title`">{{ ticket.title }}</h3>
    <p>{{ ticket.description }}</p>
    <p><strong>Priority:</strong> {{ ticket.priority.toUpperCase() }}</p>
    <p><strong>Status:</strong> {{ ticket.status }}</p>
    <button class="delete-btn" @click="$emit('delete', ticket.id)">Delete</button>
  </div>
</template>

<script setup>
const props = defineProps({
  ticket: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['delete']);
</script>