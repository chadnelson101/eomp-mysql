<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>
    <div v-if="success" class="success-message">
      <p>Your message has been sent successfully!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
        // replace with your Formspree endpoint
        const response = await axios.post('https://formspree.io/f/moqgwrpe', payload)
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
  background-color: #ff0000;
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
  position: relative;
  overflow: hidden;
}

.submit-button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, #ff0000, #ff7f00, #ff0000);
  z-index: -1;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.submit-button:hover:before {
  opacity: 1;
}

.success-message {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
}

.success-message:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -1;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.success-message:hover:before {
  opacity: 1;
}

</style>