<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group id="g1" label="Product:" label-for="i1">
            <b-form-input
                id="i1"
                v-model="product.name"
            ></b-form-input>
            </b-form-group>
        <b-button type="submit">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {
                    name: 'Ben'
                }
            }
        }
    },
    methods: {
        onSubmit() {
            this.$axios.post('/products', this.product).then(response => {
                alert(response.data.data.message)
            })
        }
    }
</script>