import * as cuid from 'cuid';
import { createAction } from 'typesafe-actions';

// (name: string) => { type: 'samples/SET_NAME', payload: SampleEntity }
export const setName = createAction('samples/SET_NAME', resolve => (name : string) => resolve({id: cuid(), name}));