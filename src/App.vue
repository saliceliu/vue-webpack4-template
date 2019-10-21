<template>
    <div class="container center-content">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="1">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <p> <router-link to="/menu" > Menu </router-link> </p>
                    </li>
                    <li class="nav-item">
                        <p> <router-link to="/about" > About </router-link> </p>
                    </li>
                    <li class="nav-item">
                        <p> <router-link to="/contact" > Contact </router-link> </p>
                    </li>
                </ul>
            </div>
        </nav>
        <RouterView />

        </b-col>
        </b-row>
        </b-container>


    </div>
</template>

<style lang="stylus" scoped>

.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

</style>
