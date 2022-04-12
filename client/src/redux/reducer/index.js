import {
  GET_ALL_COUNTRIES,
  GET_BY_NAME,
  GET_COUNTRIES_BY_ID,
  POST_ACTIVITIES,
  ORDER_BY_NAME,
  SET_PAGE,
  SET_ORDER,
  ORDER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITIES,
} from "../action/index";

const initialState = {
  allCountries: [],
  countries: [],
  activities: [],
  page: 1,
  order: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countries: action.payload,
      };

    case POST_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case ORDER_BY_NAME:
      let orderAAndZ =
        action.payload === "asc"
          ? state.allCountries.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              } else if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allCountries.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              } else if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allCountries: orderAAndZ,
      };

    case ORDER_BY_POPULATION:
      let orderPopulation =
        action.payload === "asc"
          ? state.allCountries.sort((a, b) => {
              if (a.population > b.population) {
                return 1;
              } else if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.allCountries.sort((a, b) => {
              if (a.population > b.population) {
                return -1;
              } else if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allCountries: orderPopulation,
      };
    case FILTER_BY_CONTINENT:
      const countries = state.countries;
      const change =
        action.payload === "Todos"
          ? countries
          : countries.filter((pais) => pais.continent === action.payload);
      return {
        ...state,
        allCountries: change,
      };
    case FILTER_BY_ACTIVITIES:
      const securityAllCountrys = state.countries;
      const countriesWithActs = state.countries;
      console.log(countriesWithActs);
      /*const acts =
        action.payload === "Todos"
          ? securityAllCountrys
          : countriesWithActs.filter((pais) =>
              pais.activities.length !== 0 ? action.payload : null
            );*/
      let acts = [];
      if (action.payload === "") {
        acts = securityAllCountrys;
      } else {
        acts = [];
        for (var i = 0; i < countriesWithActs.length; i++) {
          if (countriesWithActs[i].activities.length > 0) {
            for (var j = 0; j < countriesWithActs[i].activities.length; i++) {
              console.log(countriesWithActs[i]);
              console.log(countriesWithActs[i].activities[j]);
              if (countriesWithActs[i].activities[j].name === action.payload) {
                acts.push(countriesWithActs[i]);
              }
            }
          }
        }
      }
      console.log(acts);
      return {
        ...state,
        allCountries: acts,
      };
    default:
      return state;
  }
};
