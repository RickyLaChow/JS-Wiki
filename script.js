    
        function modal(){
            const data = {
            'Variabili': {
                titolo: "Variabile VAR",
                codice: "var nome = valore;",
                spiegazione: "Una variabile e' un contenitore <br>dove possiamo imagazzinare un dato",
                titolo2: "Variabile LET",
                codice2: "let nome = valore;",
                spiegazione2: "La variabile let e' un tipo di variabile locale.",
                titolo3: "Variabile CONST",
                codice3: "const nome = valore;",
                spiegazione3: "La variabile Const e' un tipo di variabile Costante"
        },
            'Test': {
                test: "prova"

        }
    }
        
        const list = document.querySelector('#Ricerca');

        //Modal 1
        var modal = document.getElementById("modal")
        var titolo_modal = document.getElementById("titolo_modal")
        var codice_modal = document.getElementById("codice")
        var spiegazione_modal = document.getElementById("spiegazione")

        //Modal 2
        var modal2 = document.getElementById("modal2")
        var titolo_modal2 = document.getElementById("titolo_modal2")
        var codice_modal2 = document.getElementById("codice2")
        var spiegazione_modal2 = document.getElementById("spiegazione2")

        //Modal 3
        var modal3 = document.getElementById("modal3")
        var titolo_modal3 = document.getElementById("titolo_modal3")
        var codice_modal3 = document.getElementById("codice3")
        var spiegazione_modal3 = document.getElementById("spiegazione3")
        
            list.addEventListener('click', (evt) => {
            const selectedText = evt.target.textContent;
            if (data.hasOwnProperty(selectedText))
            if(selectedText == "Variabili"){
                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Variabili.titolo
                codice_modal.innerHTML = data.Variabili.codice
                spiegazione_modal.innerHTML = data.Variabili.spiegazione

                modal2.style = 'display: block'
                titolo_modal2.innerHTML = data.Variabili.titolo2
                codice_modal2.innerHTML = data.Variabili.codice2
                spiegazione_modal2.innerHTML = data.Variabili.spiegazione2

                modal3.style = 'display: block'
                titolo_modal3.innerHTML = data.Variabili.titolo3
                codice_modal3.innerHTML = data.Variabili.codice3
                spiegazione_modal3.innerHTML = data.Variabili.spiegazione3
            }
            else if (selectedText == "Test"){
                titolo_modal.innerHTML = data.Test.test
                modal2.style = 'display: none;'
                modal3.style = 'dispaly: none;'
            }
            console.log(data[selectedText]);
        });
    }
    
    
        function Ricerca() {
          let input, filter, ul, li, a, i;
          input = document.getElementById("b_ricerca");
          filter = input.value.toUpperCase();
          ul = document.getElementById("Ricerca");
          li = ul.getElementsByTagName("li");
        
          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }