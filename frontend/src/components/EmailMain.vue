<template>
  <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
    <h2 class="text-2xl font-bold mb-4">Kirim Pesan</h2>
    <form @submit.prevent="sendEmail">
      <div class="mb-4">
        <label for="name" class="block font-semibold mb-1">Nama</label>
        <input v-model="form.name" type="text" id="name" class="w-full p-2 border rounded" required />
      </div>
      <div class="mb-4">
        <label for="email" class="block font-semibold mb-1">Email Anda</label>
        <input v-model="form.email" type="email" id="email" class="w-full p-2 border rounded" required />
      </div>
      <div class="mb-4">
        <label for="message" class="block font-semibold mb-1">Pesan</label>
        <textarea v-model="form.message" id="message" rows="4" class="w-full p-2 border rounded" required></textarea>
      </div>
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Kirim
      </button>
    </form>

    <p v-if="statusMessage" class="mt-4 text-green-600">{{ statusMessage }}</p>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      statusMessage: ''
    };
  },
  methods: {
    sendEmail() {
      const serviceID = 'service_osi20fj';
const templateID = 'template_njbwvtl';
const userID = '_XjOeXiA1FJcfLckd';

      emailjs
        .send(serviceID, templateID, this.form, userID)
        .then(() => {
          this.statusMessage = 'Pesan berhasil dikirim!';
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        })
        .catch((error) => {
          console.error('Email gagal dikirim:', error);
          this.statusMessage = 'Gagal mengirim pesan. Coba lagi.';
        });
    }
  }
};
</script>
