import express, { Application, Request, Response } from "express";
import livros from "./livrosRoutes";

const routes = (app: Application) => {
    app.route('/').get((req: Request, res: Response) => {
        res.status(200).send({titulo: 'Curso de node'})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes;