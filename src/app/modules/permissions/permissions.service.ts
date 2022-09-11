import { Handling } from '@utils/Handling';
import { saveDTO, updateDTO } from './permissions.dto';
import * as repository from './permissions.repository';

const save = async (dto: saveDTO) => {
  return await repository.save(dto);
};

const findAll = async () => {
  return await repository.findAll();
};

const findOne = async (id: string) => {
  const permission = await repository.findOne(id);
  if (!permission) throw new Handling('permission does not exists', 404);
  return permission;
};

const update = async (id: string, dto: updateDTO) => {
  const permission = await repository.findOne(id);
  if (!permission) throw new Handling('permission does not exists', 404);
  return await repository.update(id, dto);
};

const destroy = async (id: string) => {
  const permission = await repository.findOne(id);
  if (!permission) throw new Handling('permission does not exists', 404);
  return await repository.destroy(id);
};

export { save, findAll, findOne, update, destroy };
