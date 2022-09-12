import { Handling } from '@utils/Handling';
import { saveDTO, updateDTO } from './roles.dto';
import * as repository from './roles.repository';

const save = async (dto: saveDTO) => {
  return await repository.save(dto);
};

const findAll = async () => {
  return await repository.findAll();
};

const findOne = async (id: string) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('role does not exists', 404);
  return user;
};

const update = async (id: string, dto: updateDTO) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('role does not exists', 404);
  return await repository.update(id, dto);
};

const destroy = async (id: string) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('role does not exists', 404);
  return await repository.destroy(id);
};

export { save, findAll, findOne, update, destroy };
