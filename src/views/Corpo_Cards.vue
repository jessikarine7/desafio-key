<template>
  <div>
    <draggable
      class="container-corpo"
      :list="listas"
      item-key="titulo">
      <template #item="{ element }">
        <div class="card-vertical">
          <div class="etiqueta">
            <h1 class="titulo-etiqueta">{{element.titulo}}</h1>
            <div class="tempo-etiqueta">
              <div class="horas-etiqueta">
                <img src="@/img/time.svg" alt="">
                <p class="horas-etiqueta">1h</p>
              </div>
              <img src="@/img/numero-3.png" width="20px" height="20px" alt="">
            </div>
          </div>

          <draggable 
            :list="element.cards"
            item-key="titulo"
            class="drag-cards"
            :class="element.cards.length ? '' : 'empty'"
            :group="{ name: 'cards' }"
          >
            <template #item="{ element }">
              <div class="card">
                <div class="container-informacao">
                  <button class="setor">DESENVOLVIMENTO</button>
                  <div class="container-codigos">
                      <span class="descrisao">Código:</span>
                      <span class="codigo-numero">#12345</span>
                  </div>
                </div>

                <h1 class="tarefa">{{element.titulo}}</h1>

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

                <div class="container-rodape">
                  <span class="limite">Acompanhamento</span>

                  <div class="container-hora">
                    <div class="hora-prevista">
                      <span class="descrisao titulo-hora">Previsto</span> 
                      <div class="icone-hora">
                        <img src="@/img/relogio.png" width="20" height="20" alt="">
                        <span class="hora">00:30</span>
                      </div>
                    </div>
                    <span class="situacao">EM DIA</span>
                  </div>

                  <div class="container-saldo">

                    <div class="saldo-horas">
                      <span class="descrisao titulo-saldo">Saldo</span>
                      <div class="icone-saldo">
                        <img src="@/img/relogio.png" width="20" height="20" alt="">
                        <span class="saldo">+00:10</span>
                      </div>

                    </div>
                    <div>
                      <span class="descrisao">Equipe</span>
                
                    </div>

                  </div>

                </div>

              </div>


            </template>
          </draggable>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },

  data() {
    return {
      listas: [
        { titulo: "Aguardando", cards: [{titulo:'card1'}, {titulo:'card2'}] },
        { titulo: "Em Andamento", cards: [{titulo:'card2'},{titulo:'card213223'}] },
        { titulo: "Pendência", cards: [{titulo:'card3'}] },
        { titulo: "Finalizado", cards: [{titulo:'card4'}] },
        { titulo: "Outros", cards: [{titulo:'card5'}] },
      ],
      drag: false,
    };
  }
};
</script>

<style>
.container-corpo {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 8%;
  margin-right: 9%;
  overflow-x: scroll;
}

.card-vertical {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-left: 1.5%;
  margin-top: 2%;
  gap: 18px;
  flex-grow: 1;
  flex-shrink: 0;
  width: 45vh;
  overflow-y: auto;
  height: 85vh;
  background-color: #e8ebe8;
  border-top-left-radius: 10px;
}

.etiqueta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  background-color: #8cc587;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.titulo-etiqueta {
  margin-left: 15px;
  font-family: Montserrat;
  font-weight: 600;
  color: #fff;
  font-size: 15px;
}

.horas-etiqueta {
  display: flex;
  gap: 3px;
  font-family: Montserrat;
  font-weight: 500;
  color: #fff;
}

.tempo-etiqueta {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-right: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 43vh;
  box-shadow: 0px 1px 5px 0px #0000003d;
  border-radius: 5px;
  background-color: #fff;
}

.container-informacao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.setor {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  color: #00000080;
  background: #fff;
  border: 2px solid #00000080;
  border-radius: 5px;
}

.container-codigos {
  display: flex;
  flex-direction: column;
}

.descrisao {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 11px;
  opacity: 1;
  color: #00000080;
}

.descrisao-p {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  color: #000000b3;
  opacity: 1;
  margin-bottom: 20px;
}

.codigo-numero {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  color: #000000e6;
}

.tarefa {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  margin-left: 15px;
  margin-right: 15px;
  color: #000000e6;
  opacity: 1;
}

.container-projetos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
}

.container-empresa {
  display: flex;
  flex-direction: column;
}

.empresa {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #000000e6;
  opacity: 1;
}

.container-previsao {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.container-data {
  display: flex;
  align-items: center;
  gap: 10px;
}

.data-previsao {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #000000e5;
  opacity: 1;
}

.container-descrisao {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  gap: 3px;
}

.drag-cards.empty {
  min-height: 200px;
  min-width: 90%;
  display: inline-block;
  /* outline: 1px dashed; */
  text-align: center;
}

.drag-cards.empty::after {
  font-family: Montserrat;
  content: "Arraste e solte cards aqui.";
  opacity: 0.5;
  margin-top: 5%;
  display: inline-block;
}

.container-rodape{
  position: relative;
  border-top: 1px solid #0000004D ; 
}

.limite{
  position: absolute;
  z-index: 0;
  top: -10px;
  background-color: #fff;
  margin-left: 15px;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 12px;
  color: #0000004D;
  padding-left: 3px;
  padding-right: 3px;
}

.container-hora{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:flex-start;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;

}

.icone-hora{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:5px;
  font-family: Montserrat;
  font-size: 11px;

}

.container-saldo{
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
}

.icone-saldo{
  display: flex;
  align-items: center;
  gap: 5px;
}

.titulo-hora, .titulo-saldo{
  margin-left: 25px;
}

.situacao{
  background-color: #107154;
  padding: 5px 20px 5px 20px;
  border-radius: 3px;
  color: #fff;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
}

.saldo{
  border: 1px solid #107154;
  border-radius: 3px;
  padding: 3px;
  font-family: Montserrat;
  font-weight: bold;
  color: #107154;
  font-size: 10px;
}

.hora-prevista{
  line-height: 11px;
}

</style>