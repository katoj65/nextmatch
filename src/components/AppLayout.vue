<template>
<ion-page>
<ion-header class="ion-no-border" style="background: #f2f3f4;">
<ion-toolbar>

<ion-buttons slot="start">
<ion-button>
<ion-icon slot="icon-only" :icon="menu"></ion-icon>

</ion-button>
</ion-buttons>
<ion-buttons slot="end">
<ion-button>
<ion-icon slot="icon-only" :icon="search"></ion-icon>
</ion-button>
<ion-button>
<ion-icon slot="icon-only" :icon="notifications"></ion-icon>
</ion-button>
<ion-button>
<ion-icon slot="icon-only" :icon="heart"></ion-icon>
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
import { menu,search,heart,notifications } from 'ionicons/icons';
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
search,
heart,
notifications


}}
}
</script>
<style scoped>
ion-header{
--background:#f2f3f4 ;
}
ion-toolbar{
    --background:#f2f3f4 ;
    }


</style>