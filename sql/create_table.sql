BEGIN; -- Je lance une suite d'instructions

DROP TABLE IF EXISTS "user", "article";

CREATE TABLE IF NOT EXISTS "user" (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  registration_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS "article" (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INT NOT NULL,
  publication_date DATE NOT NULL,
  CONSTRAINT "article_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id")
);

COMMIT; -- J'applique les modifications de ma suite d'instructions

