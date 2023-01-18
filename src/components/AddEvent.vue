<template>
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input v-model="name" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Add good event :)">
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Duration</label>
    <input v-model="duration" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Duration in minutes">
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Description</label>
    <textarea v-model="description" type="email" class="form-control" id="exampleFormControlInput1" placeholder="More info"></textarea>
  </div>
  <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Type</label>
      <select v-model="type" class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Type</option>
        <option value="football">Football</option>
        <option value="cycling">Cycling</option>
      </select>
    </div>
    <div class="form-group">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Date</label>
        <Datepicker v-model="date" range />
    </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</template>

<script>

import { ref, onMounted } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default{
    components: {Datepicker},
    name: 'AddEvent',
    data(){
        return{
            name: "",
            duration: 0,
            description: "",
            type: "",
            date: ""
        }
    }
}
</script>

<style scoped>
    .form-group{
        margin-left: 20%;
        margin-right: 20%;
    }
    .col-auto{
        margin-left: 19%;
        margin-right: 19%;
    }
</style>