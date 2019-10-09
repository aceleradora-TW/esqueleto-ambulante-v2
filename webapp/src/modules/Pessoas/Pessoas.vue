<template>
  <div>
    <h3>Pessoas</h3>
  </div>
</template>

<script>
import service from '@/services/pessoas.service'
export default {
  name: 'Pessoas',
  props: {},
  
  data: () => ({ 
    message: 'Hello World'  
  }),
  
  async created() {
    const {data} = await service.getPessoas(); 
    // eslint-disable-next-line quotes
    console.log(data);
  },
  
  methods: {}
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
