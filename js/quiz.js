// ===== Estado del quiz (variables que recuerdan lo que pasó) =====
let puntaje = 0;       // cuántas respuestas correctas lleva
let respondidas = 0;   // cuántas preguntas ya respondió
let r1 = false;        // r1...r5: indican si ya respondió cada pregunta
let r2 = false;
let r3 = false;
let r4 = false;
let r5 = false;
 
// Párrafo donde se muestra el puntaje (se usa en todas las preguntas)
let textoPuntaje = document.getElementById("puntaje");
 
// ===== Pregunta 1: correcta la opción 2 =====
let boton1 = document.getElementById("pregunta1");
boton1.addEventListener("click", function() {
    if (r1 == true) {
        alert("Ya respondiste esta pregunta.");
    } else {
        let respuesta = prompt("¿Dónde nació el P. Faustino Oteiza?\n1) Estella\n2) Ayegui, Navarra\n3) Zaragoza\n\nEscribe 1, 2 o 3:");
        let feedback = document.getElementById("feedback1");
        if (respuesta == null) {
            alert("Cancelaste la pregunta. Puedes intentarlo de nuevo.");
        } else {
            if (parseInt(respuesta) == 2) {
                puntaje = puntaje + 1;
                feedback.innerHTML = '<span class="correcto">✔ ¡Correcto!</span> Nació el 14 de febrero de 1890 en Ayegui, Navarra.';
            } else {
                feedback.innerHTML = '<span class="incorrecto">✘ Incorrecto.</span> Nació en Ayegui, Navarra.';
            }
            r1 = true;
            respondidas = respondidas + 1;
            textoPuntaje.innerHTML = "Puntaje: " + puntaje + " de 5 (respondidas: " + respondidas + ")";
        }
    }
});
 
// ===== Pregunta 2: correcta la opción 1 =====
let boton2 = document.getElementById("pregunta2");
boton2.addEventListener("click", function() {
    if (r2 == true) {
        alert("Ya respondiste esta pregunta.");
    } else {
        let respuesta = prompt("¿A qué orden religiosa pertenecía?\n1) Escolapios (Escuelas Pías)\n2) Jesuitas\n3) Salesianos\n\nEscribe 1, 2 o 3:");
        let feedback = document.getElementById("feedback2");
        if (respuesta == null) {
            alert("Cancelaste la pregunta. Puedes intentarlo de nuevo.");
        } else {
            if (parseInt(respuesta) == 1) {
                puntaje = puntaje + 1;
                feedback.innerHTML = '<span class="correcto">✔ ¡Correcto!</span> Fue religioso escolapio, de las Escuelas Pías.';
            } else {
                feedback.innerHTML = '<span class="incorrecto">✘ Incorrecto.</span> Pertenecía a las Escuelas Pías (escolapios).';
            }
            r2 = true;
            respondidas = respondidas + 1;
            textoPuntaje.innerHTML = "Puntaje: " + puntaje + " de 5 (respondidas: " + respondidas + ")";
        }
    }
});
 
// ===== Pregunta 3: correcta la opción 3 =====
let boton3 = document.getElementById("pregunta3");
boton3.addEventListener("click", function() {
    if (r3 == true) {
        alert("Ya respondiste esta pregunta.");
    } else {
        let respuesta = prompt("¿Qué materias enseñó?\n1) Historia y música\n2) Química y gimnasia\n3) Latín y matemáticas\n\nEscribe 1, 2 o 3:");
        let feedback = document.getElementById("feedback3");
        if (respuesta == null) {
            alert("Cancelaste la pregunta. Puedes intentarlo de nuevo.");
        } else {
            if (parseInt(respuesta) == 3) {
                puntaje = puntaje + 1;
                feedback.innerHTML = '<span class="correcto">✔ ¡Correcto!</span> Enseñó latín y matemáticas, entre otras materias.';
            } else {
                feedback.innerHTML = '<span class="incorrecto">✘ Incorrecto.</span> Enseñó latín y matemáticas.';
            }
            r3 = true;
            respondidas = respondidas + 1;
            textoPuntaje.innerHTML = "Puntaje: " + puntaje + " de 5 (respondidas: " + respondidas + ")";
        }
    }
});
 
