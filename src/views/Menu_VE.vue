<template>

  <div class="menu-container-1">
    <div class="menu-vertical-1">
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

      <div class="menu-vertical-2">
        <nav class="container-icones-2"> 
          <img id="mala" src="@/img/mala.svg" width="20" alt="s">
          <img src="@/img/seta-direita.png" width="20" alt="">
          <img src="@/img/numero-3.png" width="20" alt="">
        </nav>
      </div>
    </div>
  </div>

  <div class="menu-container-2">

    <div class="menu-vertical-3">
      <nav class="container-icones-2"> 
        <img id="mala" src="@/img/y.svg" width="20" alt="s">
        <img src="@/img/seta-esquerda.png" width="20" alt="">
        <img src="@/img/numero-2.png" width="20" alt="">
      </nav>
    </div>

    <div class="menu-vertical-4">
      <nav class="container-icones-2"> 
        <img id="mala" src="@/img/check.svg" width="20" alt="s">
        <img src="@/img/seta-esquerda.png" width="20" alt="">
        <img src="@/img/numero-2.png" width="20" alt="">
      </nav>
    </div>

  </div>
  
  
</template>

<script>
export default {
  
}
</script>

<style>
.menu-container-1{
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.menu-vertical-1{
  display: flex;
  justify-content: center;
}

.container-icones{
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #8CC587;
  border-radius: 10px;  
  gap: 5%;
}

#logo{
  padding: 7px;
  padding-bottom: 0;
}

.menu-vertical-2{
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  width: 5vw;
  max-width: 62px;
  background: #FFF;
  z-index: 1;
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

.menu-container-2{
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

.menu-vertical-3{
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  width: 5vw;
  max-width: 62px;
  background: #FFF;
   z-index: 1;
}

.menu-vertical-4{
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  width: 5vw;
  max-width: 62px;
  background: #FFF;
}

</style>