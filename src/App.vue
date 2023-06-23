<template lang="">
  <div>
    <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1>
    <h1 className="text-3xl font-bold underline text-red-400">
      Version is <span class="text-black">{{ Version }}</span>
    </h1>
  </div>
</template>
<script>
import PackageJson from "../package.json";
export default {
  data() {
    return {
      Version: null,
    };
  },
  created() {
    this.Version = PackageJson.version;
  },
};
</script>
<style lang=""></style>
