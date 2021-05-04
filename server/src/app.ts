import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors';
//const cors = require('cors'); 
//const express = require('express');
//const app = express();app.use(cors());
// Routes
//import IndexRoutes from    './routes/index.routes'
import programador1Route from './routes/programado1.routes'
import reportuser1Route from './routes/reportuser.routes'

//import PostRoutes from './routes/post.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 5002);
        //this.app/
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
       this.app.use(express.json({ limit: '10mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    }
    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
    routes(){
  
     //   this.app.use('/', IndexRoutes);
        this.app.use('/programador1/', programador1Route);
        this.app.use('/reportuser/', reportuser1Route);
    }
}

  

 

