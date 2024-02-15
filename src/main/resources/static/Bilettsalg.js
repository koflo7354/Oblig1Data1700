const billetterSolgt = [];
function register(){
    const film = document.getElementById("typeFilm").value;
    const antall = document.getElementById("antall").value;
    const Fnavn = document.getElementById("Fnavn").value;
    const Enavn = document.getElementById("Enavn").value;
    const tlfNr = document.getElementById("tlfNr").value;
    const email = document.getElementById("mail").value;

    const billett = {
        film : film,
        antall : antall,
        Fnavn : Fnavn,
        Enavn : Enavn,
        tlfNr : tlfNr,
        email : email
    };
    billetterSolgt.push(billett);
}
function resetteInput(){
    document.getElementById("antall").value = "";
    document.getElementById("Fnavn").value = "";
    document.getElementById("Enavn").value = "";
    document.getElementById("tlfNr").value = "";
    document.getElementById("mail").value = "";
}
function visBilletter(){
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    for (let p of billetterSolgt){
        ut += "<tr>";
        ut += "<td>"+p.film+"</td><td>"+p.antall+" stk"+"</td><td>"+p.Fnavn+"</td><td>"+ p.Enavn+"</td><td>"+p.tlfNr+"</td><td>"+p.email+"</td>";
        ut += "</tr>";

        document.getElementById("visBilletter").innerHTML = ut;
    }
}
function SjekkNummer(){
    let utNummer = "tallet kan ikke være mindre enn null.";
    let string1 = document.getElementById("antall").value
    antallNr = Number(string1);
    if (antallNr < 1){
        // utNummer += "tallet kan ikke være mindre enn null."
        // utNummer += "</p>";
        document.getElementById("antallFeilmld").innerHTML = utNummer;
        console.log(utNummer)
        return false;
    }
    else{
        document.getElementById("antallFeilmld").innerHTML = "";
        return true;
    }
}
function SjekkFnavn() {
    let utFnavnFeil = "Du må skrive noe inn i Fornavn.";
    if (document.getElementById("Fnavn").value == "") {
        // utFnavnFeil += "Du må skrive noe inn i Fornavn.";
        // utFnavnFeil += "</p>";
        document.getElementById("FnavnFeilmld").innerHTML = utFnavnFeil;
        return false;
    }
    else{
        document.getElementById("FnavnFeilmld").innerHTML = "";
        return true;
    }
}
function SjekkEnavn() {
    let utEnavnFeil = "Du må skrive noe inn i Etternavn.";
    if (document.getElementById("Enavn").value == "") {
        //  utEnavnFeil += "Du må skrive noe inn i Etternavn.";
        //  utEnavnFeil += "</p>";
        document.getElementById("EnavnFeilmld").innerHTML = utEnavnFeil;
        return false;
    }
    else{
        document.getElementById("EnavnFeilmld").innerHTML = "";
        return true;
    }
}
function SjekkTlfnr(){
    let utFeilTlfnr = "Dette er ikke et gyldig norsk telefonnr.";
    let tlfString = Number(document.getElementById("tlfNr").value);
    if (tlfString < 10000000 || tlfString > 99999999){
        // utFeilTlfnr += "Dette er ikke et gyldig norsk telefonnr.";
        // utFeilTlfnr += "</p>";
        document.getElementById("TlfnrFeilmld").innerHTML = utFeilTlfnr;
        return false;
    }
    else{
        document.getElementById("TlfnrFeilmld").innerHTML = "";
        return true;
    }
}
function SjekkEpost(){
    let utEpostFeil = "Dette er ikke en godkjent Epost.";
    const sjekkEpost = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let sjekk = sjekkEpost.test(document.getElementById("mail").value)
    if (sjekk == false){
        //  utEpostFeil += "Dette er ikke en godkjent Epost.";
        //  utEpostFeil += "</p>";
        document.getElementById("EpostFeilmld").innerHTML = utEpostFeil;
        return false;
    }
    else{
        document.getElementById("EpostFeilmld").innerHTML = "";
        return true;
    }
}
function FjernFeilmld(){
    document.getElementById("antallFeilmld").innerHTML = "";
    document.getElementById("FnavnFeilmld").innerHTML = "";
    document.getElementById("EnavnFeilmld").innerHTML = "";
    document.getElementById("TlfnrFeilmld").innerHTML = "";
    document.getElementById("EpostFeilmld").innerHTML = "";
}
function Enknapp(){
    let altIOrden = true;
    SjekkNummer();
    SjekkFnavn();
    SjekkEnavn();
    SjekkTlfnr();
    SjekkEpost();
    if (SjekkNummer() == false || SjekkFnavn() == false || SjekkEnavn() == false || SjekkTlfnr() == false || SjekkEpost() == false){
        altIOrden = false;
    }
    else {
        register();
        visBilletter();
        resetteInput();
    }
}
