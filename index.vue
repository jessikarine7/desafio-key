<template>
  <div>
    <nav class="container-1"> 
      <div class="container-2">
          <h1 class="titulo">Tarefas</h1>
          <div class="div-tempo">
              <img src="./img/relogio.png"  width="15px" height="15px" alt="">
              <p id="horas">5h</p>
              <button id="minutos">10</button>
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
  <!-- <img src="./img/layout.jpeg" alt=""> -->
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

/*---------------------- MENU HORIZAONTAL---------------------*/

body{
  background-color: #7cd48a;
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

.div-tempo{
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
}

#minutos{
  border: none;
  border-radius: 50px;
  padding: 5px;
  background-color: #7cd48a;
  color: #fff;
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
}

.input::placeholder{
  color: #0000003b;
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
  background-color: #7cd48a;
  color: #000;
}
</style>