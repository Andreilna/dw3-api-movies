import movieService from "../services/movieService.js";

const getAllmovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, genre, year, director } = req.body;
    await movieService.Create(title, genre, year, director);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default { getAllmovies, createMovie };
