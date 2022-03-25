<template>
  <div class="menu-horizontal">
    <nav class="container-1"> 
      <div class="container-2">
          <h1 class="titulo">Tarefas</h1>
          <div class="div-tempo">
              <img src="./img/relogio2.png"  width="15px" height="15px" alt="">
              <p id="horas">5h</p>
              <img src="./img/numero.png" width="17px" alt="">
          </div>
      </div>

      <div class="container-3">
        <div class="div-input">
          <img id="lupa" src="./img/lupa.png" width="15px" alt="">
          <input id="input" type="text" placeholder="Pesquisar por Tarefa...">
        </div>
        
        <div class="container-4">
          <button class="filtro">FILTRO
            <img src="./img/filtro.png" width="15px" alt="">
          </button>
          <img src="./img/notificacao.png" width="20px" height="20px" alt="">
          <img src="./img/expandir.png" width="20px" height="20px" alt="">
        </div>
      </div>

    </nav>
  </div>
  <Menu_VE />
</template>

<script>

import Menu_VE from './views/Menu_VE.vue'

export default {
  components:{
    Menu_VE
  }
}
</script>

<style >

/*---------------------- MENU HORIZAONTAL---------------------*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

body{
  margin: 0;
  padding: 0;
  background-color: #8ec78788;
}

.menu-horizontal{
  margin-left: 10%;
  margin-right: 4.2%;

}

.container-1{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}

.container-2{
  display: flex;
  align-items: center;
  margin-left: 1%;
}

.container-3{
  gap: 20px; 
  margin-right: 4%;
  display: flex;
  align-items: center;
}

.container-4{
  gap: 20%; 
  display: flex;
  align-items: center;
}

.titulo {
  font-family: poppins;
  font-weight: 300;
  color: #3b5238;
}

#horas{
  font-family: poppins;
  color: #7F947F;
  margin-right: 7px;
}

.div-tempo{
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 20px;
}

.div-input{
  display: flex;
  align-self: center;
  align-items: center;
  border:none;
  gap: 15px;
  width: 70vh;
  height: 6vh;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px #0000003d;
}

#input{
  border: none;
  font-family: poppins;
  font-weight:500;
  color: #b2b2b2;
}

.input::placeholder{
  color: #b2b2b2;
}

#lupa{
  margin-left: 15px;
}

.filtro{
  display: flex;
  align-items: center;
  border:none;
  gap: 5px;
  padding: 10px;
  border-radius: 4px;
  background-color: #8ec787;
  color: #000;
  font-family: poppins;
}
</style>