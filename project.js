const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


 //UI objesini başlatma

 const ui = new UI();

// storage ob-jesi üret

    const storage = new Storage();


 // tüm eventleri yükleme

 eventListeners();

 function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films); 

    });

cardBody.addEventListener("click",deleteFilm);

clear.addEventListener("click",clearAllFilms);

 }
 

 function addFilm(e){

const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

if (title === "" || director === "" || url === ""){

//hata vericek

ui.displayMessages("Tüm alanları doldurun...","danger");

}
else {

    const newFilm = new Film(title,director,url);

ui.displayMessages("filmi başarılı bir şekilde eklendi","success");

storage.addFilmToStorage(newFilm);//STORAGE A film ekleme

ui.addFilmToUI(newFilm); // arayüze film ekleme

}



e.preventDefault();

 }

 function deleteFilm(e){

if(e.target.id === "delete-film"){

    ui.deleteFilmFromUI(e.target);
}

 }

 function clearAllFilms(){
     ui.clearAllFilms();
 }