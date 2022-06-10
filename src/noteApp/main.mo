import Array "mo:base/Array";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Debug "mo:base/Debug";
import List "mo:base/List";
import NoteType "Note";

actor {
    var noteList:[NoteType.Note] = [];

  public query func getNote(noteId:Nat) : async ?NoteType.Note {
    let buffer:Buffer.Buffer<NoteType.Note> = Buffer.Buffer(noteList.size());

     for(element in noteList.vals()) {
        buffer.add(element);
     };

    for(element in buffer.vals()) {
      if(element.id == noteId) {
        return ?{
        id:Nat = element.id;
        title:Text = element.title;
        time:Nat = element.time;
        description:Text = element.description;
        }
      } ;
    };
    return null;
  };


  public func deleteNote(noteId:Nat): async [NoteType.Note] {
  let array = Array.filter(noteList, func(item:NoteType.Note) :Bool {
      item.id != noteId;
    });
    noteList := array;
    return noteList;
  };



  public query func getNoteList() : async [NoteType.Note] {
    return noteList;
  };


  public func addNote(note:NoteType.Note) : async Text{
     let buffer:Buffer.Buffer<NoteType.Note> = Buffer.Buffer(noteList.size());
     for(element in noteList.vals()) {
        buffer.add(element);
     };
     buffer.add(note);
     noteList:= buffer.toArray();
     return "Work done!";
  }
}