const zoneApparition = document.getElementById('carres');

    //Créer une couleur aléatoire
function randomColor(){
    let random1 = Math.random() * 255;
    let random2 = Math.random() * 255;
    let random3 = Math.random() * 255;
    let opacity = Math.random() * 1;
    let randomColor = "rgba(" + random1.toString() + "," + random2.toString() + "," + random3.toString() + "," + opacity.toString() + ")" ;
    return randomColor;
}

    //Créer une taille aléatoire
function randomSize(){
    let random = Math.random() * 15;
    return random;
}

function creerCarre() {

    // Créer un nouveau carré
    let carre = document.createElement('div');
    carre.classList.add('carre');

    // Choisir une position aléatoire
    carre.style.left = Math.random() * 92 + "vw";
    carre.style.top = Math.random() * 82 + "vh";
    
    //Créer une taille aléatoire
    carre.style.width = randomSize() + "vmin";
    carre.style.height = randomSize() + "vmin";

    //Utilisation une couleur aléatoire
    carre.style.backgroundColor = randomColor();

    // Ajouter le carré dans la zone d'apparition
    zoneApparition.append(carre);
    carre.addEventListener('click', remove);
}

function creerCercle() {
    // Créer un nouveau carré
    let cercle = document.createElement('div');
    cercle.classList.add('cercle');

    // Choisir une position aléatoire
    cercle.style.left = Math.random() * 92 + "vw";
    cercle.style.top = Math.random() * 82 + "vh";

    //Créer une taille aléatoir
    cercle.style.width = randomSize() + "vmin";
    cercle.style.height = randomSize() + "vmin";

    //Créer une couleur aléatoire
    cercle.style.backgroundColor = randomColor();

    // Ajouter le carré dans la zone d'apparition
    zoneApparition.append(cercle);
    cercle.addEventListener('click', remove);
}

function creerTriangle() {
    // Créer un nouveau carré
    let triangle = document.createElement('div');
    triangle.classList.add('triangle');

    // Choisir une position aléatoire
    triangle.style.left = Math.random() * 92 + "vw";
    triangle.style.top = Math.random() * 82 + "vh";

    //Créer une taille aléatoire
    triangle.style.border = randomSize() + "vmin solid transparent";
    triangle.style.borderBottom = randomSize() + "vmin solid " + randomColor();

    //Créer une couleur aléatoire

    // Ajouter le carré dans la zone d'apparition
    zoneApparition.append(triangle);
    triangle.addEventListener('click', remove);
}

function remove(event){
    let form = event.target;
    form.remove("div");
}

function boom(){
    let boomA = document.getElementById('carres');
    let boomChild = boomA.children;
    for (let i = 0; i < boomChild.length; i++){
        boomChild[i].style.left = Math.random() * 92 + "vw";
        boomChild[i].style.top = Math.random() * 92 + "vw";
        boomChild[i].style.transition = "2s";
    }
}