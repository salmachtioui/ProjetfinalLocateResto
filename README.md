# Introduction
Cette solution de localisation de restaurants intègre de manière experte des technologies de pointe, en utilisant Spring Boot pour le backend, Angular pour le frontend, et Docker pour la gestion des conteneurs. L'ajout de Spring Security renforce la protection des données sensibles. L'application offre une gestion complète des villes, zones, restaurants et spécialités, procurant ainsi une expérience utilisateur sécurisée et conviviale. Dans cette exploration approfondie, nous mettrons en lumière la synergie entre ces technologies, en mettant en avant l'intégration transparente de Docker .
# Conception'Base de données) :
![image](https://github.com/salmachtioui/ProjetfinalLocateResto/assets/147477621/ba2a17e8-f3bf-4a91-94c4-3dbb620c225c)

# Backend avec Spring Boot
![image](https://github.com/salmachtioui/ProjetfinalLocateResto/assets/147477621/05140fd7-836f-408c-a4e4-e1dbfa42f6af)

La conception du backend de notre application de localisation de restaurants repose sur l'utilisation de Spring Boot, apportant des avantages significatifs tels que :

Simplicité de développement :
Spring Boot simplifie le processus de développement d'applications Java en fournissant des conventions par défaut et des configurations auto-ajustées. Les annotations telles que @RestController, @Service, et @Repository facilitent la création de composants clés, permettant aux développeurs de se concentrer sur la logique métier plutôt que sur la configuration laborieuse.

Création rapide de points d'accès RESTful :
Les contrôleurs Spring Boot simplifient la création de points d'accès RESTful. En annotant les contrôleurs avec @RestController et en utilisant des annotations telles que @GetMapping, @PostMapping, etc., la création d'API REST pour la manipulation des données des villes, photos, restaurants, séries, spécialités, utilisateurs et zones devient aisée, favorisant ainsi une intégration fluide avec le frontend React.

Gestion des dépendances :
Grâce à l'outil de gestion de dépendances intégré, Apache Maven ou Gradle, Spring Boot simplifie la gestion des bibliothèques et des dépendances. Cela garantit l'utilisation de versions compatibles des différentes bibliothèques, évitant ainsi les conflits potentiels.

# Frontend avec Angular
![image](https://github.com/salmachtioui/ProjetfinalLocateResto/assets/147477621/a04d7f58-a62c-416e-85f9-92c9a5668c84)

L'utilisation de Angular pour le frontend de notre application de localisation de restaurants offre plusieurs avantages, notamment :

Interfaces Utilisateur Réactives :
 Angular excelle dans la gestion efficace du rendu et propose une approche déclarative. Cela se traduit par la création d'interfaces utilisateur réactives, améliorant les performances de l'application en mettant à jour uniquement les parties nécessaires de la page.

Composants Réutilisables :
La philosophie de  Angular met l'accent sur la création de composants réutilisables. Nous avons développé des composants indépendants pour chaque entité, favorisant ainsi la maintenabilité du code, simplifiant le débogage et offrant une approche modulaire pour construire l'interface utilisateur.

Interaction fluide avec le Backend :
Pour interagir avec le backend, Angular utilise des requêtes HTTP, telles que l'API Fetch ou des bibliothèques tierces. Cette approche permet une intégration transparente des données provenant du backend dans les composants Angular, assurant une communication fluide entre le frontend et le backend.

# Docker 
L'intégration de Docker dans le projet de localisation de restaurants utilisant Angular pour le frontend présente plusieurs avantages. Docker permet d'emballer l'application Angular, simplifiant ainsi le déploiement sur différentes plates-formes. Il isole les dépendances, évitant les conflits, et offre une gestion efficace des ressources. La configuration de l'application est simplifiée grâce aux fichiers Dockerfile, favorisant la reproductibilité. Docker facilite également la gestion de multiples environnements, rendant le déploiement plus flexible. En résumé, Docker améliore la portabilité, la gestion des dépendances, et simplifie le cycle de vie du développement et du déploiement de l'application Angular de localisation de restaurants.
![image](https://github.com/salmachtioui/ProjetfinalLocateResto/assets/147477621/8447e790-8382-4115-891f-7cd5043445d4)
# Docker Hub
Docker Hub est un registre centralisé d'images Docker géré par Docker, Inc. Il offre un emplacement pour stocker, partager et collaborer sur des images Docker. Les développeurs peuvent y téléverser leurs images, favorisant la réutilisation et la distribution rapide d'applications. Docker Hub propose des repositories publics et privés, permet l'intégration avec Docker CLI, et offre des fonctionnalités telles que les builds automatisés, la gestion des versions, la certification d'images, et l'intégration avec des services de CI/CD. En résumé, Docker Hub joue un rôle clé dans la simplification du développement, du déploiement et de la collaboration dans l'écosystème des conteneurs Docker.
![image](https://github.com/salmachtioui/ProjetfinalLocateResto/assets/147477621/0e6d3b35-fd81-4511-8797-ba2848976077)
Pour pousser un projet Docker vers Docker Hub, suivez ces étapes :

- Création de l'Image Docker :
Utilisez docker build pour créer une image Docker à partir du fichier Dockerfile de votre projet.
docker build -t projet_frontend-backend:tag 
- Connexion à Docker Hub :
Authentifiez-vous sur Docker Hub avec docker login en fournissant votre nom d'utilisateur et votre mot de passe.
docker login
- Étiquetage de l'Image :
Taguez votre image avec votre nom d'utilisateur Docker Hub et le nom de l'image.
docker tag projet_frontend-backend:tag salmachtioui999688/projet_frontend-backend:tag
- Poussée de l'Image sur Docker Hub :
Utilisez docker push pour téléverser l'image vers Docker Hub.
docker push salmachtioui999688/projet_frontend-backend:tag
- Partage du Projet :
Communiquez le nom d'utilisateur Docker Hub, le nom de l'image et le tag aux personnes nécessitant l'accès à votre image.
- Pour le Backend:
[docker push salmachtioui999688/projet_frontend-backend:tagname](https://hub.docker.com/repository/docker/salmachtioui999688/projet_frontend-backend/general)
- Pour le Frontend :
[docker push salmachtioui999688/projet_frontend-frontend:tagname](https://hub.docker.com/repository/docker/salmachtioui999688/projet_frontend-frontend/general)

# Vedio démonstration

https://github.com/salmachtioui/ProjetfinalLocateResto/assets/147477621/f281ad4e-86a8-42d5-ae0c-36d6f897978b
# Technologies Utilisées:
Spring Boot

Angular

Docker
