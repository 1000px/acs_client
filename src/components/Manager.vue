<template>
    <v-container fluid>
        {{msg}}
        <view-router />
    </v-container>
</template>

<script>
export default {
    name: 'Manager',
    data: () => ({
        msg: 'haha'
    })
}
</script>

<style>

</style>
