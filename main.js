// Sistema Biblioteca

const estante = [];

class Biblioteca {
    constructor(autor,titulo, categoria, idade_minima) {
        this.autor = autor;
        this.titulo = titulo;
        this.categoria = categoria;
        this.idade_minima = idade_minima;
    }

    adicionar_livro() {
        if(!this.verificacao(this.autor, this.titulo, this.categoria, this.idade_minima)) {
            return;
        } 
        
        estante.push({
            autor: this.autor,
            titulo: this.titulo,
            categoria: this.categoria,
            idade_minima: this.idade_minima
        });
        console.log('Livro adicionado com sucesso');
    }

    verificacao(autor, titulo, categoria, idade_minima) {
        if(!autor || !titulo || !categoria || !idade_minima) {
            console.log('Error 404');
            return;
        }

        if(typeof autor !== 'string' || typeof titulo !== 'string' || typeof categoria !== 'string' || typeof idade_minima !== 'number') {
            console.log('Type error');
            return;
        }

        return true;
    }

    listagem() {
        if(estante.length < 1) {
            console.log('Estante vazia');
            return;
        }
        console.log(estante)
    }

    remover(titulo_livro) {
       
        if(estante.length < 1) {
            console.log('Estante vazia');
            return;
        }

         if(!titulo_livro) {
            console.log('Error 404');
            return;
        } 

        const procurar_livro = estante.filter((book) => book.titulo === titulo_livro);
        if(procurar_livro.length > 0) {
            estante.pop(procurar_livro);
            console.log('Livro removido com sucesso!');
            return;
        }

        console.log('OOPS! Livro não encontrado na base de dados');


    }
}

const livro = new Biblioteca('Nunes', 'Hugo', 'Comédia', 12);
livro.listagem();
livro.adicionar_livro();
livro.listagem();
livro.remover('Hugo');
livro.listagem();