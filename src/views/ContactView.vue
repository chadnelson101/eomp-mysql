<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>
    <div v-if="success" class="success-message">
      <p>Your message has been sent successfully!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      success: false
    }
  },
  methods: {
    async submitForm() {
      const payload = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      try {
        const response = await this.$axios.post('/api/contact', payload)
        if (response.status === 200) {
          this.success = true
          this.name = ''
          this.email = ''
          this.message = ''
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.submit-button {
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #555;
}

.success-message {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
}
</style>