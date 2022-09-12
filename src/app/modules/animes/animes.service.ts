import { saveDTO, updateDTO } from './animes.dto';
import * as repository from './animes.repository';
import * as genresRepository from '@modules/genres/genres.repository';
import { Handling } from '@utils/Handling';

const save = async (dto: saveDTO) => {
  const genres = await genresRepository.findInNames(dto.genres);
  return await repository.save({ ...dto, genres });
};

const findAll = async () => {
  return await repository.findAll();
};

const findOne = async (id: number) => {
  const anime = await repository.findOne(id);
  if (!anime) throw new Handling('anime does not exists', 403);
  return await repository.findByPk(id);
};

const update = async (id: number, dto: updateDTO) => {
  const anime = await repository.findOne(id);
  if (!anime) throw new Handling('anime does not exists', 403);
  const genres = await genresRepository.findInNames(dto.genres);
  return await repository.update(id, { ...dto, genres });
};

const destroy = async (id: number) => {
  const anime = await repository.findOne(id);
  if (!anime) throw new Handling('anime does not exists', 403);
  return await repository.destroy(id);
};

export { save, findAll, findOne, update, destroy };
