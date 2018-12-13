var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"]
var message = ["You are going to see lots of light this coming future.", "Pieses, the Cancer Moon is traveling through your planet, Neptune so get ready to live your best life!",
    "Beware of those toxic relationships... get rid of them this year!", "A big adventurous trip is coming to you Taurus.",
    "Gemini this year will be filled with new turns and twists so beware wise one!","New relationships with sunshine and happiness are going to be fulfilled this year.","" +
    "Leo, this year will be filled with grounding experiences to bring you back to earth.","Good fortunate will come your way Virgo!",
    "Patience this year will be your key to success.","Libra love is coming your way in full flow! <3",
    "Close people will turn to strangers, yet real ones will stay and you will see the truth of it all.","Beware of the man in the blue coat, he does not have good news for you.","" +
    "Unicorns will fly above your sun sign and grab them and keep the magic within, you'll need it."]

var images = ["image/0.jpg","image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.jpg","image/11.jpg",]

function runFunction(){

    var name = document.getElementById("name").value
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value
    console.log(name)
    console.log(month)
    console.log(day)
    var sign = determineSign(day,month)


    document.getElementById("sign").innerHTML = "Hi " + name + " your sign is " + signs[sign] + ".";
    document.getElementById("message").innerHTML =  message[sign];
    document.getElementById("image").src=  images[sign];

}

function determineSign(day,month){
    if(month==2 && day>28){
        return "ERROR";
    }
    if(month==1 && day>=20){
        return 0;
    }
    if(month==2 && day<=18){
        return 0;
    }
    if(month==2 && day>=18){
        return 1;
    }
    if(month==3 && day<=20){
        return 1;
    }
    if(month==3 && day>=20){
        return 2;
    }
    if(month==4 && day<=20) {
        return 2;
    }
    if(month==4 && day>=20){
        return 3;
    }
    if(month==5 && day<=21){
        return 3;
    }
    if(month==5 && day>=21) {
        return 4;
    }
    if(month==6 && day<=20){
        return 4;
    }
    if(month==6 && day>=21){
        return 5;
    }
    if(month==7 && day<=22){
        return 5;
    }
    if(month==7 && day>=23){
        return 6;
    }
    if(month==8 && day<=22){
        return 6;
    }
    if(month==8 && day>=23){
        return 7;
    }
    if(month==9 && day<=22){
        return 7;
    }
    if(month==9 && day>=23){
        return 8;
    }
    if(month==10 && day<=22){
        return 8;
    }
    if(month==10 && day>=23){
        return 9;
    }
    if(month==11 && day<=21){
        return 9;
    }
    if(month==11 && day>=22){
        return 10;
    }
    if(month==12 && day<=21){
        return 10;
    }
    if(month==12 && day>=22){
        return 11;
    }
    if(month==1 && day<=19){
        return 11;
    }
    if(day>31){
        return "ERROR";
    }

}