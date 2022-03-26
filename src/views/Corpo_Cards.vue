<template>
  <div class="container-corpo">
    <div class="card-vertical">
      <div class="etiqueta">
        <h1 class="titulo-etiqueta">Aguardando</h1>
        <div class="tempo-etiqueta">
          <div class="horas-etiqueta">
            <img src="@/img/time.svg" alt="">
            <p class="horas-etiqueta">1h</p>
          </div>
          <img src="@/img/numero-3.png" width="20px" height="20px" alt="">
        </div>
      </div>

      <div class="card">

        <div class="container-informacao">
          <button class="setor">DESENVOLVIMENTO</button>
          <div class="container-codigos">
              <span class="descrisao">Código:</span>
              <span class="codigo-numero">#12345</span>
          </div>
        </div>

        <h1 class="tarefa">CRIAR MIGRATION</h1>

        <div class="container-projetos">
          <div class="container-empresa">
            <span class="descrisao">Projeto:</span>
            <span class="empresa">Company</span>
          </div>

          <div class="container-previsao">
            <span class="descrisao">Prevista:</span>
            <div class="container-data">
              <img src="@/img/calendario.svg" width="20px" height="20px" alt="">
              <span class="data-previsao">30/12/2021</span>

            </div>
          </div>
        </div>

        <div class="container-descrisao">
          <span class="descrisao">Descrisão:</span>
          <span class="descrisao-p">Usar a branch master, fazer pull, após isso...</span>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
export default {
  
}
</script>

<style>

.container-corpo{
  display: flex;
  justify-content:flex-start;
  flex-direction: row;
  margin-left: 10%;
  margin-top: 10px;
  height: 100vh;
  width: 175vh;
  background-color: #fff;
}

.card-vertical{
  display: flex;
  justify-content:flex-start;
  flex-direction: column;
  align-items: center;
  margin-left: 2%;
  margin-top: 2%;
  gap: 18px;
  width: 50vh;
  height: 85vh;
  background-color: #e8ebe8;
  border-top-left-radius: 10px;
}

.etiqueta{
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 50vh;
  height: 7vh;
  background-color: #8CC587;
  border-top-left-radius: 10px;
  border-bottom-right-radius:10px;
}

.titulo-etiqueta{
  margin-left: 15px;
  font-family: Montserrat;
  font-weight: 600;
  color: #fff;
  font-size: 15px;
}

.horas-etiqueta{
  display: flex;
  gap: 3px;
  font-family: Montserrat;
  font-weight: 500;
  color:#fff
}

.tempo-etiqueta{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-right: 20px;
}

.card{
  display: flex;
  flex-direction: column;
  /* gap: 3px; */
  width: 48vh;
  height: 30vh;
  box-shadow: 0px 1px 5px 0px #0000003d;
  border-radius: 5px;
  background-color: #fff;
}

.container-informacao{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.setor{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  color: #00000080;
  background: #fff;
  border: 2px solid #00000080;
  border-radius: 5px;
}

.container-codigos{
  display: flex;
  flex-direction: column;
}

.descrisao{
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  opacity: 1;
  color: #00000080;
}

.descrisao-p{
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  color: #000000B3;
  opacity: 1;
}

.codigo-numero{
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  color: #000000E6;
}

.tarefa{
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  margin-left: 15px;
  margin-right: 15px;
  color: #000000E6;
  opacity: 1;
}

.container-projetos{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
}

.container-empresa{
  display: flex;
  flex-direction: column;
}

.empresa{
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #000000E6;
  opacity: 1;
}

.container-previsao{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.container-data{
  display: flex;
  align-items: center;
  gap: 10px;
}

.data-previsao{
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #000000E5;
  opacity: 1;
}

.container-descrisao{
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  gap: 3px;
}

</style>