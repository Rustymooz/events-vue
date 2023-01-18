<template>
    <Responsive :breakpoints="{samll: el => el.width <= 500}">
    <div class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
        <img src="../assets/pikachu_pog.png" width="60" height="55">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" padding="10px">
        <li class="nav-item active">
            <router-link to="/" class="nav-link" id="rl">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/eventslist" class="nav-link" id="rl">Events</router-link>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Events
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/eventslist" class="dropdown-item">All events</router-link>
            <router-link :to="{name: 'EventsByType', params: {type: 'football'}}" class="dropdown-item">Football</router-link>
            <router-link :to="{name: 'EventsByType', params: {type: 'cycling'}}" class="dropdown-item">Cycling</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="/addevent">Add event</router-link>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </div>
</Responsive>
</template>

<script>
    export default{
        name: "Nav_bar",
        data(){
            return{
                type: ''
            }
        }
        
    }
</script>

<style scoped>
    img{
        border-radius: 50%;
    }
    #rl{
        color:blue;
        border-radius: 20%;
        padding-left: 5px;
        padding-right: 5px;
    }
    #rl:hover{
        background-color:lightblue;
    }
    li{
        padding: 5px;
    }
</style>
