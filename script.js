    
        function modal(post){
            const data = {
            'Variabili': {
        },
            'Test': {
            test: "prova"
        }
    }
        
        const list = document.querySelector('#Ricerca');
        var modal = document.getElementById("modal")
        var titolo_modal = document.getElementById("titolo_modal")
        var codice_modal = document.getElementById("codice")
        var spiegazione_modal = document.getElementById("spiegazione")
        
            list.addEventListener('click', (evt) => {
            const selectedText = evt.target.textContent;
            const codice3 = evt.target.textContent;
            if (data.hasOwnProperty(selectedText))
            modal.style = 'display: block';
            if(selectedText == "Variabili"){
                titolo_modal.innerHTML = "Titolo Variabili"
                codice_modal.innerHTML = "Si dichiara con Var nome"
                spiegazione_modal.innerHTML = "Spiegazione"
            }
            else if (selectedText == "Test"){
                titolo_modal.innerHTML = "Titolo Varieeweqwei"
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