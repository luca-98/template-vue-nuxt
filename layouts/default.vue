<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped lang="scss">
</style>
