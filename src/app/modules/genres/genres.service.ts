import { Handling } from '@utils/Handling';
import { saveDTO, updateDTO } from './genres.dto';
import * as repository from './genres.repository';

const save = async (dto: saveDTO) => {
  return await repository.save(dto);
};

const findAll = async () => {
  return await repository.findAll();
};

const findOne = async (id: number) => {
  const genre = await repository.findOne(id);
  if (!genre) throw new Handling('genre does not exists', 403);
  return genre;
};

const update = async (id: number, dto: updateDTO) => {
  const genre = await repository.findOne(id);
  if (!genre) throw new Handling('genre does not exists', 403);
  return await repository.update(id, dto);
};

const destroy = async (id: number) => {
  const genre = await repository.findOne(id);
  if (!genre) throw new Handling('genre does not exists', 403);
  return await repository.destroy(id);
};

export { save, findAll, findOne, update, destroy };
