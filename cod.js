           function saveNota() {
            const nota = document.getElementById('nota').value;
            localStorage.setItem('nota', nota);
            console.log("Nota salva:", nota);
        }


        function recuperarNota() {
            const savedNote = localStorage.getItem('nota');
            if (savedNote !== null) {
                document.getElementById('nota').value = savedNote;
                console.log("Nota recuperada:", savedNote);
             alert("salvo")
            } else {
                console.log("Nenhuma nota encontrada.");
                alert("Nenhuma nota salva!");
            }
        }

        // Recupera automaticamente ao carregar a página
        window.onload = function () {
            recuperarNota();
        };
