/* Liste toutes les lignes de la table
Liste uniquement les 5 premières lignes de la table
Liste uniquement le nom du livre et sa date de parution. Le résultat doit être ordonné par date de parution : du plus ancien au plus récent
Liste tous les livres dont l’autrice est Simone de Beauvoir
Liste uniquement le nom des livres dont l’autrice est Simone de Beauvoir et dont la date de parution est après 1950
Affiche le nombre de livres listés dans la table 

1. SELECT * from books;
2. SELECT * from books LIMIT 5;
3. SELECT bookname, parution_date from books ORDER BY parution_date ASC;
4. SELECT * from books where author="Simone de Beauvoir";
5. SELECT bookname from books where author="Simone de Beauvoir" AND parution_date > 1950;
6. SELECT COUNT(*) FROM books;
*/

/* Commandes:
INSERT INTO books (bookname, author, parution_date)
VALUES
('Le Deuxième Sexe', 'Simone de Beauvoir', 1949),
('Une chambre à soi', 'Virginia Woolf', 1929),
('Le rire de la Méduse', 'Hélène Cixous', 1975),
('La cloche de détresse', 'Sylvia Plath', 1963),
('Sorcières : La puissance invaincue des femmes', 'Mona Chollet', 2018),
('Les Argonautes', ' Maggie Nelson', 2015),
('Nous sommes tous des féministes', 'Chimamanda Ngozi Adichie', 2014),
('L''Amie prodigieuse', 'Elena Ferrante', 2011),
('Futur-es', 'Lauren Bastide', 2022),
('King Kong Théorie', 'Virginie Despentes', 2006),
('La Femme rompue', 'Simone de Beauvoir', 1967),
('La Vieillesse', 'Simone de Beauvoir', 1970);
*/