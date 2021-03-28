import { User } from "./entity/User";

  (async () => {
    await User.sync();  

    const jane1 = await User.create({
      name: 'patient tentant 1 deu boa'
    });
  
    console.log(jane1.toJSON());    
  })();

