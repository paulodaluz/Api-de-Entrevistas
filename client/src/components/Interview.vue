<template>
  <div class="posts">
    <h1>Interviews</h1>
    This file will list all the Interviews.

    <div
      v-for="entrevista in interviews"
      :key="entrevista.id"
      >
      <p>
        <span><b>{{ entrevista}}</b></span><br />
      </p>
    </div>
  </div>
</template>

<script>
import InterviewService from '@/services/InterviewService'
export default {
  name: 'interview',
  data () {
    return {
      interviews: []
    }
  },
  mounted () {
    this.getAllInterviews()
  },
  methods: {
    async getAllInterviews () {
      const response = await InterviewService.fetchInterviews()
      this.interviews = response.data
    }
  }
}
</script>
