<template>
  <div>
    <h1>User Management</h1>
    <button @click="addUser" class="btn btn-primary">Add User</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} (<button @click="deleteUser(user.id)">Delete</button>)</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const response = await fetch('https://backend-3-0r0q.onrender.com/users');
    const data = await response.json();
    this.users = data;
  },
  methods: {
    addUser() {
      const newUser = {
        id: Date.now(),
        name: 'New User',
      };
      this.users.push(newUser);
      fetch('https://backend-3-0r0q.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
    },
    async deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
      await fetch(`https://backend-3-0r0q.onrender.com/users/${id}`, {
        method: 'DELETE',
      });
    },
  },
};
</script>