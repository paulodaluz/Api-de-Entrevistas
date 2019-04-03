<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>person</md-icon>
        <p>Login</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>library_books</md-icon>
        <p>Entrevistas</p>
      </sidebar-link>
      <sidebar-link to="/novaEntrevista">
        <md-icon>content_paste</md-icon>
        <p>Criar Entrevista</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>content_paste</md-icon>
        <p>Editar Entrevista</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>content_paste</md-icon>
        <p>Excluir Entrevista</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>delete</md-icon>
        <p>Entrevistas Excluidas</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Criar Usuario</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
