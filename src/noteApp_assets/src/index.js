import { noteApp } from "../../declarations/noteApp";

document.getElementById('submit').addEventListener('click', async ()=> {
  let title = document.getElementById('title');
  let id = document.getElementById('id');
  let des = document.getElementById('des');

  await noteApp.addNote({title:title.value, description:des.value, id:Number(id.value), time:12345})

})

document.getElementById('showList').addEventListener('click', async()=> {
  let notes = await noteApp.getNoteList()
  console.log(notes)
})
