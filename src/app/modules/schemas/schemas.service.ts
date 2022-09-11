const save = () => {
  return 'save';
};

const findAll = () => {
  return 'findAll';
};

const findOne = (id: string | number) => {
  return 'findOne';
};

const update = (id: string | number) => {
  return 'update';
};

const destroy = (id: string | number) => {
  return 'destroy';
};

export { save, findAll, findOne, update, destroy };
