import { createSelector } from 'reselect';
import { School } from '../../models/school';
import * as school from '../../actions/school';
import * as collection from '../../actions/school-collection';


export interface State {
  ids: string[];
  entities: { [id: string]: School };
  selectedSchoolId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  selectedSchoolId: null,
};

export function reducer(state = initialState, action: school.Actions | collection.Actions): State {
  switch (action.type) {
    case school.SEARCH_COMPLETE:
    case collection.LOAD_SUCCESS: {
      const schools = action.payload;
      const newSchools = schools.filter(school => !state.entities[school._id]);

      const newSchoolIds = newSchools.map(school => school._id);
      const newSchoolEntities = newSchools.reduce((entities: { [id: string]: School }, school: School) => {
        return Object.assign(entities, {
          [school._id]: school
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newSchoolIds ],
        entities: Object.assign({}, state.entities, newSchoolEntities),
        selectedSchoolId: state.selectedSchoolId
      };
    }

    case school.LOAD: {
      const school = action.payload;

      if (state.ids.indexOf(school._id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, school._id ],
        entities: Object.assign({}, state.entities, {
          [school._id]: school
        }),
        selectedSchoolId: state.selectedSchoolId
      };
    }

    case school.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedSchoolId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedSchoolId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
