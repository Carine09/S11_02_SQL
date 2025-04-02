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