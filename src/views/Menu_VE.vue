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


        <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content" v-slot="{ close }">
          <span class="modal__title">
            <span class="modal-titulo">CRIAR CARD</span>
          </span>
          <div class="modal__content">
            <div class="grupo-campos">
              <label for="lista" class="descricao-modal">Lista</label>
              <select id="lista" class="input-modal" v-model="FormData.listaId">
                <option :value="lista.id" v-for="lista of listas" :key="lista.id">{{lista.titulo}}</option>
              </select>
              <label for="setor" class="descricao-modal">Setor:</label>
              <input type="text" id="setor" class="input-modal" v-model="FormData.setor">
              <label for="codigo" class="descricao-modal">Código:</label>
              <input type="text" id="codigo" class="input-modal" v-model="FormData.codigo">
              <label for="tarefa" class="descricao-modal">Tarefa:</label>
              <input type="text" id="tarefa" class="input-modal" v-model="FormData.tarefa">
              <label for="empresa" class="descricao-modal">Empresa:</label>
              <input type="text" id="empresa" class="input-modal" v-model="FormData.empresa">

            </div>
            <div class="grupo-campos">
              <label for="data" class="descricao-modal">Previsão:</label>
              <input type="date" id="data" class="input-modal" v-model="FormData.data">
              <label for="tempo" class="descricao-modal">Tempo:</label>
              <input type="text" id="tempo" class="input-modal" v-model="FormData.tempo">
              <label for="saldo" class="descricao-modal">Saldo:</label>
              <input type="text" id="saldo" class="input-modal" v-model="FormData.saldo">
              <label for="situacao" class="descricao-modal">Situação:</label>
              <select id="situacao" class="input-modal" v-model="FormData.situacao">
                <option>EM DIA</option>
                <option>ATENÇÃO</option>
                <option>EM ATRASO</option>
              </select>
              <label for="equipe" class="descricao-modal">Equipe:</label>
              <input type="text" id="equipe" class="input-modal" v-model="FormData.equipe">
            </div>
          </div>

          <div class="textarea ">
            <label for="descricao" class="descricao-modal">Descrição:</label>
            <textarea type="text" id="descricao" class="input-modal"  v-model="FormData.descricao"></textarea>
          </div>

          <div class="modal__action">
            <button class="modal-button" @click="createdPost">Confirmar</button>
            <button class="modal-button" @click="close">Cancelar</button>
          </div>
          <img src="@/img/excluir.png" alt="" class="modal__close" width="25" height="25" @click="close">    
        </vue-final-modal>

        <button @click="showModal = true" class="criar-card">+</button>
      </nav>

      <div class="menu-vertical-2">
        <nav class="container-icones-2">
          <img id="mala" src="@/img/mala.svg" width="20" alt="s">
          <img src="@/img/seta-direita.png" width="20" alt="">
          <span class="numero-3">3</span>
        </nav>
      </div>
    </div>
  </div>

  <div class="menu-container-2">

    <div class="menu-vertical-3">
      <nav class="container-icones-2"> 
        <img id="mala" src="@/img/y.svg" width="20" alt="s">
        <img src="@/img/seta-esquerda.png" width="20" alt="">
        <span class="numero-2">2</span>
      </nav>
    </div>

    <div class="menu-vertical-4">
      <nav class="container-icones-2"> 
        <img id="mala" src="@/img/check.svg" width="20" alt="s">
        <img src="@/img/seta-esquerda.png" width="20" alt="">
        <span class="numero-2">2</span>
      </nav>
    </div>

  </div>
</template>

<script>

import axios from "axios"
import {  VueFinalModal } from 'vue-final-modal';

export default {
  inheritAttrs: false,

  data() {
    return {
      showModal: false,

      FormData:{
        listaId:'',
        setor:'',
        codigo:'',
        tarefa:'',
        empresa:'',
        data:'',
        tempo:'',
        saldo:'',
        situacao:'',
        equipe:'',
        descricao:''
      },
      listas: []
    }
  },

  components:{
    VueFinalModal,
  },

  methods:{
    createdPost() {
      axios
        .post('http://localhost:3000/cards', this.FormData)
        .then((response) => {
          this.$emit('criarTask')
          this.showModal = false
          console.log(response.data)
        })
    },
  },
  created() {
    axios
      .get('http://localhost:3000/listas')
      .then((response) => {
        this.listas = response.data;
      })
  }
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
  width: 62px;
}

#logo{
  padding: 7px;
  padding-bottom: 0;
}

.menu-vertical-2{
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  width: 62px;
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
  width: 62px;
  background: #FFF;
   z-index: 1;
}

.menu-vertical-4{
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px #0000003d;
  width: 62px;
  background: #FFF;
}

.criar-card{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 28px;
  background-color: #D60297;
  color: #fff;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 28px;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
}


.numero-3{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 28px;
  background-color: #3A5138;
  color: #fff;
  font-family: Montserrat;
  font-weight: 500;
}

.numero-2{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 28px;
  background-color: #3A5138;
  color: #fff;
  font-family: Montserrat;
  font-weight: 500;
}

</style>

<style>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background: #fff;
}
.modal__title {
  text-align: center;
  font-weight: bold;
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-family: Montserrat;
  background-color: #8CC587;
  margin: 0px;
  margin-left: -17px;
  margin-right: -17px;
  margin-top: -17px;
  margin-bottom: 17px;
  border-radius: 5px 5px 0px 0px;
  padding: 10px;
  color:#fff ;
}
.modal__content {
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  gap: 20px;
}

.grupo-campos{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.descricao-modal{
  font-family: Montserrat;
  font-weight: 600;
  font-size: 12px;
  color: #00000080;
}

.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
  gap: 10px;
}

.modal-button{
  border: none;
  background-color: #107154;
  padding: 5px 20px 5px 20px;
  border-radius: 3px;
  color: #fff;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 3px 6px #00000029;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.input-modal{
  border: none;
  background-color: #0000001A;
  border-radius: 5px;
  padding: 8px;
}

.textarea{
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 5px;
  width: 100%;
}

</style>
