<template>
    <Responsive :breakpoints="{samll: el => el.width <= 500}">
    <div v-if="event" class="card" style="width: 30rem;">
    <img class="card-img-top" src="../assets/avicii.png" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{event.name}}</h5>
        <p class="card-text">{{event.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
    </div>
    <div v-else>Loading event...</div>
</Responsive>
</template>

<script>
export default{
    props: ['id'],
    name: 'Event',
    data(){
        return{
            id: this.$route.params.id,
            event: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/api/events/' + this.id)
            .then((res) => res.json())
            .then(data => this.event = data[0])
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
    div{
        margin: 50px;
    }
</style>