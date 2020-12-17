<template>
  <div class="home">
    <Table />
    <CircleProgressBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/index.vue';
import CircleProgressBar from '@/components/CircleProgressBar/index.vue';

export default {
  name: 'Home',
  components: {
    Table,
    CircleProgressBar,
  },
};
</script>
