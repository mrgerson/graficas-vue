<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-4">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">INICIO</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/">muertes</router-link>
            </li>
            <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/about">graficas</router-link>
            </li>
            <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/api">api</router-link>
            </li>
             <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/javascript">TecnologiasJS</router-link>
            </li>
             <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/areapolar">Area polar</router-link>
            </li>
             <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/barra">Barra</router-link>
            </li>
             <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/burbuja">Burbuja</router-link>
            </li>
             <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/radar">Radar</router-link>
            </li>
             <li class="nav-item">
               <router-link class="nav-link active" aria-current="page" to="/dispersion">Dispersión</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
