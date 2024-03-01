<template>
    <div>
      <h1>List of Admins:</h1>
      <ul>
        <li v-for="admin in admins" :key="admin.id">{{ admin.name }}</li>
      </ul>
      <button @click="addAdmin">Add Admin</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        admins: []
      }
    },
    mounted() {
      this.fetchAdmins();
    },
    methods: {
      fetchAdmins() {
        axios.get('/api/admins')
          .then(response => {
            this.admins = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      addAdmin() {
        const newAdmin = {
          name: 'New Admin',
          email: 'newadmin@example.com',
          role: 'admin'
        };
        axios.post('/api/admins', newAdmin)
          .then(response => {
            this.admins.push(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
  </script>