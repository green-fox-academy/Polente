
-- CREATE TABLE Playlists (`id` int not null auto_increment primary key, `title` VARCHAR
-- (60), `system` ENUM
-- ('1','0') NOT NULL);



-- CREATE TABLE Tracks
-- (
--     track_id INT NOT NULL
--     AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR
--     (50),
--     playlist_id INT,
--     FOREIGN KEY
--     (playlist_id) REFERENCES Playlists
--     (playlist_id)
--     );



--     INSERT INTO Tracks
--         (name, playlist_id, artist, duration, path)
--     VALUES
--         ('Night Owl', 5, 'Broke For Free', 194, '/Users/ege/Desktop/GreenFox/egedurukan/week10/FoxPlayer/assets/music/Broke_For_Free_-_01_-_Night_Owl.mp3'),
--         ('Purple Drift', 5, 'Organoid', 209, '/Users/ege/Desktop/GreenFox/egedurukan/week10/FoxPlayer/assets/music/Organoid_-_09_-_Purple_Drift.mp3'),
--         ('Enthusiast', 5, 'Tours', 171, '/Users/ege/Desktop/GreenFox/egedurukan/week10/FoxPlayer/assets/music/Tours_-_01_-_Enthusiast.mp3');