# GIT

## C'est quoi git ?

Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2.

## Pourquoi git ?

- Modularisation : Petits, gros projets, seul, en groupe, plusieurs fonctionnalités en parallèle, le système de git est très accommodant.

- Annuler vos erreurs : Si besoin, revenir à une version précédente du projet, le sytème de gestion de commit est très éfficace.

- Déconnecté ou sur n'importe quelle machine : pas internet, pas au boulot, en déplacement, partout et tout le temps !

- Eviter les pertes de données : si vous travaillez à plusieurs sur un projet, permet d’identifier/intégrer/supprimer les modifications des autres collaborateurs si besoin.

## Vocabulaire vulgarisé

- COMMIT : Contribution sur projet GIT. C'est un ensemble d’une ou plusieurs modifications, identifié par une série unique de caractères alphanumériques (SHA). Ce commit représentera une "version" du projet.

- BRANCH : Ensemble de commits. C’est un point de référence pour positionner le projet sur le dernier commit d’une série.

- MAIN (ou MASTER avant) : Branche par défaut de GIT. Correspond à l’état du projet en production.

- REPOSITORY : C’est le nom d’un projet GIT. Il peut être local (sur votre machine), ou distant (sur un serveur) et référencé par une remote.

- REMOTE : Référence à un projet GIT distant. La remote par défaut est === "origin".

- MERGE : au départ le terme "merge" est utilisé par l'outil Gitlab, ce n'est donc pas une opération native de Git, il s'agit en fait de vérifier une branche afin de la fusionner (sous-acceptation) avec le tronc commun du projet.

### Configuration

````Bash
$ git config --global user.name "ton nom"
// Définit le nom associé aux opérations de commit

$ git config --global user.email "tonEmail@taBoiteMail.com"
// Définit le mail associé aux opérations de commit

$ git config --global color.ui auto
// Active la colorisation
````

### Création

````Bash
$ git init
// Création du dépot localement

$ git clone
// Télécharge le projet

````

### Changements

````Bash
$ git status
// Liste les nouveaux fichiers et fichiers modifiés

$ git diff
// Montre les modifications pas encore indexées

$ git add
// Ajoute un instantané du fichier

$ git reset
// Enlève le fichier de index mais conserve le contenu

$ git commit -m "nom du commit"
// Enregistre des instantanés de fichiers de façon permanente

$ git branch
// Liste les branches locales

$ git branch nomDeLaBranche
// Créer une branch

$ git checkout nomDeLaBranche
// Basculer vers la branche

$ git merge nomDeLaBranche
// Combine la branche courante et la branche spécifiée

$ git branch -d nomDeLaBranche
// Supprime la branche spécifiée
````

### Fichiers

````Bash
$ git rm nomDuFichier
// Supprime le fichier

$ git rm --cached nomDuFichier
// Supprime le fichier du système de suivi de version mais le préserve localement

$ git mv nomDuFichier nouveauNomDeFichier
// Renomme le fichier et prépare le changement pour un commit
````

### Historique

````Bash
$ git log
// Historique des versions de la branche courante

$ git log --follow nomDuFichier
// Historique des versions du fichier spécifié

$ git show tonCommit
// Montre les modifications de contenu dans le commit spécifié
````

### Reset

````Bash
$ git reset tonCommit
// Annule les commits après "tonCommit" en conservant les changements localement

$ git reset --hard tonCommit
// Supprime historique et modifications aprsè tonCommit
````

### Synchronisation

````Bash
$ git fetch nomDuRepository
// Récupérer historique de dépot

$ git merge nomDuRepository
// Fusionne la branche du dépot dans la branche locale courante

$ git push nomRemote NomBranche
// Envoie les commits de la branche locale vers Gihub

$ git pull
// Récupèrer historique et incorporer modifications.
````

## Practices

- [Git lab](https://lab.github.com/) (classique)

- [Git immersion](http://gitimmersion.com/) (très éfficace !)

## Et après ?

- [La doc](https://docs.github.com/en)

- [Le blog](https://github.blog/) pour se tenir au courant des maj et des features !

#RTFM
