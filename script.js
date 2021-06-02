    


            //Costante che contiene tutti i testi
            const data = {
                'Variabili': {
                    intestazione_arg: "Dichiarazione Variabili",
                    titolo: "Variabile (Var)",
                    codice: "<b>var</b> nome = valore;",
                    spiegazione: "Una variabile e' un contenitore <br>dove possiamo imagazzinare un dato",
                    titolo2: "Variabile (Let)",
                    codice2: "<b>let</b> nome = valore;",
                    spiegazione2: "La variabile let e' un tipo di variabile locale.",
                    titolo3: "Variabile (Const)",
                    codice3: "<b>const</b> nome = valore;",
                    spiegazione3: "La variabile Const e' un tipo di variabile Costante"
                },
                'GetElementById': {
                    intestazione_arg: "L'Attributo GetElementById",
                    titolo: "L'attributo GetElementById.",
                    spiegazione: "Utilizziamo GetElementById per prendere un elemento a cui poi possiamo cambiare gli stili, il valore, e collegarli a una funzione ",
                    codice: "var nome = document.<b>getElementById</b>(NomeID)"
                },
                'Cicli':{
                    intestazione_arg: "Cicli iterativi",
                    titolo: "Ciclo for",
                    spiegazione: "Il Ciclo for è formato da <br> 1 - Dichiarazione di una Variabile(Contatore)<br> 2 - La Condizione che dev'essere rispettata per avviare il ciclo e ripetuta fin quando non è falsa<br> 3 - Incremento di una Variabile",
                    codice: "<b>for(i = 0, i < 10, i++)</b>{<br>Inserisci le istruzioni<br> che vuoi eseguire<br>}",
                    titolo2: "Ciclo While",
                    spiegazione2: "Il Ciclo While è formato <br>solamente dalla Condizione, <br>il ciclo inizierà solo se<br> la condizione sarà vera <br>e si fermerà quando essa diverrà falsa. ",
                    codice2: "<b>while(i > 10)</b>{<br>Inserisci le istruzioni<br>che vuoi eseguire<br>}",
                    titolo3: "Ciclo do While",
                    spiegazione3: "Il ciclo do While, ha una particolarità ovvero che il contenuto all'interno di do viene comunque eseguito una volta dopo di che verrà controllata la condizione ",
                    codice3: "<b>do</b>{<br>Inserisci le Istruzioni<br>che vuoi eseguire<br>}<br><b>while(x < 10)</b>"
                },
                'Funzioni':{
                    intestazione_arg: "Le Funzioni",
                    titolo: "Funzione",
                    spiegazione: "Una funzione è ciò permette di raggruppare una sequenza di istruzioni in un unico blocco.<br> Per dichiararla utilizziamo la parola chiave 'function' ",
                    codice: "<b>function Funzione(Parametri)</b>{<br>Inserisci le Istruzioni<br> che vuoi eseguire<br>}",
                    titolo2: "Funzione Ricorsiva",
                    spiegazione2: "Una funzione ricorsiva è ricorsiva quando richiama la funzione stessa all'interno di essa",
                    codice2: "function Funzione(n){<br><b>Funzione(n - 1)</b><br>}"
                    
                },
                'Style':{
                    intestazione_arg: "L'Attributo Style",
                    titolo: "Attributo Style",
                    spiegazione: "L'attributo Style possiamo utilizzarlo per assegnare degli stili del codice CSS tramite codice Javascript.",
                    codice: "variabile = document.getElementById('Id')<br>variabile.<b>style</b>: 'display: block;' "
                },
                'Valore':{
                    intestazione_arg: "L'Attributo Value",
                    titolo: "Attributo Value",
                    spiegazione: "Utilizziamo l'attributo Value quando vogliamo prendere il valore per esempio da un elemento HTML",
                    codice: "variabile = document.getElementById('Id')<b>.Value</>"
                },
                'OnClick':{
                    intestazione_arg: "L'Attributo OnClick",
                    titolo: "Attributo OnClick",
                    spiegazione: "L'attributo onclick lo utilizziamo nel codice HTML, il suo utilizzo è che quando clicchiamo su un determinato oggetto esegue le istruzioni di una funzione.",
                    codice: "elemHTML <b>onclick='funzione()'</b>"
                },
                'Prompt':{
                    intestazione_arg: "L'Attributo Prompt",
                    titolo: "Prompt",
                    spiegazione: "Utilizziamo il prompt per mandare una richiesta all'utente come per esempio una Password, la risposta data dall'utente verrà inserita all'interno della variabile Password",
                    codice: "var Password;<br>Password = <b>Prompt</b>('Inserisci la Password')"
                },
                'Alert':{
                    intestazione_arg: "L'Attributo Alert",
                    titolo: "Alert",
                    spiegazione: "Possiamo Utilizzare Alert per mandare un avviso al nostro utente, all'interno di esso possiamo comunicare un qualsiasi dato",
                    codice: "var somma = 1 + 2;<br><b>Alert</b>(somma);"
                },
                'InnerHTML':{
                    intestazione_arg: "L'Attributo InnerHTML",
                    titolo: "InnerHTML",
                    spiegazione: "Possiamo Utilizzare InnerHTML per cambiare il contenuto di un elemento HTML per esempio un paragrafo.",
                    codice: "var paragrafo = document.GetElementById('p');<br>paragrafo<b>.InnerHTML</b> = 'Ho cambiato il Contenuto del Paragrafo'"
                }
        }
        function modal(){
        const list = document.querySelector('#ricerca');

        var b_documentazione = document.getElementById("b_documentazione")
        var indietro = document.getElementById("indietro")
        var intestazione_argomento = document.getElementById("intestazione_argomento")
        var h1_arg = document.getElementById("h1_arg")
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
        intestazione_argomento.style = 'display: block;';
        indietro.style = 'display: block;';
        b_documentazione.style = 'display: none;';

            
            list.addEventListener('click', (evt) => {
                const selectedText = evt.target.textContent;
                if(selectedText == "Dich. Variabili"){

                    h1_arg.innerHTML = data.Variabili.intestazione_arg
                    modal.style = 'display: block;'
                    titolo_modal.innerHTML = data.Variabili.titolo
                    codice_modal.innerHTML = data.Variabili.codice
                    spiegazione_modal.innerHTML = data.Variabili.spiegazione

                    modal2.style = 'display: block;'
                    titolo_modal2.innerHTML = data.Variabili.titolo2
                    codice_modal2.innerHTML = data.Variabili.codice2
                    spiegazione_modal2.innerHTML = data.Variabili.spiegazione2

                    modal3.style = 'display: block;'
                    titolo_modal3.innerHTML = data.Variabili.titolo3
                    codice_modal3.innerHTML = data.Variabili.codice3
                    spiegazione_modal3.innerHTML = data.Variabili.spiegazione3
            }
            else if (selectedText == "GetElementById"){

                h1_arg.innerHTML = data.GetElementById.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.GetElementById.titolo
                codice_modal.innerHTML = data.GetElementById.codice
                spiegazione_modal.innerHTML
                modal2.style = 'display: none;'
                modal3.style = 'dispaly: none;'
            }
            else if (selectedText == "Cicli"){

                h1_arg.innerHTML = data.Cicli.intestazione_arg
                
                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Cicli.titolo
                codice_modal.innerHTML = data.Cicli.codice
                spiegazione_modal.innerHTML = data.Cicli.spiegazione

                modal2.style = 'display: block;'
                titolo_modal2.innerHTML = data.Cicli.titolo2
                codice_modal2.innerHTML = data.Cicli.codice2
                spiegazione_modal2.innerHTML = data.Cicli.spiegazione2

                modal3.style = 'display: block;'
                titolo_modal3.innerHTML = data.Cicli.titolo3
                codice_modal3.innerHTML = data.Cicli.codice3
                spiegazione_modal3.innerHTML = data.Cicli.spiegazione3
            }
            else if(selectedText == "Funzioni"){
                h1_arg.innerHTML = data.Funzioni.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Funzioni.titolo
                codice_modal.innerHTML = data.Funzioni.codice
                spiegazione_modal.innerHTML = data.Funzioni.spiegazione

                modal2.style = 'display: block;'
                titolo_modal2.innerHTML = data.Funzioni.titolo2
                codice_modal2.innerHTML = data.Funzioni.codice2
                spiegazione_modal2.innerHTML = data.Funzioni.spiegazione2

                modal3.style = 'display: none;'

            }
            else if(selectedText == "Attributo Style"){
                h1_arg.innerHTML = data.Style.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Style.titolo
                codice_modal.innerHTML = data.Style.codice
                spiegazione_modal.innerHTML = data.Style.spiegazione

                modal2.style = 'display: none;'
                modal3.style = 'display: none;'
            }
            else if(selectedText  == "Attributo Value"){
                h1_arg.innerHTML = data.Valore.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Valore.titolo
                codice_modal.innerHTML = data.Valore.codice
                spiegazione_modal.innerHTML = data.Valore.spiegazione

                modal2.style = 'display: none;'
                modal3.style = 'display: none;'
            }
            else if(selectedText  == "Attributo OnClick"){
                h1_arg.innerHTML = data.OnClick.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.OnClick.titolo
                codice_modal.innerHTML = data.OnClick.codice
                spiegazione_modal.innerHTML = data.OnClick.spiegazione

                modal2.style = 'display: none;'
                modal3.style = 'display: none;'

            }
            else if(selectedText  == "Attributo Prompt"){
                h1_arg.innerHTML = data.Prompt.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Prompt.titolo
                codice_modal.innerHTML = data.Prompt.codice
                spiegazione_modal.innerHTML = data.Prompt.spiegazione

                modal2.style = 'display: none;'
                modal3.style = 'display: none;'
            }
            else if(selectedText  == "Attributo Alert"){
                h1_arg.innerHTML = data.Alert.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.Alert.titolo
                codice_modal.innerHTML = data.Alert.codice
                spiegazione_modal.innerHTML = data.Alert.spiegazione

                modal2.style = 'display: none;'
                modal3.style = 'display: none;'
            }
            else if(selectedText == "Attributo InnerHTML"){
                h1_arg.innerHTML = data.InnerHTML.intestazione_arg

                modal.style = 'display: block;'
                titolo_modal.innerHTML = data.InnerHTML.titolo
                codice_modal.innerHTML = data.InnerHTML.codice
                spiegazione_modal.innerHTML = data.InnerHTML.spiegazione

                modal2.style = 'display: none;'
                modal3.style = 'display: none;'
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

        function indietro(){
            var b_documentazione = document.getElementById("b_documentazione");
            var indietro = document.getElementById("indietro")
            var intestazione_argomento = document.getElementById("intestazione_argomento")

            var modal = document.getElementById("modal");
            var modal2 = document.getElementById("modal2");
            var modal3 = document.getElementById("modal3");

            b_documentazione.style.display = 'block';
            indietro.style.display = 'none';
            modal.style.display = 'none';
            modal2.style.display = 'none';
            modal3.style.display = 'none';
            intestazione_argomento.style = 'display: none;';
        }

        function modalButton(){
            const div_bottoni = document.querySelector('#b_documentazione');

            var b_documentazione = document.getElementById("b_documentazione")
            var indietro = document.getElementById("indietro")
            var intestazione_argomento = document.getElementById("intestazione_argomento")
            var h1_arg = document.getElementById("h1_arg")
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
            b_documentazione.style = 'display: none;';
            indietro.style = 'display: block;';
            intestazione_argomento.style = 'display: block;';

            div_bottoni.addEventListener('click', (evento) => {
                const Testoselezionato = evento.target.id;
                if(Testoselezionato == "bottone-variabili"){

                    h1_arg.innerHTML = data.Variabili.intestazione_arg
                    modal.style = 'display: block;'
                    titolo_modal.innerHTML = data.Variabili.titolo
                    codice_modal.innerHTML = data.Variabili.codice
                    spiegazione_modal.innerHTML = data.Variabili.spiegazione

                    modal2.style = 'display: block;'
                    titolo_modal2.innerHTML = data.Variabili.titolo2
                    codice_modal2.innerHTML = data.Variabili.codice2
                    spiegazione_modal2.innerHTML = data.Variabili.spiegazione2

                    modal3.style = 'display: block;'
                    titolo_modal3.innerHTML = data.Variabili.titolo3
                    codice_modal3.innerHTML = data.Variabili.codice3
                    spiegazione_modal3.innerHTML = data.Variabili.spiegazione3
                }
                else if(Testoselezionato == "bottone-cicli"){

                    h1_arg.innerHTML = data.Cicli.intestazione_arg
                
                    modal.style = 'display: block;'
                    titolo_modal.innerHTML = data.Cicli.titolo
                    codice_modal.innerHTML = data.Cicli.codice
                    spiegazione_modal.innerHTML = data.Cicli.spiegazione
    
                    modal2.style = 'display: block;'
                    titolo_modal2.innerHTML = data.Cicli.titolo2
                    codice_modal2.innerHTML = data.Cicli.codice2
                    spiegazione_modal2.innerHTML = data.Cicli.spiegazione2
    
                    modal3.style = 'display: block;'
                    titolo_modal3.innerHTML = data.Cicli.titolo3
                    codice_modal3.innerHTML = data.Cicli.codice3
                    spiegazione_modal3.innerHTML = data.Cicli.spiegazione3
                }
                else if(Testoselezionato == "bottone-elembyid"){
                    h1_arg.innerHTML = data.GetElementById.intestazione_arg

                    modal.style = 'display: block;'
                    titolo_modal.innerHTML = data.GetElementById.titolo
                    codice_modal.innerHTML = data.GetElementById.codice
                    spiegazione_modal.innerHTML
                    modal2.style = 'display: none;'
                    modal3.style = 'dispaly: none;'
                }
                else if(Testoselezionato == "bottone-funzioni"){
                    h1_arg.innerHTML = data.Funzioni.intestazione_arg

                    modal.style = 'display: block;'
                    titolo_modal.innerHTML = data.Funzioni.titolo
                    codice_modal.innerHTML = data.Funzioni.codice
                    spiegazione_modal.innerHTML = data.Funzioni.spiegazione
    
                    modal2.style = 'display: block;'
                    titolo_modal2.innerHTML = data.Funzioni.titolo2
                    codice_modal2.innerHTML = data.Funzioni.codice2
                    spiegazione_modal2.innerHTML = data.Funzioni.spiegazione2
    
                    modal3.style = 'display: none;'
                }
                else if(Testoselezionato == "bottone-alert"){
                    h1_arg.innerHTML = data.Alert.intestazione_arg

                    modal.style = 'display: block;'
                    titolo_modal.innerHTML = data.Alert.titolo
                    codice_modal.innerHTML = data.Alert.codice
                    spiegazione_modal.innerHTML = data.Alert.spiegazione
    
                    modal2.style = 'display: none;'
                    modal3.style = 'display: none;'
                }
            });
        }