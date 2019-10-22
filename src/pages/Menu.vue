<template>
  <div class="full-width center-content">
    <WelcomeMessage name="Menu" />

    <div id="app">
        <b-container>
            <b-row>
                <b-col>
                    <b-card
                        v-for="item in menu"
                        v-bind:title=item.name
                        v-bind:img-src="item.img"

                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        {{item.description}}
                        </b-card-text>

                        <b-button v-b-modal=item.id>
                            Click to see a picture of {{item.name}}
                        </b-button>
                        <div>
                        <b-modal v-bind:id=item.id v-bind:title=item.name>
                            <img v-bind:src="item.img" class="card-img-top" v-bind:alt="item.description">
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
            menu: []
        }
    },
    created: function() {
    fetch('https://api.myjson.com/bins/vknvn')
        .then(response => response.json())
        .then(json => {
            this.menu = json.items
        })
    }
}

</script>