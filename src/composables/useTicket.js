import { ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export function useTicket() {
  const tickets = ref([]);

  const loadTickets = () => {
    const saved = localStorage.getItem('tickets');
    if (saved) tickets.value = JSON.parse(saved);
  };

  const saveTickets = () => {
    localStorage.setItem('tickets', JSON.stringify(tickets.value));
  };

  onMounted(loadTickets);

  const addTicket = (ticket) => {
    tickets.value.push({ id: uuidv4(), ...ticket });
    saveTickets();
  };

  const updateTicket = (id, updates) => {
    const index = tickets.value.findIndex((t) => t.id === id);
    if (index !== -1) {
      tickets.value[index] = { ...tickets.value[index], ...updates };
      saveTickets();
    }
  };

  const deleteTicket = (id) => {
    tickets.value = tickets.value.filter((t) => t.id !== id);
    saveTickets();
  };

  return { tickets, addTicket, updateTicket, deleteTicket };
}