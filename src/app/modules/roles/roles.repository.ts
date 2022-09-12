import { saveDTO, updateDTO } from './roles.dto';
import { Roles } from './roles.model';

const save = async (data: saveDTO) => {
  return await Roles.create({ data });
};

const findAll = async () => {
  return await Roles.findMany();
};

const findOne = async (id: string) => {
  return await Roles.findUnique({ where: { id } });
};

const findInTypes = async (types: string[]) => {
  return await Roles.findMany({
    select: { id: true },
    where: { type: { in: types } },
  });
};

const update = async (id: string, data: updateDTO) => {
  return await Roles.update({ where: { id }, data });
};

const destroy = async (id: string) => {
  return await Roles.delete({ where: { id } });
};

export { save, findAll, findInTypes, findOne, update, destroy };
