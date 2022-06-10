import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Note {
  'id' : bigint,
  'title' : string,
  'time' : bigint,
  'description' : string,
}
export interface _SERVICE {
  'addNote' : ActorMethod<[Note], string>,
  'deleteNote' : ActorMethod<[bigint], Array<Note>>,
  'getNote' : ActorMethod<[bigint], [] | [Note]>,
  'getNoteList' : ActorMethod<[], Array<Note>>,
}
