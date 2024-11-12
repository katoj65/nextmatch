<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { StatusBar, Style } from '@capacitor/status-bar';

export default {
components:{IonApp, IonRouterOutlet},
  mounted(){
    StatusBar.setBackgroundColor({ color: '#f0f0f0' });
    StatusBar.setStyle({ style: Style.Light });
    this.loginStatus();
  },
methods:{
loginStatus(){
if(this.$store.state.isAuthenticated==false){
  this.$router.push('/login');
}
},



  }




}
</script>
<style>
  ion-app {
    background-color: #f0f0f0;
  }
.text-center{
text-align: center;
}


</style>