export const state = () => ({
  firstNameFilter: '',
  genderFilter: '',
  idFilter: '',
  countryFilter: '',
  activeFilters: {
    firstName: '',
    gender: '',
    id: '',
    country: '',
  },
})

// getters
const getters = {
  getActiveFilter: (state) => state.activeFilters,
  getGenderFilter: (state) => state.genderFilter,
  getFirstNameFilter: (state) => state.firstNameFilter,
  getIdFilter: (state) => state.idFilter,
  getCountryFilter: (state) => state.countryFilter,
}

// actions
const actions = {
  changeFilter({ commit }, payload) {
    commit('CHANGE_FILTER', payload)
  },
}

// mutations
const mutations = {
  CHANGE_FILTER: (state, payload) => {
    state.activeFilters = payload
  },
  SET_FIRST_NAME_FILTER: (state, payload) => {
    state.firstNameFilter = payload
  },
  SET_GENDER_FILTER: (state, payload) => {
    state.genderFilter = payload
  },
  SET_COUNTRY_FILTER: (state, payload) => {
    state.countryFilter = payload
  },
  SET_ID_FILTER: (state, payload) => {
    state.idFilter = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
