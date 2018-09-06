import { ActionType, getType } from 'typesafe-actions';
import * as samples from '../actions/samples';
import { Sample } from '../model/sample';
export type SamplesAction = ActionType < typeof samples >;

export default(state : Sample[] = [], action : SamplesAction) => {
  switch (action.type) {
    case getType(samples.setName):
      return [
        ...state,
        action.payload
      ];
  }

  return state;
};