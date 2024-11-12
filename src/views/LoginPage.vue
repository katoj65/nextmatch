<template>
<ion-page>
<ion-content class="ion-padding">
<div class="logo">
<ion-img src="./logo1.png" alt="logo" style="width:60%;margin-left:20%;margin-right:20%;"></ion-img>
</div>


<p class="text-center" style="font-size:15px;font-family:fantasy;font-weight:bolder;">
  Insights Beyond the Scoreboard
</p>

<div>
<form v-if="page=='login'">
    <ion-item lines="none">
        <ion-label position="floating">Telephone:</ion-label>
        <ion-input type="number"></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-label position="floating">Password:</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>
      <div style="margin-top:30px;">
      <ion-button expand="block" fill="clear" class="submit" size="default">Login</ion-button>

      </div>

</form>
<register-page v-else/>
<ion-button expand="block" fill="clear" class="register" size="default">Register</ion-button>
</div>

</ion-content>
</ion-page>
</template>
<script>
import {IonPage,IonContent,IonImg, IonInput, IonButton, IonItem, IonLabel} from '@ionic/vue';
import RegisterPage from './RegisterPage.vue';
export default {
components:{
IonPage,IonContent,IonImg,IonInput,IonButton,IonItem,IonLabel,RegisterPage
},
data(){return{
page:'login',
form:{
tel:'',
password:'',
}



}}



}
</script>
<style scoped>
.logo{
text-align: center;
}
ion-content{
--padding-top:30%;
}
ion-label {
--margin-bottom:10px;
}
ion-input{
margin-top:15px;
border-bottom:solid 2px black;
}
ion-button{
margin-top:20px;
--background: #f8f9f9;
--height:30px;
color:black;
--padding-top: 15px;
--padding-bottom: 15px;
}

ion-button.submit{
 --background: #2e4053;
 color:white;
}
</style>