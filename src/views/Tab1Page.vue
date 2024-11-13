<template>
<app-layout>
<ion-content style="padding:0;">
<div>
<ion-list lines="none">
<!-- Header 1 -->
<ion-list-header>
<ion-label class="text-dark text-bold text-uppercase">Ongoing</ion-label>
<ion-button class="text-dark">See All</ion-button>
</ion-list-header>

<!-- Items under Header 1 -->
<ion-item v-for="(o,key) in ongoing" :key="key">
    <ion-avatar slot="start">
        <img alt="Silhouette of a person's head" src="/public/league/premier_league.png" />
      </ion-avatar>


<div>
<div class="text-bold">
<small class="text-bold">{{ o.score.home }}</small>
{{ o.teams.home }}
</div>
<div class="text-muted text-bold">
<small> {{ o.score.away }}</small>
{{ o.teams.away }}
</div>
</div>
<ion-label slot="end" class="text-muted">
<div style="text-align:right;">
<small class="text-small">
3:0
</small>
<br/>
<small class="text-small">
{{ o.ground }}
</small>
</div>
</ion-label>
</ion-item>






<!-- <ion-list-header class="inactive-content">
<ion-label class="text-muted text-uppercase text-bold">Upcoming</ion-label>
<ion-button class="text-dark">30 More</ion-button>
</ion-list-header> -->



<ion-item v-for="(o,key) in upcoming" :key="key" class="inactive-content">
    <ion-avatar slot="start">
        <img alt="Silhouette of a person's head" src="/public/league/premier_league.png" />
      </ion-avatar>
    <div>
    <div class="text-muted">{{ o.teams.home }} </div>
    <div class="text-muted">{{ o.teams.away }} </div>
    </div>
    <ion-label slot="end" class="text-muted">
    <div style="text-align:right;">
    <small class="text-small">{{ o.time }}</small>
    <br/>
    <small class="text-small">
    {{ o.ground }}
    </small>
    </div>
    </ion-label>
    </ion-item>

    <ion-item class="inactive-content">
    <ion-label>
    <small>50 Upcoming Matches</small>
    </ion-label>
    </ion-item>

</ion-list>








</div>
</ion-content>
</app-layout>
</template>
<script>
import AppLayout from '@/components/AppLayout.vue';
import { IonContent, IonList, IonItem, IonLabel, IonAvatar, IonListHeader, IonButton  } from '@ionic/vue';
// import MyTeam from '@/team/MyTeam.vue';
export default {
components:{
AppLayout,
IonContent,
IonList,
IonItem,
IonButton,
IonLabel,
IonAvatar,
IonListHeader

},

data(){return{
ongoing:[
{teams:{home:'Manchester United',away:'Chelsea'},score:{home:1,away:1},time:'3:40 PM',ground:'Old Trafford'},
{teams:{home:'Liverpool',away:'Manchester City'},score:{home:0,away:0},time:'3:40 PM',ground:'Anfield'},
{teams:{home:'New Castle',away:'Epswich'},score:{home:2,away:1},time:'3:40 PM',ground:'Webley'},
{teams:{home:'Sanderland',away:'Swansea'},score:{home:0,away:4},time:'3:40 PM',ground:'Webley'},
{teams:{home:'Read Madrid',away:'Bacelona'},score:{home:2,away:0},time:'3:40 PM',ground:'Webley'},
{teams:{home:'A Madrid',away:'Valencia'},score:{home:1,away:0},time:'3:40 PM',ground:'Webley'},

],


upcoming:[
{teams:{home:'Manchester United',away:'Chelsea'},score:{home:0,away:0},time:'3:40 PM',ground:'Old Trafford'},
{teams:{home:'Liverpool',away:'Manchester City'},score:{home:0,away:0},time:'3:40 PM',ground:'Anfield'},
{teams:{home:'New Castle',away:'Epswich'},score:{home:0,away:0},time:'3:40 PM',ground:'Webley'},
{teams:{home:'Sanderland',away:'Swansea'},score:{home:0,away:0},time:'3:40 PM',ground:'Webley'},
]




}},

}
</script>
<style scoped>
ion-item.inactive-content, ion-header.inactive-content{
--background:#f3fafe;
}
</style>