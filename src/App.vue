<template>
  <div class="menu-horizontal">
    <nav class="container-1"> 
      <div class="container-2">
          <h1 class="titulo">Tarefas</h1>
          <div class="div-tempo">
              <img src="./img/relogio2.png"  width="15px" height="15px" alt="">
              <p id="horas">5h</p>
              <span class="numero-10">10</span>
          </div>
      </div>

      <div class="container-3" :style="mostrarBusca ? { marginRight: 0 } : ''">
        <div class="div-input" :class="mostrarBusca ? 'block' : 'none'">
          <img id="lupa" src="./img/lupa.png" width="15" alt="">
          <input id="input" type="text" placeholder="Pesquisar por Tarefa..." @blur="mostrarBusca = false">
        </div>

        <img class="ativar-busca" src="./img/lupa.png" width="15" alt="" @click="ativarBusca">
        
        <div class="container-4">
          <button class="filtro">
            <span class="filtro-nome">FILTRO</span>
            <img src="./img/filtro.png" width="15px" alt="">
          </button>
          <img src="./img/notificacao.png" width="20px" height="20px" alt="">
          <img src="./img/expandir.png" width="20px" height="20px" alt="">
        </div>
      </div>

    </nav>
  </div>
  <Menu_VE />
  <Corpo_Cards />
</template>

<script>

import Menu_VE from './views/Menu_VE.vue'

import Corpo_Cards from './views/Corpo_Cards.vue'

export default {
  components:{
    Menu_VE,
    Corpo_Cards
  },
  data() {
    return {
      mostrarBusca: false
    }
  },
  methods: {
    ativarBusca() {
      this.mostrarBusca = true;
    }
  }
}
</script>

<style >

/*---------------------- MENU HORIZAONTAL---------------------*/
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

body{
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.menu-horizontal {
  margin-right: 124px;
  margin-left: 124px;
  border: 2px solid #8cc587;
  border-left: 34px solid #8cc587;
  border-right: 4px solid #8cc587;
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
  flex-grow: 1;
}

.container-3{
  gap: 20px; 
  margin-right: 4%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;
}

.container-4{
  gap: 10%; 
  display: flex;
  align-items: center;
}

.titulo {
  font-family: Montserrat;
  font-weight: 500;
  color: #3A5138;
}

#horas{
  font-family: Montserrat;
  font-weight: 600;
  color: #7F947F;
  margin-right: 7px;
}

.div-tempo{
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 20px;
}

.numero-10{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #748B75;
  width: 22px;
  height: 22px;
  border-radius: 28px;
  color: #fff;
  font-family: Montserrat;
  font-weight: 500;
}

.div-input{
  display: flex;
  align-self: center;
  align-items: center;
  border:none;
  gap: 15px;
  height: 6vh;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px #0000003d;
  position: absolute;
  left: 0;
  right: 0;
}

@media (min-width: 900px) {
  div.div-input {
    position: static;
    display: flex;
  }

  .ativar-busca {
    display: none;
  }
}

@media (min-width: 1200px) {
  div.div-input {
    width: 100%;
  }
}

.block {
  display: flex;
}

.none {
  display: none;
}

#input{
  border: none;
  font-family: Rubik;
  font-size: 17px;
  font-weight:600;
  color: #0000004D;
  opacity: 1;
  
}

.input::placeholder{
  color: #0000004D;
  opacity: 1;
}

#lupa{
  margin-left: 15px;
}

.filtro{
  display: flex;
  align-items: center;
  border:none;
  gap: 5px;
  padding: 12px;
  border-radius: 4px;
  background-color: #8CC587;
  box-shadow: 0px 3px 6px #00000029;
  color: #000;
}

.filtro-nome{
  font-size: 17px;
  font-family: Montserrat;
  font-weight: 700;
  color: #3A5138;
}
</style>