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
  }
}
</script>
