import { saveDTO, updateDTO } from './animes.dto';
import { Animes } from './animes.model';

const save = async (data: saveDTO) => {
  return await Animes.create({
    data: { ...data, genres: { connect: data.genres } },
  });
};

const findAll = async () => {
  const animes = await Animes.findMany({
    select: {
      id: true,
      cover: true,
      title: true,
      episodes: true,
      status: true,
      aired: true,
      genres: { select: { id: true, name: true } },
    },
  });
  return animes.map((anime) => {
    return {
      ...anime,
      genres: anime.genres.map(({ name }) => name),
    };
  });
};

const findByPk = async (id: number) => {
  const anime = await Animes.findUnique({
    where: { id },
    select: {
      id: true,
      cover: true,
      title: true,
      episodes: true,
      status: true,
      aired: true,
      genres: { select: { id: true, name: true } },
    },
  });
  return {
    ...anime,
    genres: anime.genres.map(({ name }) => name),
  };
};

const findOne = async (id: number) => {
  return await Animes.findUnique({ where: { id } });
};

const update = async (id: number, data: updateDTO) => {
  return await Animes.update({
    where: { id },
    data: { ...data, genres: { set: data.genres } },
  });
};

const destroy = async (id: number) => {
  return await Animes.delete({ where: { id } });
};

export { save, findAll, findByPk, findOne, update, destroy };
