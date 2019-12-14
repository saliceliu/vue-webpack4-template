<template>
  <div class="full-width center-content">
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
          placeholder="Your email address"
        />
      </b-form-group>
      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-password"
      >
        <b-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="Your password"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
      >
        Log in
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      users: []
    }
  },
  methods: {
    onSubmit () {
      fetch('https://api.myjson.com/bins/z0wum')
        .then(response => response.json())
        .then(json => {
          this.users = json.users
          this.$axios.post(
            '/users'
          ).then(
            response => {
              alert(response.data.data.message)
              this.$parent.refresh()
            }
          )
        })
        .then(() => {
          let email = this.form.email
          let password = this.form.password
          if (this.users.email === email && this.users.password === password) {
            sessionStorage.setItem(
              'email',
              email
            )
            this.$router.push('/')
          }
          console.log(sessionStorage.user)
        })
    }
  }
}
</script>
