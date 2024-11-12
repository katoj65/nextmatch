<template>
<ion-page>
<ion-header class="ion-no-border">
<ion-toolbar>

<ion-buttons slot="start">
<ion-button>
<ion-icon slot="icon-only" :icon="menu"></ion-icon>

</ion-button>
</ion-buttons>
<ion-buttons slot="end">
<ion-button>
<ion-icon slot="icon-only" :icon="heartCircle"></ion-icon>
</ion-button>
<ion-button>
<ion-icon slot="icon-only" :icon="search"></ion-icon>
</ion-button>
</ion-buttons>


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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { menu,heartCircle,search } from 'ionicons/icons';
export default {
components:{
IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonButton, IonIcon
},

props:{
title:{},
sutitle:{},
},
data(){return{
defTitle:'Nextmatch',





}},
setup(){return{
menu,
heartCircle,
search


}}
}
</script>
<style scoped>


</style>