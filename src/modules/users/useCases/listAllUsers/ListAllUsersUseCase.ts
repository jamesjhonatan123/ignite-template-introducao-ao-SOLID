import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFounded = this.usersRepository.findById(user_id);
    if (userFounded.admin === true) {
      const all = this.usersRepository.list();
      return all;
    }
    throw new Error("Mensagem do erro");
  }
}

export { ListAllUsersUseCase };
