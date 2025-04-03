/* Crée une table songs qui permet d’accueillir des données sur des titres des musiques. La table doit permettre d’avoir les informations ci-dessous :
Le titre
L’artiste
L’album
L’année de sortie
Un identifiant unique
Crée 3 requêtes qui permettent d’insérer des données au sein de la table songs.



create table songs (id INTEGER PRIMARY KEY AUTO_INCREMENT, title TEXT NOT NULL, artist TEXT NOT NULL, album TEXT NOT NULL, parution_date INTEGER);

show tables;
+---------------------+
| Tables_in_librairie |
+---------------------+
| books               |
| songs               |
+---------------------+

describe songs;
+---------------+------+------+-----+---------+----------------+
| Field         | Type | Null | Key | Default | Extra          |
+---------------+------+------+-----+---------+----------------+
| id            | int  | NO   | PRI | NULL    | auto_increment |
| title         | text | NO   |     | NULL    |                |
| artist        | text | NO   |     | NULL    |                |
| album         | text | NO   |     | NULL    |                |
| parution_date | int  | YES  |     | NULL    |                |
+---------------+------+------+-----+---------+----------------+

insert into songs (title, artist, album, parution_date)
    -> values
    -> ("hello", "adele", "other side", 2013),
    -> ("when you're gone", "avril lavigne", "je ne sais pas", 2012),
    -> ("dark horse", "katy perry", "mystère et boule de gomme", 2014);

select * from songs;
+----+------------------+---------------+----------------------------+---------------+
| id | title            | artist        | album                      | parution_date |
+----+------------------+---------------+----------------------------+---------------+
|  1 | hello            | adele         | other side                 |          2013 |
|  2 | when you're gone | avril lavigne | je ne sais pas             |          2012 |
|  3 | dark horse       | katy perry    | mystère et boule de gomme  |          2014 |
+----+------------------+---------------+----------------------------+---------------+
*/