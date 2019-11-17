<template>
  <div class="full-width center-content">
    

    <div id="app">
      <b-container>
        <b-row>
          <b-col cols="8">
            <b-card
              v-for="player in players"
              :key="player"
              :title="player.name"
              :img-src="player.img"

              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Number {{ player.backnum }}
              </b-card-text>

              <b-button v-b-modal="player.id">
                Details of {{ player.name }}
              </b-button>
              <div>
                <b-modal
                  :id="player.id"
                  :title="player.name"
                >
                  <img
                    :src="player.img"
                    class="card-img-top"
                    :alt="player.birthday"
                  >
                </b-modal>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      players: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/140f4a')
      .then(response => response.json())
      .then(json => {
        this.players = json.players
      })
  }
}

</script>
