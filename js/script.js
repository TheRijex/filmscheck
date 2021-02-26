"use strict";
let numberOfFilms;

function start() {
	 numberOfFilms = +prompt('Сколько фильмов ты просмотрел?', '');

	 while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов ты просмотрел?', '');
	 }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
	for(let i =0 ; i < 2; i++) {
		const a = prompt("Один из просмотренных фильмов?", ""), 
			b = prompt("На сколько оценишь его?", "");

		if (a != null && b != null && a != '' && b != '' && a.length < 50){
			personalMovieDB.movies[a] = b;
			console.log('Done');
		} else{
			console.log('error');
			i--;
		}  
	}	
}

rememberMyFilms(); 

function detectPersonalLevel(){
	if (personalMovieDB.count <= 10 && personalMovieDB.count > 0){
		console.log('Просмотренно мало фильмов');
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
		console.log('Вы классический зритель');
	}else if ( personalMovieDB.count >= 30){
		console.log("Вы киноман");
	}
	else{
		console.log('Error')
	}	
}

detectPersonalLevel();

function ShowMyDB(hidden){
	if (!hiiden){
		console.log(personalMovieDB)
	}
}

ShowMyDB(personalMovieDB.privat);

function WriteYourGenres(){
	for(let i = 1; i <= 3; i++){
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
	}
}

WriteYourGenres();

console.log(personalMovieDB);