// ===== Pregunta 4: correcta la opción 1 =====
let boton4 = document.getElementById("pregunta4");
boton4.addEventListener("click", function() {
    if (r4 == true) {
        alert("Ya respondiste esta pregunta.");
    } else {
        let respuesta = prompt("¿Qué cargo recibió el 26 de agosto de 1920?\n1) Vicerrector de la Casa y Maestro de Novicios\n2) Obispo\n3) Director del colegio de Estella\n\nEscribe 1, 2 o 3:");
        let feedback = document.getElementById("feedback4");
        if (respuesta == null) {
            alert("Cancelaste la pregunta. Puedes intentarlo de nuevo.");
        } else {
            if (parseInt(respuesta) == 1) {
                puntaje = puntaje + 1;
                feedback.innerHTML = '<span class="correcto">✔ ¡Correcto!</span> Fue nombrado Vicerrector de la Casa y Maestro de Novicios.';
            } else {
                feedback.innerHTML = '<span class="incorrecto">✘ Incorrecto.</span> Fue nombrado Vicerrector de la Casa y Maestro de Novicios.';
            }
            r4 = true;
            respondidas = respondidas + 1;
            textoPuntaje.innerHTML = "Puntaje: " + puntaje + " de 5 (respondidas: " + respondidas + ")";
        }
    }
});
 
// ===== Pregunta 5: correcta la opción 2 =====
let boton5 = document.getElementById("pregunta5");
boton5.addEventListener("click", function() {
    if (r5 == true) {
        alert("Ya respondiste esta pregunta.");
    } else {
        let respuesta = prompt("¿En qué año murió?\n1) 1912\n2) 1936\n3) 1920\n\nEscribe 1, 2 o 3:");
        let feedback = document.getElementById("feedback5");
        if (respuesta == null) {
            alert("Cancelaste la pregunta. Puedes intentarlo de nuevo.");
        } else {
            if (parseInt(respuesta) == 2) {
                puntaje = puntaje + 1;
                feedback.innerHTML = '<span class="correcto">✔ ¡Correcto!</span> Murió el 9 de agosto de 1936 en Azanuy, a los 46 años.';
            } else {
                feedback.innerHTML = '<span class="incorrecto">✘ Incorrecto.</span> Murió en 1936, en Azanuy.';
            }
            r5 = true;
            respondidas = respondidas + 1;
            textoPuntaje.innerHTML = "Puntaje: " + puntaje + " de 5 (respondidas: " + respondidas + ")";
        }
    }
});
 
// ===== Resultado final (if...else if...else, como en clase) =====
let botonResultado = document.getElementById("btnResultado");
botonResultado.addEventListener("click", function() {
    let resultado = document.getElementById("resultado");
    if (respondidas < 5) {
        resultado.innerHTML = "Todavía te faltan preguntas por responder.";
    } else if (puntaje >= 4) {
        resultado.innerHTML = "¡Excelente! Acertaste " + puntaje + " de 5. Conoces muy bien al P. Faustino.";
    } else if (puntaje >= 3) {
        resultado.innerHTML = "Aprobado. Acertaste " + puntaje + " de 5.";
    } else {
        resultado.innerHTML = "Debes repasar. Acertaste " + puntaje + " de 5. Visita la Biografía y el Legado.";
    }
});
 
// ===== Reiniciar: vuelve todo al estado inicial =====
let botonReiniciar = document.getElementById("btnReiniciar");
botonReiniciar.addEventListener("click", function() {
    puntaje = 0;
    respondidas = 0;
    r1 = false;
    r2 = false;
    r3 = false;
    r4 = false;
    r5 = false;
    document.getElementById("feedback1").innerHTML = "";
    document.getElementById("feedback2").innerHTML = "";
    document.getElementById("feedback3").innerHTML = "";
    document.getElementById("feedback4").innerHTML = "";
    document.getElementById("feedback5").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    textoPuntaje.innerHTML = "Puntaje: 0 de 5 (respondidas: 0)";
});