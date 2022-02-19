<template>
    <div class="quote"><slot></slot></div>
</template>

<script>
    export default {
        name: "quote"
    }
</script>

<style scoped>
.quote{
    border-left: 3px solid #56ABE0;
    background-color: #FBFBFB;
    padding: 15px 20px;
    border-radius: 3px;
}
</style>
