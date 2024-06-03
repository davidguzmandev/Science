const listaCientificos = require('../db/Science');

const heroeController = {
    lista: (req, res) => {
        res.render('heroes', {listaCientificos});
    },
    detalle: (req, res) => {
        const id = parseInt(req.params.id);
        const scientist = listaCientificos.find(sc => sc.id === id);
        if(scientist) {
            res.render('detalle', {nombre: scientist.nombre, profesion: scientist.profesion})
        } else {
            res.render('detalle', {message: 'No encontramos al científico indicado. Por favor, elija otro id.'});
        }
    },
    bio: (req, res) => {
        const id = parseInt(req.params.id);
        const ok = req.params.ok;
        const scientist = listaCientificos.find(sc => sc.id === id);
        if(scientist){
            if(ok === 'ok'){
                res.render('bio', {nombre: scientist.nombre, bio: scientist.resenia});
            } else {
                res.render('bio', {nombre: scientist.nombre, bio: '', message:'Lamento que no desees saber más de mi :('})
            }
        } else {
            res.render('bio', {nombre: '', message:'No encontramos al científico indicado para mostrar su biografía.'})
        }
    }
}

module.exports = heroeController;