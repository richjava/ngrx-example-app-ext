import * as collection from '../../actions/school-collection';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: collection.Actions): State {
  switch (action.type) {
    case collection.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case collection.LOAD_SUCCESS: {
      const schools = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: schools.map(school => school._id)
      };
    }

    case collection.ADD_SCHOOL_SUCCESS:
    case collection.REMOVE_SCHOOL_FAIL: {
      const school = action.payload;

      if (state.ids.indexOf(school._id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, school._id ]
      });
    }

    case collection.REMOVE_SCHOOL_SUCCESS:
    case collection.ADD_SCHOOL_FAIL: {
      const school = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(_id => _id !== school._id)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
