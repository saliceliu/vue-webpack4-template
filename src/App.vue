<template>
    <div class="container center-content">
        <b-container class="bv-example-row">
        <b-row>
        <b-col cols="12">
        <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-link to="/"  router-tag="b-navbar-brand">Home</b-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-link to="/menu"  router-tag="b-nav-item">Menu</b-link>
                    <b-link to="/about"  router-tag="b-nav-item">About</b-link>
                    <b-link to="/contact"  router-tag="b-nav-item">Contact</b-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
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
