import { Action } from '@ngrx/store';
import { School } from '../models/school';

export const SEARCH =           '[School] Search';
export const SEARCH_COMPLETE =  '[School] Search Complete';
export const LOAD =             '[School] Load';
export const SELECT =           '[School] Select';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: School[]) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: School) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;
