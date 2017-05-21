import { Action } from '@ngrx/store';
import { School } from '../models/school';


export const ADD_SCHOOL =             '[Collection] Add School';
export const ADD_SCHOOL_SUCCESS =     '[Collection] Add School Success';
export const ADD_SCHOOL_FAIL =        '[Collection] Add School Fail';
export const REMOVE_SCHOOL =          '[Collection] Remove School';
export const REMOVE_SCHOOL_SUCCESS =  '[Collection] Remove School Success';
export const REMOVE_SCHOOL_FAIL =     '[Collection] Remove School Fail';
export const LOAD =                 '[Collection] Load';
export const LOAD_SUCCESS =         '[Collection] Load Success';
export const LOAD_FAIL =            '[Collection] Load Fail';


/**
 * Add Book to Collection Actions
 */
export class AddSchoolAction implements Action {
  readonly type = ADD_SCHOOL;

  constructor(public payload: School) { }
}

export class AddSchoolSuccessAction implements Action {
  readonly type = ADD_SCHOOL_SUCCESS;

  constructor(public payload: School) { }
}

export class AddSchoolFailAction implements Action {
  readonly type = ADD_SCHOOL_FAIL;

  constructor(public payload: School) { }
}


/**
 * Remove Book from Collection Actions
 */
export class RemoveSchoolAction implements Action {
  readonly type = REMOVE_SCHOOL;

  constructor(public payload: School) { }
}

export class RemoveSchoolSuccessAction implements Action {
  readonly type = REMOVE_SCHOOL_SUCCESS;

  constructor(public payload: School) { }
}

export class RemoveSchoolFailAction implements Action {
  readonly type = REMOVE_SCHOOL_FAIL;

  constructor(public payload: School) {}
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: School[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddSchoolAction
  | AddSchoolSuccessAction
  | AddSchoolFailAction
  | RemoveSchoolAction
  | RemoveSchoolSuccessAction
  | RemoveSchoolFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
