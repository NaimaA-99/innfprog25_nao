
// Datastruktur for ansatte og stillinger ved skolen

// Liste over alle typer stillinger
const stillinger = [
    "Rektor",
    "Dekan",
    "Vaktmester",
    "Professor",
    "Lektor"
];

// Liste over alle ansatte ved skolen
    const ansatte = [  
    
// 1 Rektor
{
    fornavn: "Lars-Petter", 
    etternavn: "Jørgensen",
    kontor: "M-408",
    stilling: "Rektor",
    epost: "lars.p.jelsness-jorgensen@hiof.no",
    kursansvar: ["Høgskolen i Østfold"]
},

// 2 Dekaner
{
    fornavn: "Ellen-Marie",
    etternavn: "Forsberg",
    kontor: "M-408",
    stilling: "Dekan",
    epost: "ellen.m.forsberg@hiof.no",
    kursansvar: ["Institusjonell ledelse forskning"]
},

{
    fornavn: "Elisabeth",
    etternavn: "Jeppesen",
    kontor: "M-408",
    stilling: "Dekan", 
    epost: "elisabeth.jeppesen@hiof.no", 
    kursansvar: ["Institusjonell ledelse Utdanning"]
},

// 3 Vaktmestere
{
    fornavn: "Jørgen",
    etternavn: "Dale",
    kontor: "B-010",
    stilling: "Vaktmester",
    epost: "jorgen.dale@skole.no",
    kursansvar: []
    
},

{
    fornavn: "Gunnar",
    etternavn: "Stordalen",
    kontor: "B-001",
    stilling: "Vaktmester",
    epost: "gunnar.stordalen@skole.no",
    kursansvar: []
    
},

{
    fornavn: "Hanne",
    etternavn: "Vik",
    kontor: "B-556",
    stilling: "Vaktmester",
    epost: "hanne.vik@skole.no",
    kursansvar: []

},

// 5 professorer 
{
    fornavn: "Ann Cecilie",
    etternavn: "Bergene",
    kontor: "A3-086",
    stilling: "Professor",
    epost: "ann.c.bergene@hiof.no",
    kursansvar: ["Organisasjon og ledelse"]
},

{
    fornavn: "Cecilia",
    etternavn: "Alvstad",
    kontor: "A3-106",
    stilling: "Professor",
    epost: "cecilia.alvstad@hiof.no", 
    kursansvar: ["Språk og litteratur", "Kultur"] 
},

{
    fornavn: "Serge",
    etternavn: "Von Arx",
    kontor: "A2-424",
    stilling: "Professor",
    epost: "serge.p.arx@hiof.no",
    kursansvar: ["Akademi for Scenekunst"]
}, 

{
    fornavn: "Lars",
    etternavn: "Baumbusch",
    kontor: "S-428",
    stilling: "Professor",
    epost: "lars.o.baumbusch@hiof.no",
    kursansvar: ["Sykepleie og helse", "Bioingeniørfag"]
},

{
    fornavn: "Bosse",
    etternavn: "Bergstedt",
    kontor: "FU1-085",
    stilling: "Professor",
    epost: "bosse.bergstedt@hiof.no", 
    kursansvar: ["Ped og IKT", "Læring"]
},

// 10 Lektorer
{
    fornavn: "Marianne",
    etternavn: "Andreassen",
    kontor: "C2-040",
    stilling: "Lektor",
    epost: "marianne.andreassen@hiof.no",
    kursansvar: ["Real- estetiske", "Samfunnsfag"] 
},

{
    fornavn: "Tore",
    etternavn: "Akerbæk",
    kontor: "D1-016",
    stilling: "Lektor",
    epost: "tore.m.akerbak@hiof.no",
    kursansvar: ["IT og kommunikasjon"]
},

{
    fornavn: "Mostafa",
    etternavn: "Aliyari",
    kontor: "S-210",
    stilling: "Lektor",
    epost: "mostafa.aliyari@hiof.no",
    kursansvar: ["Ingeniørfag"]
},

{
    fornavn: "Hege",
    etternavn: "Andersen",
    kontor: "A-201",
    stilling: "Lektor",
    epost: "hege.h.andersen@hiof.no",
    kursansvar: ["Velferd, ledelse og organisasjon"]
},

{
    fornavn: "Kirsti",
    etternavn: "Andersen",
    kontor: "N-325",
    stilling: "Lektor",
    epost: "kirsti.l.andersen@hiof.no",
    kursansvar: ["Sykepleie, helse og bioingeniørfag"]
},

{
    fornavn: "Hilde",
    etternavn: "Andreassen",
    kontor: "D-566",
    stilling: "Lektor",
    epost: "hilde.m.andreassen@hiof.no",
    kursansvar: ["Sykepleie, helse og bioingeniørfag"]
},

{
    fornavn: "Eva",
    etternavn: "Antonsen",
    kontor: "N-220",
    stilling: "Lektor",
    epost: "eva.b.antonsen@hiof.no",
    kursansvar: ["Sykepleie, helse og bioingeniørfag"]
},

{
    fornavn: "Petter",
    etternavn: "Arvesen",
    kontor: "A-335",
    stilling: "Lektor",
    epost: "petter.a.arvesen@hiof.no",
    kursansvar: ["Velferd, ledelse og organisasjon"]
},

{
    fornavn: "Lisbet",
    etternavn: "Aure",
    kontor: "A-223",
    stilling: "Lektor",
    epost: "lisbet.aure@hiof.no",
    kursansvar: ["Sykepleie, helse og bioingeniørfag"]
},

{
    fornavn: "Anne",
    etternavn: "Glømmen",
    kontor: "A-307",
    stilling: "Lektor",
    epost: "anne.m.glommen@hiof.no",
    kursansvar: ["Velferd, ledesle og organisasjon"]
},

]; 