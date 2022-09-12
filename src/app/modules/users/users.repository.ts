import { saveDTO, updateDTO } from './users.dto';
import { Users } from './users.model';

const save = async (data: saveDTO) => {
  return await Users.create({
    data: { ...data, permissions: { connect: data.permissions } },
  });
};

const findAll = async () => {
  const users = await Users.findMany({
    select: {
      id: true,
      avatar: true,
      username: true,
      email: true,
      permissions: { select: { type: true } },
    },
  });
  return users.map((user) => {
    return {
      ...user,
      permissions: user.permissions.map(({ type }) => type),
    };
  });
};

const findOne = async (id: string) => {
  return await Users.findUnique({ where: { id } });
};

const findByPk = async (id: string) => {
  const user = await Users.findUnique({
    where: { id },
    include: { permissions: { select: { type: true } } },
  });
  return {
    ...user,
    permissions: user.permissions.map(({ type }) => type),
  };
};

const findByEmail = async (email: string) => {
  return await Users.findUnique({ where: { email } });
};

const update = async (id: string, data: updateDTO) => {
  return await Users.update({
    where: { id },
    data: { ...data, permissions: { set: data.permissions } },
  });
};

const destroy = async (id: string) => {
  return await Users.delete({ where: { id } });
};

export { save, findAll, findByPk, findByEmail, findOne, update, destroy };
