<template>

  <div class="container-menu">
    <div class="menu-vertical">
      <nav class="container-icones"> 
        <img id="logo" src="@/img/logo.png" width="50" height="50" alt="s">
        <img src="@/img/menu.png" width="20" alt="">
        <img src="@/img/dashboard.png" width="20" alt="">
        <img src="@/img/notificacao4.svg" width="20" alt="">
        <img src="@/img/calendario.svg" width="20" alt="">
        <img src="@/img/alvo.svg" width="20" alt="">
        <img src="@/img/ficha.svg" width="20" alt="">
        <img src="@/img/cadastrar.svg" width="20" alt="">
        <img src="@/img/config.svg" width="20" alt="">
      </nav>
    </div>

    <div class="menu-vertical-2">
      <nav class="container-icones-2"> 
        <img id="mala" src="@/img/mala.svg" width="20" alt="s">
        <img src="@/img/seta-direita.png" width="20" alt="">
        <img src="@/img/numero-3.png" width="20" alt="">
      </nav>
    </div>

  </div>
  
  <div class="menu-vertical-3">
    <nav class="container-icones-2"> 
      <img id="mala" src="@/img/check.svg" width="20" alt="s">
      <img src="@/img/seta-esquerda.png" width="20" alt="">
      <img src="@/img/numero-2.png" width="20" alt="">
    </nav>
  </div>

  <div class="menu-vertical-4">
    <nav class="container-icones-2"> 
      <img id="mala" src="@/img/y.svg" width="20" alt="s">
      <img src="@/img/seta-esquerda.png" width="20" alt="">
      <img src="@/img/numero-2.png" width="20" alt="">
    </nav>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style>
.container-menu{
  display: flex;
  flex-direction: row;
  gap: 70px;
}

.menu-vertical{
  display: flex;
  position: absolute;
  justify-content: center;
  border-radius: 10px;
  top: 0;
  width: 8vh;
  height: 100vh;
  background: #8CC587 ;
}

.container-icones{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5%;
}

#logo{
  margin-top: 10px;
}

.menu-vertical-2{
  display: flex;
  position: absolute;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  margin-left: 4%;
  top: 0;
  width: 8vh;
  height: 100vh;
  background: #FFF;
}

.container-icones-2{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1%;
}

#mala{
  margin-top: 25px;
}

.menu-vertical-3{
  display: flex;
  position: absolute;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  margin-left: 100%;
  top: 0;
  width:8vh;
  height: 100vh;
  background: #FFF;
}

.menu-vertical-4{
  display: flex;
  position: absolute;
  justify-content: center;
  margin-left: 96%;
  box-shadow: 0px 1px 5px 0px #0000003d;
  top: 0;
  width: 8vh;
  height: 100vh;
  background: #FFF;
}

</style>