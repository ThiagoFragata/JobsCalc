const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/'

const profile = {
    name: "Thiago Henrique",
    avatar: "https://avatars.githubusercontent.com/u/71910705?v=4",
    "monthly-budget": 3000,
    "hours-per-day": 4,
    "days-per-week": 5,
    "vacation-per-year": 4,
}

//routes request/response
routes.get('/', (req, res) => res.render(views + "index"));

routes.get('/job/edit', (req, res) => res.render(views + "job-edit"));
routes.get('/job', (req, res) => res.render(views + "job"));
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }));

module.exports = routes;