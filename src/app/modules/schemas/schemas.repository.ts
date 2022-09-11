import { saveDTO, updateDTO } from './schemas.dto';
import { Schemas } from './schemas.model';

const save = async (data: saveDTO) => {
  return await Schemas.create({ data });
};

const findAll = async () => {
  return await Schemas.findMany();
};

const findOne = async (id: string) => {
  return await Schemas.findUnique({ where: { id } });
};

const update = async (id: string, data: updateDTO) => {
  return await Schemas.updateMany({ where: { id }, data });
};

const destroy = async (id: string) => {
  return await Schemas.delete({ where: { id } });
};

export { save, findAll, findOne, update, destroy };
