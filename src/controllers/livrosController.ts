import { Request, Response } from "express";
import Livro  from "@src/models/livros";

class LivroController {
    
    static livros: Livro[] = [
        {
            id: 1,
            descricao: 'teste'
        },
        {
            id: 2,
            descricao: 'teste 2'
        }
    ];

    static listarLivros = (req: Request, res: Response) => {        
        res.status(200).send(this.livros);
    }

    static listarLivroPorId = (req: Request, res: Response) => {
        const id: number = +req.params.id;
        const livro: Livro | undefined = this.livros.find(livro => livro.id == id);
        livro ? res.status(200).send(livro) : res.status(400).send({message: `Id do livro nao localizado.`});
    }

    static cadastrarLivro = (req: Request, res: Response) => {
        if(req.body.id && req.body.descricao){
            const { id, descricao } = req.body;
            let livro: Livro = { id, descricao };
            this.livros.push(livro);
            res.status(201).send(livro);
        }else{
            res.status(500).send({message: `Falha ao cadastrar livro.`});
        }      
        
    }

    static atualizarLivro = (req: Request, res: Response) => {
        const id: number = +req.params.id;
        const { descricao } = req.body;
        const index: number | undefined = this.livros.findIndex(livro => livro.id == id);
        if (index >= 0 && descricao){
            this.livros[index].descricao = descricao;
            res.status(200).send({message: 'Livro alterado com sucesso'});
        }else{
            res.status(500).send({message: 'Livro nao localizado ou descricao nao encontrada'});
        }
    } 
    
    static excluirLivro = (req: Request, res: Response) => {
        const id: number = +req.params.id;
        const index: number | undefined = this.livros.findIndex(livro => livro.id == id);
        if (index >= 0){
            this.livros.splice(index, 1);
            res.status(200).send({message: 'Livro removido com sucesso'});
        }else{
            res.status(500).send({message: 'Livro nao localizado'});
        }
    }
}

export default LivroController;