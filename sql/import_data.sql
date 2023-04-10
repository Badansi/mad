
BEGIN; 

INSERT INTO "user" (username, email, password, registration_date) 
VALUES ('soul', 'soul.power@email.com', 'password123', '2022-03-28');

INSERT INTO "user" (username, email, password, registration_date) 
VALUES ('moon', 'moon.sky@email.com', 'password456', '2022-02-20');

-- Insertion dans la table "article"
INSERT INTO "article" (title, content, user_id, publication_date)
VALUES ('Submission', 'L oeuvre d''art ne s''obtient que par contrainte et par la soumission du réalisme à l''idée de beauté préconçue', 1, '2022-03-30');

INSERT INTO "article" (title, content, user_id, publication_date)
VALUES ('Space', 'Le mystère crée l''émerveillement et l''émerveillement est à la base du désir de compréhension de l''homme', 2, '2021-03-31');

COMMIT;

