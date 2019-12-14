<template>
  <div class="full-width center-content">
    <b-container>
      <b-row>
        <p> <br> </p>
      </b-row>
      <b-row>
        <b-col>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide img-src="https://bit.ly/2X9fzJ0" />

            <b-carousel-slide img-src="https://bit.ly/3733ARS" />

            <b-carousel-slide img-src="https://bit.ly/2CDDsPk" />
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <br>
      <h4>Thank you for visiting-- <span v-if="user">{{ user.name }}</span> </h4>
      <b-list-group>
        <b-list-group-item>Your Information</b-list-group-item>
        <b-list-group-item><span v-if="user">{{ user.name }}</span></b-list-group-item>
        <b-list-group-item><span v-if="user">{{ user.email }}</span></b-list-group-item>
        <b-list-group-item><span v-if="user">{{ user.password }}</span></b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  create: function () {
    this.$axios.get('/products')
      .then(response => {
        this.products = response.data.data
      })
  }
}
</script>
