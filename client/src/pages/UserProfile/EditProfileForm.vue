<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Criar novo usuário</h4>
        <p class="category">Preencha todos os campos</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-95">
            <md-field>
              <label>Nome de usuário</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-95">
            <md-field>
              <label>Senha</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-95">
            <md-field>
              <label>Nome Completo</label>
              <md-input v-model="fullname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
              <md-input v-model="write" type="checkbox" id="write"></md-input>
              <label for="write">Permissão de Escrita</label>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
              <md-input v-model="read" type="checkbox" id="read"></md-input>
              <label for="read">Permissão de Leitura</label>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="addUser">Criar Usuário</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import InterviewService from "@/services/InterviewService";
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: "",
      password: "",
      write: false,
      read: false
    };
  }, methods: {
    async addUser () {
      const user = await InterviewService.createUser({
        username: this.username,
        password: this.password,
        write: this.write,
        read: this.read
      })
    console.log(user)
    }
  }
};
</script>
<style></style>
