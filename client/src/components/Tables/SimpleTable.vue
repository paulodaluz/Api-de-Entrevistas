<template>
  <div>
    <md-table v-model="interviews" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Entrevistador">{{ item.entrevistador.username }}</md-table-cell>
        <md-table-cell md-label="Candidato">{{ item.candidato }}</md-table-cell>
        <md-table-cell md-label="Data">{{ item.dataEntrevista }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.statusAvaliacao }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import InterviewService from "@/services/InterviewService";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      interviews: []
    };
  },
  mounted() {
    this.getAllInterviews();
  },
  methods: {
    async getAllInterviews() {
      const response = await InterviewService.fetchInterviews();
      this.interviews = response.data;
    }
  }
};
</script>
