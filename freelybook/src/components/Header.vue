<template>
  <div class="Header">
    <h2 class="logo_header"></h2>
    <div>
      <div class="search"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header {
  height: 46px;
  display: flex;
}

.logo_header {
  width: 150px;
  height: 35px;
  margin: 0;
  margin: 10px 8px;
  background-image: url(./../assets/pics.png);
  background-size: 150px;
}

.search {
  height: 100%;
  width: 25px 25px;
  background: url(./../assets/pics.png);
}
</style>
