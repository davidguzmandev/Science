let mainController = {
    home: (req, res) =>{
        res.render('index',{message:"Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas." })
    },
    creditos: (req, res) =>{
        res.render('creditos',{name:"David Guzman", message: "Hecho con ❤️ en Programación Web Full Stack"})
    }
}

module.exports = mainController;