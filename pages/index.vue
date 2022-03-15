<template>
  <div class="container">
    <h1 align="center"><span class="pinkman">Pinkman</span> home work</h1>
    <Table :persons="persons" />
  </div>
</template>

<script>
import MOCK_DATA from '../MOCK_DATA'

export default {
  name: 'IndexPage',
  data() {
    return {
      persons: MOCK_DATA,
    }
  },
  // methods: {
  //   filterCountry(filterCountry) {
  //     this.persons = MOCK_DATA
  //     if (filterCountry !== 'All') {
  //       this.persons = this.persons.filter((person) => {
  //         return person.country === filterCountry
  //       })
  //     }
  //   },
  //   filterGender(filterGender) {
  //     this.persons = this.filterCountry(filterCountry)
  //     if (filterGender !== 'All') {
  //       this.persons = this.persons.filter((person) => {
  //         return person.gender === filterGender
  //       })
  //     }
  //   },
  // },
}
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 25px;
}
h1 {
  text-transform: uppercase;
}
.pinkman {
  color: #e53791;
}
</style>
