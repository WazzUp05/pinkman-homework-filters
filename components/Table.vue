<template>
  <div>
    <div align="center" class="center">
      <label for="country">Country</label>
      <select v-model="country" id="country">
        <option
          v-for="(item, index) in filtersCountry"
          :key="index"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
      <label for="gender">Gender</label>
      <select v-model="gender" id="gender">
        <option
          v-for="(item, index) in filtersGender"
          :key="index"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
      <br />
      <br />
      <label for="first_name">First Name</label>
      <input
        type="text"
        v-model="firstName"
        id="first_name"
        placeholder="Filter By First name"
      />
      <label for="id">id</label>
      <input
        type="text"
        v-model="id"
        id="id"
        placeholder="Filter By First name"
      />
    </div>
    <button @click="chengeQuery">click</button>
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
        <tr v-for="(item, index) in filterPerson" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Table',
  props: {
    persons: {
      type: Array,
      default: () => {},
    },
    // filterCountry: {
    //   type: Function,
    //   default: () => {},
    // },
    // filterGender: {
    //   type: Function,
    //   default: () => {},
    // },
  },
  data() {
    return {
      filtersCountry: ['All', 'Russia', 'Kazakhstan'],
      filtersGender: [
        'All',
        'Female',
        'Male',
        'Non-binary',
        'Genderfluid',
        'Genderqueer',
      ],
      activeFilters: [],
      country: '',
      firstName: '',
      id: '',
      gender: '',
    }
  },
  computed: {
    ...mapGetters({
      filters: 'getActiveFilter',
      genderFilter: 'getGenderFilter',
      firstNameFilter: 'getFirstNameFilter',
      idFilter: 'getIdFilter',
      countryFilter: 'getCountryFilter',
    }),
    filterPerson: function () {
      return this.filterPersonByFirstName(
        this.filterPersonByCountry(
          this.filterPersonByGender(this.filterPersonById(this.persons))
        )
      )
    },
  },
  // created() {
  //   this.changeFilter(this.activeFilter)
  // },
  methods: {
    ...mapActions(['changeFilter']),

    chengeQuery() {
      // this.changeFilter(this.activeFilters)
      this.$router.push({ path: '', query: this.activeFilters })
    },

    filterPersonByFirstName(persons) {
      return persons.filter((person) =>
        person.firstName
          .toLowerCase()
          .includes(this.firstNameFilter.toLowerCase())
      )
    },

    filterPersonById(persons) {
      return persons.filter(
        (person) => !person.id.toString().indexOf(this.idFilter)
      )
    },

    filterPersonByCountry(persons) {
      if (this.countryFilter !== ('all' && 'All')) {
        return persons.filter(
          (person) =>
            !person.country
              .toLowerCase()
              .indexOf(this.countryFilter.toLowerCase())
        )
      } else return persons
    },

    filterPersonByGender(persons) {
      if (this.genderFilter !== ('all' && 'All')) {
        return persons.filter(
          (person) =>
            !person.gender
              .toLowerCase()
              .indexOf(this.genderFilter.toLowerCase())
        )
      } else return persons
    },
  },
  watch: {
    country(val) {
      this.activeFilters.push(val)
      this.$store.commit('SET_COUNTRY_FILTER', val)
    },
    firstName(val) {
      // this.activeFilters = val
      this.$store.commit('SET_FIRST_NAME_FILTER', val)
    },
    gender(val) {
      this.$store.commit('SET_GENDER_FILTER', val)
    },
    id(val) {
      this.$store.commit('SET_ID_FILTER', val)
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
