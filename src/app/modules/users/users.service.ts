import { Handling } from '@utils/Handling';
import { saveDTO, updateDTO } from './users.dto';
import * as repository from './users.repository';

const save = async (dto: saveDTO) => {
  return await repository.save(dto);
};

const findAll = async () => {
  return await repository.findAll();
};

const findOne = async (id: string) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('user does not exists', 404);
  return user;
};

const update = async (id: string, dto: updateDTO) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('user does not exists', 404);
  return await repository.update(id, dto);
};

const destroy = async (id: string) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('user does not exists', 404);
  return await repository.destroy(id);
};

export { save, findAll, findOne, update, destroy };
