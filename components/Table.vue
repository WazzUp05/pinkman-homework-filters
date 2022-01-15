<template>
  <div>
    <input
      class="input-filter"
      type="text"
      placeholder="Filter person"
      v-model="filter"
    />
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredRows" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['persons'],
  data() {
    return {
      filter: '',
    }
  },
  computed: {
    filteredRows() {
      return this.persons.filter((person) => {
        const id = person.id.toString().toLowerCase()
        const first_name = person.first_name.toLowerCase()
        const last_name = person.last_name.toLowerCase()
        const email = person.email.toLowerCase()
        const country = person.country.toLowerCase()
        const gender = person.gender.toLowerCase()
        const searchTerm = this.filter.toLowerCase()

        return (
          id.includes(searchTerm) ||
          first_name.includes(searchTerm) ||
          last_name.includes(searchTerm) ||
          email.includes(searchTerm) ||
          gender.includes(searchTerm) ||
          country.includes(searchTerm)
        )
      })
    },
  },
}
</script>

<style scoped>
.input-filter {
  margin: 0 auto;
  display: block;
  margin-top: 25px;
}
.table {
  margin: 0 auto;
  margin-top: 25px;
}
.table > tr > th,
td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #000;
}
</style>
