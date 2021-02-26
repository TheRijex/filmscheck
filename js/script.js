"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
	start: function() {
	 personalMovieDB.count = +prompt('Сколько фильмов ты просмотрел?', '');

	 while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
		personalMovieDB.count = +prompt('Сколько фильмов ты просмотрел?', '');}
	 },
	 rememberMyFilms: function(){
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
},
	detectPersonalLevel(){
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
	},
		ShowMyDB: function(hidden){
			if (!hiiden){
				console.log(personalMovieDB)
			}
		},
		toggleVisebleMyDb: function(){
			if(personalMovieDB.privat) {
				personalMovieDB.privat = false;
			} else {
				personalMovieDB.privat = true;
			}
		},
		WriteYourGenres: function(){
	for(let i = 1; i <= 3; i++){
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
	}
}
};