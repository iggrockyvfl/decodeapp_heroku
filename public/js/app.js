"use strict";

class App{
	constructor(){
		this.recipe = [
			{
				"id": 1,
				"name": "Blades of Voth Domosh",
				"description": "Set in her vengeance against the abyss, Tresdin approached the baleful armorer Qwyth, who gifted to her these hellbound blades. Though she obtained the swords without cost, she may realize too late that the price extracted for wielding such incredible power could be more than she is willing to part with.",
				"photo": "img/img1.jpg",
				"preparationtime": "1100",
				"cookingtime": "Davao City"
			},
			{
				"id": 2,
				"name": "Manifold Paradox",
				"description": "With a raspy cackle, the elder smith Craler swung the sword that his family had spent eleven generations to fold and forge. So sharp it was that, with a sound like tearing fabric, a rip in reality tore open. Through this rip, Craler recognized himself from moments before, holding aloft the very same coveted blade. Then, in a fit of greed and madness, he cut this earlier self down to seize the twin sword as his own. Too late, however, Craler felt a familiar wound, and was suddenly filled with the memory of being cut down himself.",
				"photo": "img/img2.jpg",
				"preparationtime": "1200",
				"cookingtime": "Davao City"
			},
			{
				"id": 3,
				"name": "Fractal Horns of Inner Abysm",
				"description": "Deep in the hell of Hell, Terrorblade lay bound behind fractal walls, sentenced to an eternity of twisted contemplation. He stared long into the reflection of his own worst self. And long did his worst self stare into him. Now they rise together, a single entity more powerful than ever before.",
				"photo": "img/img3.jpg",
				"preparationtime": "1050",
				"cookingtime": "Cebu"
			},
			{
				"id": 4,
				"name": "Fiery Soul of the Slayer",
				"description": "It has often been said that Lina's hair was touched by fire, though few know the truth of this claim. In Lina's youth, as her natural talents first began to smoke and smolder it was her fiery hair that told the tale of the storm to come. With time and training, her skill and control of the flame was enough to suppress the searing display. Yet on occasion, when her ire grows and tempers flare, the full measure of Lina's burning spirit threatens to unleash its wrath.",
				"photo": "img/img4.jpg",
				"preparationtime": "900",
				"cookingtime": "Manila"
			}			
		];
		this.state = [
			{
				"bind": {
					"ingredients_qty":[],
					"ingredients_name":[]
				}
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createRecipe(){
		let id = document.getElementById('recipe_id');
		let name = document.getElementById('recipe_name');
		let description = document.getElementById('recipe_description');
		let photo = document.getElementById('recipe_photo');
		let preparationtime = document.getElementById('recipe_preparationtime');
		let cookingtime = document.getElementById('recipe_cookingtime');

		let recipe = {			
			"id": id.value,
			"name": name.value,
			"description": description.value,
			"photo": photo.value,
			"preparationtime": preparationtime.value,
			"cookingtime": cookingtime.value
		};


		this.recipe.push(recipe);

		//Clear Fields
		this.state[0].bind.procedures = this.state[0].bind.ingredients_qty = this.state[0].bind.ingredients_name = [];
		id.value = name.value = description.value = photo.value = preparationtime.value = cookingtime.value = yields.value = ''; 
	}	

	deleteRecipe(key){
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.recipe.splice(i,1);
				break;
			}
		}		
		this.recipeLayout();
	}

	findRecipeByID(id){
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	findRecipeByName(name){
		let objects = [];
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}

	

	
}

class Component extends App{
	constructor(){
		
		super();
	}

	recipeLayout(){
		let html = `
			<div id="recipeLayout" class="container">
				<nav>
					<div class="nav-wrapper">
						<a href="#" onclick="component.recipeLayout()" class="brand-logo">&nbsp;&nbsp;Dota 2 Market</a>
						<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
						<ul class="right hide-on-med-and-down">
							<li><a href="#" onclick="component.recipeList()"><i class="material-icons left">assignment</i>Shop</a></li>
							<li><a href="#" onclick="component.recipeCreate()"><i class="material-icons left">note_add</i>Create</a></li>
						</ul>
						<ul class="side-nav" id="mobile-demo">
							<li><a href="#" onclick="component.recipeList()"><i class="material-icons left">assignment</i>Shop</a></li>
							<li><a href="#" onclick="component.recipeCreate()"><i class="material-icons left">note_add</i>Create</a></li>
						</ul>
					</div>
				</nav>

				<div id="recipeRecent"></div>
				<div id="recipeView"></div>
				<div id="recipeList"></div>
				<div id="recipeCreate"></div>

				<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Dota 2 Market</h5>
								<p class="grey-text text-lighten-4">This is a dota 2 market. you can display and sell your items here.</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Links</h5>
								<ul>
									<li>
										<a class="grey-text text-lighten-3" href="#" onclick="component.recipeLayout()">
											<!-- <i class="material-icons left">dashboard</i> -->
											Home</a></li>
											<li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeList()">
												<!-- <i class="material-icons left">assignment</i> -->
												Shop</a></li>
												<li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeCreate()">
													<!-- <i class="material-icons left">dashboard</i> -->
													Create</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="footer-copyright">
										<div class="container">
											© 2016-2017 Copyright Text
											<img class="right" src="img/decode.png" style="margin-top:6px;" />

										</div>
									</div>
								</footer>	

							</div>
		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.recipeRecent();		
	}

	recipeRecent(){
		
		let html = `
			<h5 class="center-align"><font color ="red">Recent Items</font></h5>
			<div class="row">
		`;

		let r = this.recipe;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 3)break;
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.render(`		
			${html}
			`,document.getElementById("recipeRecent"));
	}

	recipeView(id){
		let r = this.findRecipeByID(id);

		let html = `
			<h5 class="center-align">${r.name}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${r.description}</p>
							</div>
							<div class="card-action small">								
								<span onclick="component.deleteRecipe(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.recipeLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>					
					</div>				
				</div>			
			</div>
		`;

		html += `
			<div class="row">
				<table class="striped">
					<thead>
						<tr>
							<th>Price</th>
							<th>Meetup</th>
							
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${r.preparationtime}</td>
							<td>${r.cookingtime}</td>
						
						</tr>					
					</tbody>
				</table>
			</div>
		`;



		html += `
					</ul>
				</div>			
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("recipeView"));
		$('#recipeView').show();
		$('#recipeRecent').hide();
		$('#recipeList').hide();
		$('#recipeCreate').hide();
	}

	recipeList(){
		let html = `
			<br/>
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">				
							<input onkeyup="component.recipeListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="recipeListItems">
		`;
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("recipeList"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();
		$('#recipeCreate').hide();		
	}

	recipeListItems(name){
		let html = ``;
		let r = this.findRecipeByName(name);
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("recipeListItems"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();	
		$('#recipeCreate').hide();
	}

	recipeCreate(){
		let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align"><font color="red">Post new item</font></h5>
				<button onclick="component.createRecipe()" class="btn waves-effect waves-light">Save</button>
					<div class="row">
						<div class="input-field col s6">
							<input disabled value="${this.recipe.length+1}" id="recipe_id" type="text" class="validate">
						</div>
						<div class="input-field col s6">
							<input id="recipe_name" type="text" class="validate">
							<label for="recipe_name">ITEM NAME</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="recipe_description" type="text" class="validate">
							<label for="recipe_description">DESCRIPTION</label>
						</div>
						<div class="input-field col s6">
							<input id="recipe_photo" type="text" class="validate">
							<label for="recipe_photo">PHOTO</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s4">
							<input id="recipe_preparationtime" type="text" class="validate">
							<label for="recipe_preparationtime">PRICE</label>
						</div>
						<div class="input-field col s4">
							<input id="recipe_cookingtime" type="text" class="validate">
							<label for="recipe_cookingtime">WHERE</label>
						</div>
						
					</div>
					</div>					
				</form>
			</div>			
		`;

		this.reRender(`
			${html}
			`,document.getElementById("recipeCreate"));
		$('#recipeCreate').show();
		$('#recipeList').hide();
		$('#recipeView').hide();
		$('#recipeRecent').hide();
		this.state[0].bind.procedures = [];		
		this.state[0].bind.ingredients_qty = [];		
		this.state[0].bind.ingredients_name = [];		
	}

	

	recipeNewIngredients(obj){
		let bind_qty = this.state[0].bind.ingredients_qty;
		let bind_name = this.state[0].bind.ingredients_name;
		bind_qty.push("");		
		bind_name.push("");		
		
		let html = ``;
		for(let i=0;i<bind_qty.length;i++){
			let decode_bind_qty = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'qty')"`;
			let decode_bind_name = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'name')"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_qty} value="${bind_qty[i]}" type="text" />					
					</div>
				</div>	
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_name} value="${bind_name[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("recipeNewIngredients"));
	}	


}

let component = new Component();
component.recipeLayout();


//////////////////////////////////////

/*
"use strict";


class App{
	constructor(){
		this.movies = [
			{
				"Title":"Winter Is Coming",
				"Year":"2011",
				"Director":"Timothy Van Patten",
				"Poster":"img/winteriscoming.jpg",
				"Actors":"Sean Bean, Mark Addy, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"Title":"The North Remembers",
				"Year":"2012",
				"Director":"Alan Taylor",
				"Poster":"img/thenorthremembers.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"Title":"Valar Dohaeris",
				"Year":"2013",
				"Director":"Daniel Minahan",
				"Poster":"img/valar.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington"
			},
			{
				"Title":"Two Swords",
				"Year":"2014",
				"Director":"D.B. Weiss",
				"Poster":"img/twoswords.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"Title":"The Wars to Come",
				"Year":"2015",
				"Director":"Michael Slovis",
				"Poster":"img/thewarstocome.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"Title":"The Red Woman",
				"Year":"2016",
				"Director":"Jeremy Podeswa",
				"Poster":"img/redwoman.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
		let t = document.getElementById('newTitle');
		let y = document.getElementById('newYear');
		let d = document.getElementById('newDirector');
		let p = document.getElementById('newPoster');
		let a = document.getElementById('newActors');

		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
		this.movies.push(movie);

		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
		this.movieListInfo();
	}

	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		this.movieListInfo();		
	}

	updateMovie(key){
		let y = document.getElementById('updateYear');
		let d = document.getElementById('updateDirector');
		let a = document.getElementById('updateActors');

		let m = this.movies[key];
		let movie = {"Title":m.Title,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

		this.movies[key] = movie;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		this.movieListInfo();			
	}
}

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		this.render(
			`
				<div class="row">
					<div class="col col-sm-6">
						<div id="movieCreate"></div>						
					</div>
					<div class="col col-sm-6">
						<h1>Movie List</h1>
						<table id="movieList" class="table">
							<thead>
								<tr>
									<th>Title</th>
									<th>Year</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody id="movieListInfo"></tbody>
						</table>
					</div>
				</div>
				<div id="movieDetails"></div>
			`
			,document.getElementById('app'));
		this.movieListInfo();
	}

	movieListInfo(){
		let html = "";
		let m = this.movies;
		for(let i=0;i<m.length;i++){
			html += `
				<tr>
					<td>${m[i].Title}</td>
					<td>${m[i].Year}</td>
					<td><button class="btn btn-primary"  onclick="component.movieDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('movieListInfo'));
	}

	movieDetails(key){
		this.reRender(
			`
				<h1>Movie Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="movieDetailsInfo">
				        <h4 class="media-heading">${this.movies[key].Title}</h4>
				        Year: ${this.movies[key].Year}<br/>
						Director: ${this.movies[key].Director}<br/>
						Actors: ${this.movies[key].Actors}<br/>
						<button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
					</div>	
				</div>			
			`,document.getElementById('movieDetails'));
	}

	movieCreate(){
		this.render(
			`
				<h1>New Movie</h1>
				Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
				Year: <input class="form-control" id="newYear" type="" placeholder="Enter Title" /><br/>
				Director: <input class="form-control" id="newDirector" type="" placeholder="Enter Director" /><br/>
				Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			`,document.getElementById('movieCreate'));
	}

	movieUpdate(key){
		this.reRender(
			`
					<h4 class="media-heading">${this.movies[key].Title}</h4>
			        Year: <input id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
					Director: <input id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
					Actors: <input id="updateActors" type="text" value="${this.movies[key].Actors}" /><br/>
					<button class="btn btn-success" onclick="component.updateMovie(${key})">Save</button>
			`,document.getElementById('movieDetailsInfo'));
	}
}

let component = new Component();
component.movieList();
component.movieCreate();

*/