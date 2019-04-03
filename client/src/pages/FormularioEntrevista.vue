<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Criar nova entrevista</h4>
        <p class="category">Preencha todos os campos</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Candidato</label>
              <md-input v-model="candidato" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Entrevistador</label>
              <md-input v-model="entrevistador" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Disponibilidade</label>
              <md-input v-model="disponibilidade" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label for="statusAvaliacao">Status da Avaliação</label>
              <md-select v-model="statusAvaliacao">
                <md-option value="1">1 - Definitivamente Contratar</md-option>
                <md-option value="2">2 - Inclinado a contratar</md-option>
                <md-option value="3">3 - Inclinado a não contratar</md-option>
                <md-option value="4">4 - Não contratar</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Pretensão</label>
              <md-input v-model="pretensao" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-datepicker v-model="dataEntrevista">
              <label>Data da Entrevista</label>
            </md-datepicker>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label>Como ficou sabendo da vaga?</label>
              <md-input v-model="conhecimentoVaga" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label>Conhecidos na Empresa</label>
              <md-input v-model="conhecidos" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Idade</label>
              <md-input v-model="idade" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Cidade</label>
              <md-input v-model="cidade" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Pretende mudar de Cidade?</label>
              <md-input v-model="mudancaCidade" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label for="escolaridade">Escolaridade</label>
              <md-select v-model="escolaridade">
                <md-option value="1">1 - Fundamental</md-option>
                <md-option value="2">2 - Médio</md-option>
                <md-option value="3">3 - Superior - Incompleto</md-option>
                <md-option value="4">4 - Superior - Completo</md-option>
                <md-option value="5">5 - Pós-graduação - Incompleto</md-option>
                <md-option value="6">6 - Pós-graduação - Completo</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Instituições em que estudou</label>
              <md-input v-model="instituicoes" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label for="nivelIngles">Nível de Inglês</label>
              <md-select v-model="nivelIngles">
                <md-option value="1">1 - N/A</md-option>
                <md-option value="2">2 - Básico</md-option>
                <md-option value="3">3 - Intermediário</md-option>
                <md-option value="4">4 - Avançado</md-option>
                <md-option value="5">5 - Fluente</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Emprego Atual</label>
              <md-input v-model="empregoAtual" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label for="setorPretendido">Setor pretendido</label>
              <md-select v-model="setorPretendido">
                <md-option value="1">1 - Testes</md-option>
                <md-option value="2">2 - Desenvolvimento</md-option>
                <md-option value="3">3 - Suporte Interno</md-option>
                <md-option value="4">4 - Infraestrutura</md-option>
                <md-option value="5">5 - Gerência de Projetos</md-option>
                <md-option value="6">6 - Analise</md-option>
                <md-option value="7">7 - Arquitetura</md-option>
                <md-option value="8">8 - Design</md-option>
                <md-option value="9">9 - Suporte eCommerce</md-option>
                <md-option value="10">11 - Suporte N1</md-option>
                <md-option value="11">11 - Administrativo</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label for="setorEnquadrado">Setor enquadrado</label>
              <md-select v-model="setorEnquadrado">
                <md-option value="1">1 - Testes</md-option>
                <md-option value="2">2 - Desenvolvimento</md-option>
                <md-option value="3">3 - Suporte Interno</md-option>
                <md-option value="4">4 - Infraestrutura</md-option>
                <md-option value="5">5 - Gerência de Projetos</md-option>
                <md-option value="6">6 - Analise</md-option>
                <md-option value="7">7 - Arquitetura</md-option>
                <md-option value="8">8 - Design</md-option>
                <md-option value="9">9 - Suporte eCommerce</md-option>
                <md-option value="10">11 - Suporte N1</md-option>
                <md-option value="11">11 - Administrativo</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="java">Java</label>
              <md-select v-model="java">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="jee">JEE</label>
              <md-select v-model="jee">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="python">Python</label>
              <md-select v-model="python">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="ruby">Ruby</label>
              <md-select v-model="ruby">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for=javascript>JavaScript</label>
              <md-select v-model="javascript">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="sql">SQL</label>
              <md-select v-model="sql">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="plsql">PL/SQL</label>
              <md-select v-model="plsql">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico - Completo</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label for="htmlCSS">HTML/CSS</label>
              <md-select v-model="htmlCSS">
                <md-option value="0">0 - Nenhum Conhecimento</md-option>
                <md-option value="1">1 - Acadêmico - Completo</md-option>
                <md-option value="2">2 - Treinee</md-option>
                <md-option value="3">3 - Júnior</md-option>
                <md-option value="4">4 - Pleno</md-option>
                <md-option value="5">5 - Sênior</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label>Tecnologias Adicionais</label>
              <md-input v-model="tecnologiasAdd" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label>Resumo dos conhecimentos</label>
              <md-input v-model="resumo" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label>Porque contratar?</label>
              <md-input v-model="contratarPros" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-45">
            <md-field>
              <label>Porque não contratar?</label>
              <md-input v-model="contratarContras" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-90">
            <md-field>
              <label>Observações Finais</label>
              <md-textarea v-model="observacoes"></md-textarea>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="addInterview">Criar Entevista</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import InterviewService from "@/services/InterviewService";
export default {
  name: "formulario-entrevista",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "green"
    }
  },
  data() {
    return {
      candidato : "",
      statusAvaliacao : "",
      disponibilidade : "",
      pretensao : "",
      dataEntrevista : "",
      conhecimentoVaga : "",
      conhecidos : "",
      idade : 0,
      cidade : "",
      mudancaCidade : "",
      escolaridade : "",
      instituicoes : "",
      nivelIngles : "",
      empregoAtual : "",
      setorPretendido : "",
      setorEnquadrado : "",
      java : "",
      jee : "",
      python : "",
      ruby : "",
      javascript : "",
      sql : "",
      plsql : "",
      htmlCSS : "",
      tecnologiasAdd : "",
      resumo : "",
      contratarPros : "",
      contratarContras : "",
      observacoes : ""
    };
  }, methods: {
    async addInterview() {
      const entrevista = await InterviewService.createInterview({
        candidato: this.candidato,
        statusAvaliacao: this.statusAvaliacao,
        disponibilidade: this.disponibilidade,
        pretensao: this.pretensao,
        dataEntrevista: this.dataEntrevista,
        conhecimentoVaga: this.conhecimentoVaga,
        conhecidos: this.conhecidos,
        idade: this.idade,
        cidade: this.cidade,
        mudancaCidade: this.mudancaCidade,
        escolaridade: this.escolaridade,
        instituicoes: this.instituicoes,
        nivelIngles: this.nivelIngles,
        empregoAtual: this.empregoAtual,
        setorPretendido: this.setorPretendido,
        setorEnquadrado: this.setorEnquadrado,
        java: this.java,
        jee: this.jee,
        python: this.python,
        ruby: this.ruby,
        javascript: this.javascript,
        sql: this.sql,
        plsql: this.plsql,
        htmlCSS: this.htmlCSS,
        tecnologiasAdd: this.tecnologiasAdd,
        resumo: this.resumo,
        contratarPros: this.contratarPros,
        contratarContras: this.contratarContras,
        observacoes: this.observacoes
      })
    console.log(entrevista)
    }
  }
};
</script>