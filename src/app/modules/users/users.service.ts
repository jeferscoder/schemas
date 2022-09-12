import { Handling } from '@utils/Handling';
import { saveDTO, updateDTO } from './users.dto';
import * as repository from './users.repository';
import * as permissionsRepository from '@modules/permissions/permissions.repository';

const save = async (dto: saveDTO) => {
  const permissions = await permissionsRepository.findInTypes(dto.permissions);
  return await repository.save({ ...dto, permissions });
};

const findAll = async () => {
  return await repository.findAll();
};

const findOne = async (id: string) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('user does not exists', 404);
  return await repository.findByPk(id);
};

const update = async (id: string, dto: updateDTO) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('user does not exists', 404);
  const permissions = await permissionsRepository.findInTypes(dto.permissions);
  return await repository.update(id, { ...dto, permissions });
};

const destroy = async (id: string) => {
  const user = await repository.findOne(id);
  if (!user) throw new Handling('user does not exists', 404);
  return await repository.destroy(id);
};

export { save, findAll, findOne, update, destroy };
