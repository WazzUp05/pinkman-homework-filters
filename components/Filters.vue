<template>
  <div class="filters-wrap">
    <h3>Filters:</h3>
    <div class="filters">
      <div
        class="filters-block"
        v-for="(filter, index) in filtersCountry"
        :key="filter.id"
      >
        <input
          :id="`input-${index}`"
          @click="() => filterCountry(filter)"
          type="radio"
          :name="`radio-${index}`"
        />
        <label :for="`input-${index}`">{{ filter }}</label>
      </div>
    </div>
    <div class="filters">
      <div
        class="filters-block"
        v-for="(filter, index) in filtersGender"
        :key="filter.id"
      >
        <input
          :id="`input-${index}`"
          @click="() => filterGender(filter)"
          type="radio"
          :name="`radio-${index}`"
        />
        <label :for="`input-${index}`">{{ filter }}</label>
      </div>
    </div>
  </div>
</template>

<script>
const filtersCountry = ['All', 'Russia', 'Kazakhstan']
const filtersGender = ['All', 'Female', 'Male']
export default {
  props: {
    filterCountry: {
      type: Function,
      default: () => {},
    },
    filterGender: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      filtersCountry,
      filtersGender,
    }
  },
}
</script>

<style scoped>
.filters-wrap {
  text-align: center;
}
.filters {
  display: flex;
  justify-content: center;
}
button {
  margin-right: 15px;
  border: 1px solid #444;
  padding: 5px 10px;
}
button:hover {
  opacity: 0.8;
}
</style>
