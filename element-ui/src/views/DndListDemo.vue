<template>
  <div class="app-container">
    <dnd-list :list1="list1" :list2="list2" list1-title="Email 報表順序" list2-title="可新增報表" />
  </div>
</template>

<script>
import axios from 'axios';
import DndList from '../components/DndList/index.vue';

export default {
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.listLoading = true;
      axios.post(`${process.env.baseUrl}/templates`, {
        headers: {
          'content-type': 'application/json; charset=utf-8',
        },
        body:
          [
            {
              name: 'Biz Team 1',
              component_order: [
                '獅子丸',
                '米奇',
              ],
            },
            {
              name: 'Dev Team 1',
              component_order: [
                '獅子丸',
              ],
            },
          ],
      })
        .then((response) => {
          this.list1 = response.data.json.body[0].component_order;
        });

      axios.post(`${process.env.baseUrl}/templates`, {
        headers: {
          'content-type': 'application/json; charset=utf-8',
        },
        body:
          [
            {
              id: 1,
              name: '獅子丸',
              type: 'sheet',
              description: '',
            },

            {
              id: 2,
              name: '忍者哈特利',
              type: 'sheet',
              description: '',
            },

            {
              id: 3,
              name: '米奇',
              type: 'sheet',
              description: '',
            },

            {
              id: 4,
              name: '高飛',
              type: 'sheet',
              description: '',
            },
          ],
      })
        .then((response) => {
          response.data.json.body.forEach((element) => {
            if (!this.list1.includes(element.name)) {
              this.list2.push(element.name);
            }
          });
        });
    },
  },
};
</script>
