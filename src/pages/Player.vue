<template>
  <div class="full-width center-content">
    

    <div id="app">
      <b-container>
        <b-row>
          <b-col>
          <b-card-group deck>
            <b-card 
              v-for="player in players"
              :key="player"
              :title="player.name"
              :img-src="player.img"

              img-alt="Image"
              img-top
              tag="article"
              style="min-width: 20rem; max-width: 20rem;"
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
                  <div>
                    Number: {{ player.backnum }} <br>
                    Position: {{  player.position}} <br>
                    Birthday: {{  player.birthday  }} <br>
                    Current Club: {{  player.current_club}}
                  </div>
                </b-modal>
              </div>
            </b-card>
            </b-card-group deck>
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
