import { saveDTO, updateDTO } from './schemas.dto';

const save = (dto: saveDTO) => {
  return 'save';
};

const findAll = () => {
  return 'findAll';
};

const findOne = (id: string | number) => {
  return 'findOne';
};

const update = (id: string | number, dto: updateDTO) => {
  return 'update';
};

const destroy = (id: string | number) => {
  return 'destroy';
};

export { save, findAll, findOne, update, destroy };
