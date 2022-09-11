import { saveDTO, updateDTO } from './users.dto';
import { Users } from './users.model';

const save = async (data: saveDTO) => {
  return await Users.create({ data });
};

const findAll = async () => {
  return await Users.findMany();
};

const findOne = async (id: string) => {
  return await Users.findUnique({ where: { id } });
};

const update = async (id: string, data: updateDTO) => {
  return await Users.updateMany({ where: { id }, data });
};

const destroy = async (id: string) => {
  return await Users.delete({ where: { id } });
};

export { save, findAll, findOne, update, destroy };
