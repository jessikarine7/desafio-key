<template>
  <div>
    <draggable
      class="container-corpo"
      :list="listas"
      item-key="titulo"
    >
      <template #item="{ element }">
        <div class="card-vertical" :data-lista-id="element.id">
          <div class="etiqueta">
            <h1 class="titulo-etiqueta">{{element.titulo}}</h1>
            <div class="tempo-etiqueta">
              <div class="horas-etiqueta">
                <img src="@/img/relogioB.png" width="16" height="16" alt="">
                <p class="horas-etiqueta">1h</p>
              </div>
              <span class="numero-etiqueta">3</span>
            </div>
          </div>

          <draggable 
            :list="element.cards"
            item-key="tarefa"
            class="drag-cards"
            :group="{ name: 'cards' }"
            @end="endEvent"
          >
            <template #item="{ element }">
              <div class="card" :data-id="element.id">
                <div class="container-informacao">
                  <button class="setor">{{element.setor}}</button>
                  <div class="container-codigos">
                      <span class="descrisao">Código:</span>
                      <span class="codigo-numero">{{element.codigo}}</span>
                  </div>
                </div>

                <h1 class="tarefa">{{element.tarefa}}</h1>

                <div class="container-projetos">
                  <div class="container-empresa">
                    <span class="descrisao">Projeto:</span>
                    <span class="empresa">{{element.empresa}}</span>
                  </div>

                  <div class="container-previsao">
                    <span class="descrisao">Prevista:</span>
                    <div class="container-data">
                      <img src="@/img/calendario.svg" width="22" height="22" alt="">
                      <span class="data-previsao">{{element.data}}</span>
                    </div>
                  </div>
                </div>

                <div class="container-descrisao">
                  <span class="descrisao">Descrisão:</span>
                  <span class="descrisao-p">{{element.descricao}}</span>
                </div>

                <div class="container-rodape">
                  <span class="limite">Acompanhamento</span>

                  <div class="container-hora">
                    <div class="hora-prevista">
                      <span class="descrisao titulo-hora">Previsto</span> 
                      <div class="icone-hora">
                        <img src="@/img/relogio.png" width="16" height="16" alt="">
                        <span class="hora">{{element.tempo}}</span>
                      </div>
                    </div>
                    <span class="situacao green" v-if="element.situacao === 'EM DIA'">{{element.situacao}}</span>
                    <span class="situacao yellow" v-if="element.situacao === 'ATENÇÃO'">{{element.situacao}}</span>
                    <span class="situacao red" v-if="element.situacao === 'EM ATRASO'">{{element.situacao}}</span>
                  </div>

                  <div class="container-saldo">

                    <div class="saldo-horas">
                      <span class="descrisao titulo-saldo">Saldo</span>
                      <div class="icone-saldo">
                        <img src="@/img/relogio.png" width="16" height="16" alt="">
                        <span class="saldo green" v-if="element.situacao === 'EM DIA'">{{element.saldo}}</span>
                        <span class="saldo yellow" v-if="element.situacao === 'ATENÇÃO'">{{element.saldo}}</span>
                        <span class="saldo red" v-if="element.situacao === 'EM ATRASO'">{{element.saldo}}</span>
                      </div>

                    </div>

                    <div class="container-equipe">
                      <span class="descrisao titulo-equipe">Equipe</span>
                      <div class="equipe-responsavel">
                        <span class="equipe" v-for="pessoa of element.equipe" :key="pessoa">{{pessoa.slice(0,2)}}</span>
                      </div>
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
import axios from 'axios';

export default {
  components: {
    draggable,
  },

  data() {
    return {
      drag: false,
    };
  },
  methods: {
    async endEvent(args) {
      const to = args.to
      const newListaId = to.parentElement.dataset['listaId'];
      const cardId = args.item.dataset['id'];
      const response = await axios.get(`${this.apiUrl}/cards/${cardId}`)
      const card = response.data
      card.listaId = parseInt(newListaId);
      await axios.put(`${this.apiUrl}/cards/${cardId}`, card)
    },
  },

  props:['listas']
};
</script>

<style>
.container-corpo {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-right: 120px;
  margin-left: 120px;
  padding: 0 20px;
  overflow-x: scroll;
}

.card-vertical {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 1%;
  margin-top: 3%;
  gap: 18px;
  padding: 0 10px;
  flex-grow: 1;
  flex-shrink: 0;
  overflow-y: auto;
  width: clamp(300px, 25vw, 333px);
  height: 80vh;
  background-color: #e8ebe8;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.card-vertical:first-child {
  margin-left: 0;
}

.etiqueta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% + 20px);
  margin: 0 -10px;
  height: 5vh;
  background-color: #8cc587;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
  align-items: center;
  gap: 3px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
}

.numero-etiqueta{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 28px;
  background-color: #fff;
  color: #8CC587;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
}


.tempo-etiqueta {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-right: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 101%;
  box-shadow: 0px 1px 5px 0px #0000003d;
  border-radius: 5px;
  background-color: #fff;
}

.container-informacao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:flex-start;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.setor {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 11px;
  color: #00000080;
  background: #fff;
  border: 1px solid #00000080;
  border-radius: 3px;
}

.container-codigos {
  display: flex;
  flex-direction: column;
}

.descrisao {
  font-family: Montserrat;
  font-weight: normal;
  font-size: 10px;
  color: #00000080;
}

.descrisao-p {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  color: #000000B3;
  margin-bottom: 20px;
}

.codigo-numero {
  font-family: Montserrat;
  font-weight: normal;
  font-size: 12px;
  color: #000000E6;
}

.tarefa {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  margin-left: 15px;
  margin-right: 15px;
  color: #000000E6;
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
  color: #000000E6;
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
  color: #000000E5;
}

.container-descrisao {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  gap: 3px;
}

.drag-cards {
  min-height: 60vh;
  min-width: 100%;
  display: inline-block;
}

.drag-cards:empty {
  text-align: center;
}

.drag-cards:empty::after {
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
  top: -8px;
  background-color: #fff;
  margin-left: 15px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 10px;
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
  /* margin-bottom: 4px; */
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
  margin-bottom: 8px;
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
  /* padding: 5px 15px 5px 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 24px;
  border-radius: 3px;
  color: #fff;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 11px;
  box-shadow: 0px 3px 6px #00000029;
}

.situacao.green {
  background-color: #107154;
}
.situacao.yellow {
  background-color: #F7E702;
  color: #000000B3;
}
.situacao.red {
  background-color: #A31E20;
}

.saldo {
  border-radius: 3px;
  /* padding: 3px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 19px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 11px;

}

.saldo.green{
  border: 1px solid #107154;
  color: #107154;
}

.saldo.yellow{
  background-color: #F7E702 ;
  color: #000000;
}

.saldo.red{
  border: 1px solid #A31E20;
  color: #A31E20;
}

.hora-prevista{
  line-height: 11px;
}

.container-equipe{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.equipe-responsavel{
  display: flex;
  gap: 5px;
}

.equipe{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #00000080;
  color: #FFFFFF;
  font-family: Montserrat;
  font-weight: normal;
  font-size: 11px;
  border-radius: 28px;
}

</style>