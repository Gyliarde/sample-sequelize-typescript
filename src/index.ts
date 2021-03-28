import { UserRepository } from "./entity/UserRepository";


  (async () => {
    // await User.sync();  
    // const jane1 = await User.create({
    //   name: 'patient tentant 1 deu boa'
    // });
  
    const userRepository = new UserRepository();
    const users = await userRepository.findAllUsers();

    console.log(users);

    // console.log(jane1.toJSON());    
  })();

