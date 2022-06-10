export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'time' : IDL.Nat,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'addNote' : IDL.Func([Note], [IDL.Text], []),
    'deleteNote' : IDL.Func([IDL.Nat], [IDL.Vec(Note)], []),
    'getNote' : IDL.Func([IDL.Nat], [IDL.Opt(Note)], ['query']),
    'getNoteList' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
