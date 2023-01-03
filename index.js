const express = require("express");
const Sequelize = require('sequelize');
const sequelize = require("./database");
const Certificate = require('./Certificates');


sequelize.sync().then(() => console.log("db is ready"));
const Op = Sequelize.Op;

const app = express();

app.use(express.json());

  app.post('/certificate', (req, res) => {
    Certificate.create({
        certificate_id: req.body.certificate_id,
        full_name: req.body.full_name,
        dob: req.body.dob,
        type: req.body.type,
        issued_on: req.body.issued_on,
        expired_on: req.body.expired_on,
    }).then(() => {
        res.send('certificate is inserted successfully')
    }).catch(()=>{
        res.send('error')
    })
})



app.get('/certificates', (req, res) => {
  const { certificate_id, full_name, type, order, search } = req.query;

  const where = {};
  if (certificate_id) where.certificate_id = certificate_id;
  if (full_name) where.full_name = full_name;
  if (type) where.type = type;
  if (search) {
    where[Op.or] = [
      { certificate_id: { [Op.like]: `%${search}%` } },
      { full_name: { [Op.like]: `%${search}%` } },
      { type: { [Op.like]: `%${search}%` } },
    ];
  }

  const orderBy = [['id', 'ASC']];
  if (order === 'DESC') orderBy[0][1] = 'DESC';

  Certificate.findAll({ where, order: orderBy })
    .then(certificates => res.json(certificates))
    .catch(error => res.status(500).json({ error: error.message }));
});



app.listen(3000, ()=> {
    console.log("app is running")
})