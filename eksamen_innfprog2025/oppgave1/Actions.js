
// Funksjoner som jobber med dataene i register.js 

const laererStillinger = ["Professor", "Lektor", "Rektor", "Dekan"]; 
const adminStillinger = ["Vaktmester"]; 


function lagAnsattHTML(index) {
  const ansatt = ansatte[index];

  if (!ansatt) {
    return "";
  }


  let kursTekst = "Ingen kursansvar";
  if (Array.isArray(ansatt.kursansvar) && ansatt.kursansvar.length > 0) {
    kursTekst = ansatt.kursansvar.join(", ");
  }

  
  return `
    <article class="ansatt-kort" data-index="${index}">
      <h2>${ansatt.fornavn} ${ansatt.etternavn}</h2>
      <p><strong>Stilling:</strong> ${ansatt.stilling}</p>
      <p><strong>Kontor:</strong> ${ansatt.kontor}</p>
      <p><strong>E-post:</strong> <a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p>
      <p><strong>Kursansvar:</strong> ${kursTekst}</p>
    </article>
  `;
}


function listAlleAnsatte() {
  let html = "";

  for (let i = 0; i < ansatte.length; i++) {
    html += lagAnsattHTML(i);
  }

  return html;
}


function listAnsatteMedStilling(stilling) {
  let html = "";

  for (let i = 0; i < ansatte.length; i++) {
    if (ansatte[i].stilling === stilling) {
      html += lagAnsattHTML(i);
    }
  }

  return html;
}


function hentAlleKurs() {
  const kursListe = [];

  for (const ansatt of ansatte) {
    if (!Array.isArray(ansatt.kursansvar)) {
      continue;
    }

    for (const kurs of ansatt.kursansvar) {
      if (!kursListe.includes(kurs)) {
        kursListe.push(kurs);
      }
    }
  }

  return kursListe;
}



function hentAlleKursHTML() {
  const kurs = hentAlleKurs();
  let html = "<ul>";

  for (const kursnavn of kurs) {
    html += `<li>${kursnavn}</li>`;
  }

  html += "</ul>";
  return html;
}


function listUndervisere() {
  let html = "";

  for (let i = 0; i < ansatte.length; i++) {
    if (laererStillinger.includes(ansatte[i].stilling)) {
      html += lagAnsattHTML(i);
    }
  }

  return html;
}


function listAdministrasjon() {
  let html = "";

  for (let i = 0; i < ansatte.length; i++) {
    if (adminStillinger.includes(ansatte[i].stilling)) {
      html += lagAnsattHTML(i);
    }
  }

  return html;
}



function leggTilUnderviser(fornavn, etternavn, kontor, stilling, epost, kurs) {
  let kursListe = [];

  if (Array.isArray(kurs)) {
    kursListe = kurs;
  } else if (typeof kurs === "string" && kurs.trim() !== "") {
    
    kursListe = kurs
      .split(";")
      .map(k => k.trim())
      .filter(k => k.length > 0);
  }

  const nyAnsatt = {
    fornavn: fornavn,
    etternavn: etternavn,
    kontor: kontor,
    stilling: stilling,
    epost: epost,
    kursansvar: kursListe
  };

  ansatte.push(nyAnsatt);

  
  return ansatte.length - 1;
}


function slettAnsatt(index) {
  if (index >= 0 && index < ansatte.length) {
    ansatte.splice(index, 1);
  }
}
