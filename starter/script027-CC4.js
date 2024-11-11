/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark ={
    name: "Mark Potter",
    poids:80,
    taille: 1.80,
    bmiMark(){
        return this.bmi = this.poids / (this.taille * this.taille)
    }
}
console.log(mark.bmiMark());

const john ={
    name: "John Wisley",
    poids:65,
    taille: 1.60,
    bmiJohn(){
        return this.bmi = this.poids / (this.taille * this.taille)
    }
}
console.log(john.bmiJohn());

if(mark.bmiMark() > john.bmiJohn()){
    console.log(`${mark.name} a le BMI le plus élévé`)
}else if(john.bmiJohn() > mark.bmiMark()){
    console.log(`${john.name} a le BMI le plus élévé`)
}else{
    console.log('les deux ont le même BMI')
}