# 🚀 L4N13BL14 App

Application full-stack de gestion de produits développée avec :

* 🅰️ Angular 19 (Frontend)
* ☕ Spring Boot (Backend)
* 🗄️ H2 Database (in-memory)
* 🎨 Bootstrap + Bootstrap Icons
* 🔗 REST API + HttpClient

---

## 📌 Architecture du projet

```
L4N13BL14-App
│
├── frontend/   (Angular 19)
│   ├── src/app
│   ├── services
│   ├── components (home, products)
│
├── backend/    (Spring Boot)
│   ├── entities
│   ├── repository
│   ├── web (REST API)
```

---

## ⚙️ Features

### Frontend (Angular)

* 📋 Affichage des produits sous forme de tableau
* ➕ Sélection/désélection des produits
* 🗑️ Suppression avec confirmation (modal)
* 🔄 Communication avec backend via HTTP
* 🎯 Routing Angular (Home / Products)
* 🎨 UI moderne avec Bootstrap

### Backend (Spring Boot)

* REST API complète :

  * `GET /products` → liste produits
  * `GET /products/{id}` → produit par ID
  * `DELETE /products/{id}` → supprimer produit
* 🗄️ Base de données H2 en mémoire
* 🌱 Initialisation automatique des données (CommandLineRunner)
* 🔓 CORS activé pour Angular

---

## 🚀 Lancer le projet

### 1️⃣ Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

📍 Backend URL:

```
http://localhost:8083
```

📍 H2 Console:

```
http://localhost:8083/h2-console
```

---

### 2️⃣ Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

📍 Frontend URL:

```
http://localhost:4200
```

---

## 🔗 API Configuration

```ts
getAllProducts(): Observable<any> {
  return this.http.get("http://localhost:8083/products");
}
```

---

## 🧠 Concepts utilisés

### Angular

* Standalone Components
* Routing
* Data Binding
* Event Binding
* Services + Dependency Injection
* Observables (RxJS)
* HttpClient
* FormsModule

### Spring Boot

* REST API
* Spring Data JPA
* Dependency Injection
* H2 Database
* CommandLineRunner

---

## 🔐 CORS Policy

```java
@CrossOrigin("*")
```

---

## 📦 Technologies utilisées

### Frontend

* Angular 19
* Bootstrap 5
* Bootstrap Icons
* RxJS

### Backend

* Spring Boot
* Spring Data JPA
* H2 Database
* Maven

---

## 👨‍💻 Author

* Yassine Bahadi
* Full Stack Developer (Angular / Spring Boot)

---

## ⭐ Objectif

Projet
