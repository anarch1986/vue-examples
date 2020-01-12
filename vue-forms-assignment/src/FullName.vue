<template>
    <div>
        <div class="col-xs-12 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
            <div class="form-group">
                <label for="firstname">First Name</label>
                <input
                    type="text"
                    id="firstname"
                    class="form-control"
                    :value="firstName"
                    @input="nameChanged(true, $event)"
                />
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-3">
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input
                    type="text"
                    id="lastname"
                    class="form-control"
                    :value="lastName"
                    @input="nameChanged(fasle, $event)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        nameChanged(isFrist, event) {
            let name = '';
            if (isFrist) {
                name = event.target.value + ' ' + this.lastName;
            } else {
                name = this.firstName + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit('input', this.value)
        }
    },
    computed: {
        firstName() {
            return this.value.split(" ")[0];
        },
        lastName() {
            return this.value.split(" ")[1];
        }
    }
}
</script>
