USE blog_db;

INSERT INTO articles (user_id, title, text, image_string, createdAt, updatedAt)

VALUES 
(1, "Mind the Grid", "Lorem ipsum", "asdfasd", now(), now()),
(2, "To Sequelize or Not to Sequelize", "Lorem ipsum", "asdfasdf", now(), now());



INSERT INTO subscribers (first_name, last_name, email, createdAt, updatedAt)

VALUES 
("Clark", "Kent", "superman@gmail.com", now(), now()),
("Peter", "Parker", "spiderman@gmail.com", now(), now());



INSERT INTO Users (username, uid, img, createdAt, updatedAt)

VALUES 
("Jake", "ox0beoxSIHUdi24efAGVJSUncBT2", "6789.jpeg", now(), now()),
("Spiderman", "VsLNcvcDWqSxRgEOSlpr6PjAjAt1", "12345.jpeg", now(), now());



