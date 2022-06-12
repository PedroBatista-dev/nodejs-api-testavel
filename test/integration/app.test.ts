describe('Rotas de Livros', () => {
    describe('Rota GET /livros', () => {
        it('Deve retornar todos os livros', async() => {
            const { body, status } = await global.testRequest.get('/livros');
            expect(status).toBe(200);
            expect(body).toEqual([
                {
                    id: 1,
                    descricao: 'teste'
                },
                {
                    id: 2,
                    descricao: 'teste 2'
                }
            ]);
        });
    });

    describe('Rota GET /livros/:id', () => {
        it('Deve retornar o livro de mesmo id do parametro', async() => {
            const { body, status } = await global.testRequest.get('/livros/2');
            expect(status).toBe(200);
            expect(body).toEqual(
                {
                    id: 2,
                    descricao: 'teste 2'
                }
            );
        });
    });

    describe('Rota POST /livros', () => {
        it('Deve adicionar um novo livro', async() => {
            const { body, status } = await global.testRequest.post('/livros').send({ id: 3, descricao: 'teste novo'});
            expect(status).toBe(201);
            expect(body).toEqual(
                { 
                    id: 3,
                    descricao: 'teste novo'
                }
            );
        });
    });
    
    describe('Rota PUT /livros/:id', () => {
        it('Deve alterar o livro de mesmo id do parametro', async() => {
            const { body, status } = await global.testRequest.put('/livros/2').send({ descricao: 'teste alterado'});
            expect(status).toBe(200);
            expect(body).toEqual(
                {
                    message: 'Livro alterado com sucesso'
                }
            );
        });
    });

    describe('Rota DELETE /livros/:id', () => {
        it('Deve remover o livro de mesmo id do parametro', async() => {
            const { body, status } = await global.testRequest.delete('/livros/2');
            expect(status).toBe(200);
            expect(body).toEqual(
                {
                    message: 'Livro removido com sucesso'
                }
            );
        });
    });

    
});