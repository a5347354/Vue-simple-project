<template>
  <div class="home">
    <Table />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/index.vue';

export default {
  name: 'Home',
  components: {
    Table,
  },
};
</script>
