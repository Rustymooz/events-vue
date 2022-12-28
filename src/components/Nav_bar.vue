<template>
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
            Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
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
</template>

<script>
    export default{
        name: "Nav_bar"
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
