import { saveDTO, updateDTO } from './permissions.dto';
import { Permissions } from './permissions.model';

const save = async (data: saveDTO) => {
  return await Permissions.create({ data });
};

const findAll = async () => {
  return await Permissions.findMany();
};

const findOne = async (id: string) => {
  return await Permissions.findUnique({ where: { id } });
};

const findInTypes = async (types: string[]) => {
  return await Permissions.findMany({
    select: { id: true },
    where: { type: { in: types } },
  });
};

const update = async (id: string, data: updateDTO) => {
  return await Permissions.update({ where: { id }, data });
};

const destroy = async (id: string) => {
  return await Permissions.delete({ where: { id } });
};

export { save, findAll, findInTypes, findOne, update, destroy };
