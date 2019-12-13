<template>
  <div class="full-width center-content">
    <b-container>
      <b-row>
        <b-col>
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-email"
              label="Email:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                required
              />
            </b-form-group>
            <b-form-group
              id="input-group-name"
              label="Name:"
              label-for="input-name"
            >
              <b-form-input
                id="input-name"
                v-model="form.name"
                required
              />
            </b-form-group>
            <b-form-group
              id="input-group-message"
              label="Message:"
              label-for="input-message"
            >
              <b-input
                id="input-message"
                v-model="form.message"
                type="message"
              />
            </b-form-group>
            <b-button
              type="submit"
              variant="primary"
            >
              Submit
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      fetch('https://formspree.io/xoqqlywz')
        .then(response => response.json())
        .then(json => {
          this.users = json.users
        })
        .then(() => {
          let email = this.form.email
          let password = this.form.password
          sessionStorage.user = JSON.stringify(this.users.find(function (user) {
            return ((user.email === email) && (user.password === password))
          }))
          console.log(sessionStorage.user)
          this.$router.push('/')
        })
    }
  }
}
</script>
<!-- my link: form action="https://formspree.io/xoqqlywz" method="POST" -->
