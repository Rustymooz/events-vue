<template>
    <Responsive :breakpoints="{samll: el => el.width <= 500}">
    <div>&nbsp</div>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    <div v-if="search">
        <div v-for="event in filterEvents" :key="event.id" class="list-group">
            <router-link :to="{name: 'Event', params: {id: event.id}}" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{event.name}}</h5>
                <small>{{daysUntilEvent(event)}}</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
            </router-link>
        </div>
    </div>
    <div v-else>
        <div v-for="event in events" :key="event.id" class="list-group">
        <router-link :to="{name: 'Event', params: {id: event.id}}" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{event.name}}</h5>
            <small>{{daysUntilEvent(event)}}</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
        </router-link>
        </div>
    </div>
</Responsive>
</template>

<script>
export default{
    name: 'EventsByType',
    data(){
        return{
            search:'',
            events: [],
            type: this.$route.params.type
        }
    },
    mounted(){
        fetch('http://localhost:3000/api/eventstype/' + this.type)
            .then((res) => res.json())
            .then(data => this.events = data)
            .catch(err => console.log(err.message))
    },
    computed:{
        filterEvents(){
            return this.events.filter(event => event.name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    methods: {
        daysUntilEvent(event){

            var today = new Date();
            console.log(today)
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            var todayDate = dd + '/' + mm + '/' + yyyy;

            //if(today.getTime() == event.startDate.getTime()) return "Today"
            var eventDate = event.startDate.split("T")
            var sDate = eventDate[0]
            var eventStartDate = new Date(sDate)

            if(today.getTime() > eventStartDate.getTime()){
                const diffTime = Math.abs(eventStartDate - today);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                return diffDays + " days ago"
            }

            const diffTime = Math.abs(eventStartDate - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return "In " + diffDays + " days"
        }
    }
}
</script>

<style scoped>
    div{
        padding-left: 50px;
        padding-right: 50px;
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 10px;
    }
    .form-inline{
        margin-left: 75%;
    }
</style>