<template>
  <div>
    <h2>msg is {{msg}}</h2>
    <CustomButton
      name='Call API'
      :onClick="getHello"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CustomButton from '../components/CustomButton';

export default {

  components: {
    CustomButton
  },

  data() {
    return {
      error: {},
      msg: "",
    };
  },

  methods: {

    getHello() {
      axios.get('/api/hello').then((response) => {
        this.msg = response.data.msg;
      }, (response) => {
        this.error = response.data;
      });
    },

  },

}
</script>
