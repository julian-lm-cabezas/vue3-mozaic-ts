<template>
  <router-view/>
  <div id="bg"></div>
  <div id="bg-mask"></div>
</template>

<style lang="scss">
html, body{
  margin:0;
  padding:0;
  width:100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'LeroyMerlin', serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $gray-800;
  width:100%;
  height: 100vh;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  margin:0;
  padding: 0;
}
#bg{
  position: fixed;
  width:100%;
  height: 100vh;
  top:0;
  left: 0;
  z-index: -10;
  background: url('~@/assets/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .3;
}
#bg-mask{
  position: fixed;
  width:100%;
  height: 100vh;
  top:0;
  left: 0;
  z-index: -5;
  background: linear-gradient( 45deg, rgba(255,255,255, .7), rgba(255,255,255, .8));
  
}
</style>
