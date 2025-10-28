<template>
  <form @submit.prevent="handleSubmit" class="ticket-form">
    <div class="form-group">
      <label for="title">Title:</label>
      <input id="title" v-model="form.title" type="text" required />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea id="description" v-model="form.description" rows="4" />
    </div>
    <div class="form-group">
      <label for="priority">Priority:</label>
      <select id="priority" v-model="form.priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <button type="submit">Add Ticket</button>
    <button type="button" @click="$emit('close')">Cancel</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTicket } from '../composables/useTicket';

const props = defineProps({
  ticket: { type: Object, default: null }
});
const emit = defineEmits(['close']);

const { addTicket } = useTicket();

const form = ref({
  title: props.ticket?.title || '',
  description: props.ticket?.description || '',
  priority: props.ticket?.priority || 'low'
});

const handleSubmit = () => {
  const newTicket = { ...form.value, status: 'open' };
  addTicket(newTicket);
  emit('close');
};
</script>
