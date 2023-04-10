import bcrypt from 'bcrypt';
import User from './models/user.mjs';

const createUser = async () => {
  // Hashage du mot de passe
  const hashedPassword = await bcrypt.hash('miaou', 10);

  // Création de l'utilisateur
  const user = await User.create({
    username: 'miaou',
    email: 'miaou@example.com',
    password: hashedPassword,
    registration_date: new Date()
  });

  console.log('Created user:', user.username);
};

createUser();
