import { saveDTO, updateDTO } from './genres.dto';
import { Genres } from './genres.model';

const save = async (data: saveDTO) => {
  return await Genres.create({ data });
};

const findAll = async () => {
  return await Genres.findMany();
};

const findOne = async (id: number) => {
  return await Genres.findUnique({ where: { id } });
};

const findInNames = async (names: string[]) => {
  return await Genres.findMany({
    select: { id: true },
    where: { name: { in: names } },
  });
};

const update = async (id: number, data: updateDTO) => {
  return await Genres.update({ where: { id }, data });
};

const destroy = async (id: number) => {
  return await Genres.delete({ where: { id } });
};

export { save, findAll, findInNames, findOne, update, destroy };
