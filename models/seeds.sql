USE blog_db;

INSERT INTO articles (user_id, title, text, createdAt, updatedAt)

VALUES 
(1, "Mind the Grid", "Lorem ipsum", now(), now()),
(2, "To Sequelize or Not to Sequelize", "Lorem ipsum", now(), now());



INSERT INTO subscribers (first_name, last_name, email, createdAt, updatedAt)

VALUES 
("Clark", "Kent", "superman@gmail.com", now(), now()),
("Peter", "Parker", "spiderman@gmail.com", now(), now());



INSERT INTO users (username, img, createdAt, updatedAt)

VALUES 
("taing85", "6789", now(), now()),
("codeIt", "12345", now(), now());



