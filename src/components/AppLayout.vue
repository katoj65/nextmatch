<template>
<ion-page>
<ion-header>
<ion-toolbar>
<ion-title>{{ title!=null?title:defTitle }} </ion-title>
</ion-toolbar>
</ion-header>
<ion-content :fullscreen="true">
<ion-header collapse="condense">
<ion-toolbar>
<ion-title size="large">{{ title!=null?title:defTitle }}</ion-title>
</ion-toolbar>
</ion-header>
<slot/>
</ion-content>
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
components:{
IonPage, IonHeader, IonToolbar, IonTitle, IonContent
},

props:{
title:{},
sutitle:{},
},
data(){return{
defTitle:'Nextmatch',





}},
setup(){return{



}}
}
</script>
<style scoped>


</style>