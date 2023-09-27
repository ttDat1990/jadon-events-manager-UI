-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: jadon_eproject
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_ons`
--

DROP TABLE IF EXISTS `add_ons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_ons` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responsible` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `add_ons_event_id_foreign` (`event_id`),
  CONSTRAINT `add_ons_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_ons`
--

LOCK TABLES `add_ons` WRITE;
/*!40000 ALTER TABLE `add_ons` DISABLE KEYS */;
INSERT INTO `add_ons` VALUES (1,'Dept 1','Res 1',9,'2023-09-25 17:00:11','2023-09-25 17:00:11'),(2,'Dept 2','Res 2',9,'2023-09-25 17:00:11','2023-09-25 17:00:11'),(3,'Dept 1','Res 1',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(4,'Our Role','Full Service Wedding Planning',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(5,'Day-of Coordinator and Stylist','Ashley Hager',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(6,'Wedding Venue','The Mansion at Woodward Park',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(7,'Florist','Ever Something',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(8,'Linens and Rentals','Party Perfect',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(9,'Ceremony Band','Save the Date',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(10,'DJ and Lighting','LionsRoad Studios',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(28,'ádfdg','ádádasdtest',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(29,'fsdfgsdfg','fgdfg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(30,'tét','stset',12,'2023-09-27 04:59:09','2023-09-27 04:59:09');
/*!40000 ALTER TABLE `add_ons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Admin','admin@gmail.com','$2y$10$G8Emwlbv1wPyTZnnt7bj9udaX48Ht1qU.HQIkGVUoPhoV5ZdD7YEq'),(2,'Admin','admin@gmail.com','$2y$10$AXzxWRjP9IR4pQHB/xkMIuEjUYVWQOs4wl2yqkPxGC58kdwvbp4D6');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (2,'WEDDING PLANNING','WEDDING','images/1695710655.jpg','2023-09-25 16:23:06','2023-09-26 06:44:15'),(3,'SOCIAL EVENTS','SOCIAL','images/1695710671.jpg','2023-09-25 16:23:26','2023-09-26 06:44:31'),(4,'NON-PROFIT EVENTS','NON-PROFIT','images/1695710678.jpg','2023-09-25 16:23:45','2023-09-26 06:44:38'),(5,'CORPORATE EVENTS','CORPORATE','images/1695710684.jpg','2023-09-25 16:24:01','2023-09-26 06:44:44');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `events_category_id_foreign` (`category_id`),
  KEY `events_user_id_foreign` (`user_id`),
  CONSTRAINT `events_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `events_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (9,'Event 1','2023-09-07','2023-09-28',2,3,'2023-09-25 17:00:11','2023-09-25 17:00:11'),(10,'Event 2','2023-09-06','2023-09-23',3,4,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(11,'Crocker/Sheffer Wedding 2021','2023-09-05','2023-09-12',2,3,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(12,'test 12314','2023-09-05','2023-09-24',5,8,'2023-09-27 02:21:00','2023-09-27 03:40:01'),(13,'sdafsdfsf','2023-09-23','2023-09-28',4,8,'2023-09-27 03:02:19','2023-09-27 03:02:19');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_event_id_foreign` (`event_id`),
  CONSTRAINT `images_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (10,'Event 1_image0','http://127.0.0.1:8000/images/1695661211_6511bc9b9d29b.jpg',9,'2023-09-25 17:00:11','2023-09-25 17:00:11'),(11,'Event 1_image1','http://127.0.0.1:8000/images/1695661211_6511bc9b9d7f9.jpg',9,'2023-09-25 17:00:11','2023-09-25 17:00:11'),(12,'Event 1_image2','http://127.0.0.1:8000/images/1695661211_6511bc9b9e671.jpg',9,'2023-09-25 17:00:11','2023-09-25 17:00:11'),(13,'Event 2_image0','http://127.0.0.1:8000/images/1695661387_6511bd4b3c05b.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(14,'Event 2_image1','http://127.0.0.1:8000/images/1695661387_6511bd4b3c64e.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(15,'Event 2_image2','http://127.0.0.1:8000/images/1695661387_6511bd4b3c7c3.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(16,'Event 2_image3','http://127.0.0.1:8000/images/1695661387_6511bd4b3c8dc.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(17,'Event 2_image4','http://127.0.0.1:8000/images/1695661387_6511bd4b3c9d9.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(18,'Event 2_image5','http://127.0.0.1:8000/images/1695661387_6511bd4b3cb4a.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(19,'Event 2_image6','http://127.0.0.1:8000/images/1695661387_6511bd4b3cc2c.jpg',10,'2023-09-25 17:03:07','2023-09-25 17:03:07'),(20,'Crocker/Sheffer Wedding 2021_image0','http://127.0.0.1:8000/images/1695746283_651308ebd1ff3.jpeg',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(21,'Crocker/Sheffer Wedding 2021_image1','http://127.0.0.1:8000/images/1695746283_651308ebd2545.jpeg',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(22,'Crocker/Sheffer Wedding 2021_image2','http://127.0.0.1:8000/images/1695746283_651308ebd2643.jpeg',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(23,'Crocker/Sheffer Wedding 2021_image3','http://127.0.0.1:8000/images/1695746283_651308ebd273c.jpeg',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(24,'Crocker/Sheffer Wedding 2021_image4','http://127.0.0.1:8000/images/1695746283_651308ebd2835.jpeg',11,'2023-09-26 16:38:03','2023-09-26 16:38:03'),(28,'sdafsdfsf_image0','http://127.0.0.1:8000/images/1695783739_65139b3b76d6b.png',13,'2023-09-27 03:02:19','2023-09-27 03:02:19'),(29,'sdafsdfsf_image1','http://127.0.0.1:8000/images/1695783739_65139b3b772eb.png',13,'2023-09-27 03:02:19','2023-09-27 03:02:19'),(30,'sdafsdfsf_image2','http://127.0.0.1:8000/images/1695783739_65139b3b773dc.png',13,'2023-09-27 03:02:19','2023-09-27 03:02:19'),(42,'test 12314_image0','http://127.0.0.1:8000/images/1695790749_6513b69d86399.jpeg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(43,'test 12314_image1','http://127.0.0.1:8000/images/1695790749_6513b69d868ea.jpeg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(44,'test 12314_image2','http://127.0.0.1:8000/images/1695790749_6513b69d86a0f.jpeg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(45,'test 12314_image3','http://127.0.0.1:8000/images/1695790749_6513b69d86b4e.jpeg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(46,'test 12314_image4','http://127.0.0.1:8000/images/1695790749_6513b69d86c53.jpg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(47,'test 12314_image5','http://127.0.0.1:8000/images/1695790749_6513b69d86d59.jpeg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(48,'test 12314_image6','http://127.0.0.1:8000/images/1695790749_6513b69d86e4a.jpeg',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(49,'test 12314_image7','http://127.0.0.1:8000/images/1695790749_6513b69d86f42.png',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(50,'test 12314_image8','http://127.0.0.1:8000/images/1695790749_6513b69d87067.png',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(51,'test 12314_image9','http://127.0.0.1:8000/images/1695790749_6513b69d87171.png',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(52,'test 12314_image10','http://127.0.0.1:8000/images/1695790749_6513b69d8726b.png',12,'2023-09-27 04:59:09','2023-09-27 04:59:09'),(53,'test 12314_image11','http://127.0.0.1:8000/images/1695790749_6513b69d8761f.png',12,'2023-09-27 04:59:09','2023-09-27 04:59:09');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2023_09_23_152941_create_categories_table',1),(2,'2014_10_12_000000_create_users_table',2),(3,'2014_10_12_100000_create_password_resets_table',2),(4,'2019_08_19_000000_create_failed_jobs_table',2),(5,'2019_12_14_000001_create_personal_access_tokens_table',2),(6,'2023_09_23_154514_create_add_on_table',3),(7,'2023_09_23_144203_create_press_review_table',4),(8,'2023_09_23_144223_create_slides_table',5),(9,'2023_09_23_154600_create_images_table',6),(10,'2023_09_25_221536_create_slides_table',7),(11,'2023_09_25_222841_create_categories_table',8),(13,'2023_09_23_143147_create_events_table',9),(14,'2023_09_25_224833_create_images_table',10),(16,'2023_09_25_225133_create_add_ons_table',11),(17,'2023_09_26_003854_create_press_reviews_table',12);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (5,'App\\Models\\User',3,'auth_token','e3c93d80f4d76e7bf771368b53af7d759db353b4490cd0c05a70887ed55e2d38','[\"*\"]',NULL,NULL,'2023-09-23 14:54:37','2023-09-23 14:54:37'),(18,'App\\Models\\User',5,'auth_token','591f8767f0dc544568cf134f5629311f7f4617c9aec3eb193aa5a5a16eab4f06','[\"*\"]',NULL,NULL,'2023-09-24 09:19:08','2023-09-24 09:19:08'),(19,'App\\Models\\User',6,'auth_token','718d73ca1b2d45ca99f0077030f34ce8df4f3aac9a33779f8c477f607c71b13e','[\"*\"]',NULL,NULL,'2023-09-24 09:22:07','2023-09-24 09:22:07'),(30,'App\\Models\\User',7,'auth_token','c74a0460dc91ea545994a914a85ed69ae4c0c90278d157bc39d8816a8840f86c','[\"*\"]',NULL,NULL,'2023-09-25 17:04:46','2023-09-25 17:04:46'),(34,'App\\Models\\Admin',1,'admin_access_token','6edcc5f09d58b5a1437515bd194bd007b13115345da2fa453b65f284d44c6988','[\"*\"]',NULL,NULL,'2023-09-25 17:46:35','2023-09-25 17:46:35'),(35,'App\\Models\\Admin',1,'admin_access_token','e4132c477233d9e66cfaaac40c99bda362a23d4ec3430ab77dd288a0c46d0dc9','[\"*\"]',NULL,NULL,'2023-09-26 01:45:08','2023-09-26 01:45:08'),(36,'App\\Models\\Admin',1,'admin_access_token','2bac59a28e9a27fa0e6f112dac04ebbf8e985c3e25743b667370eab90d7f7f98','[\"*\"]',NULL,NULL,'2023-09-26 03:03:45','2023-09-26 03:03:45'),(37,'App\\Models\\Admin',1,'admin_access_token','a021af923ae747b188bd9fc88a1a343ccb5d9b3a3d71728194da9702e7941642','[\"*\"]',NULL,NULL,'2023-09-26 08:55:57','2023-09-26 08:55:57'),(38,'App\\Models\\Admin',1,'admin_access_token','1b30b28a1243160e46fd3e5387437730f285674170d4522c9394497149982d23','[\"*\"]',NULL,NULL,'2023-09-26 08:59:51','2023-09-26 08:59:51'),(39,'App\\Models\\Admin',1,'admin_access_token','55b99fb8b4984b90f50d66eb6ead3b9a49517ff50968243e560b376e3a73c6c6','[\"*\"]',NULL,NULL,'2023-09-26 10:16:43','2023-09-26 10:16:43'),(40,'App\\Models\\Admin',1,'admin_access_token','ec872d96c4bb374a8efcae228ec7daa725a647449038f42003a931108fd65479','[\"*\"]',NULL,NULL,'2023-09-26 10:17:47','2023-09-26 10:17:47'),(41,'App\\Models\\Admin',1,'admin_access_token','c23f5b60d86873d5f71621062532b3bf8cdcb28fdb9de0f81ee804341ae2dc79','[\"*\"]',NULL,NULL,'2023-09-26 10:33:32','2023-09-26 10:33:32'),(42,'App\\Models\\Admin',1,'admin_access_token','3303904e7b541ec087d632337afd2f4db718997a33d03025db33db9806063b9d','[\"*\"]',NULL,NULL,'2023-09-26 13:09:36','2023-09-26 13:09:36'),(43,'App\\Models\\User',8,'auth_token','d11f878a80400612ad3e99eb86d1c37a1d4ab88eb8e10ac41cd87ca488d8d505','[\"*\"]',NULL,NULL,'2023-09-26 14:18:51','2023-09-26 14:18:51'),(44,'App\\Models\\User',9,'auth_token','3b923b7bed31712125f11b74866cf91e8fe251c70309242f6845420d76e3d2c3','[\"*\"]',NULL,NULL,'2023-09-26 14:21:08','2023-09-26 14:21:08'),(45,'App\\Models\\User',10,'auth_token','dce7ea0a2075da0a25425431799b88190d11f0a59e297e78fbed0658c987aa72','[\"*\"]',NULL,NULL,'2023-09-26 14:21:30','2023-09-26 14:21:30'),(46,'App\\Models\\User',11,'auth_token','c694c7a56b8e83e827fc3c81d072ff8072f69da967cd50dac2397af7f599d466','[\"*\"]',NULL,NULL,'2023-09-26 14:36:34','2023-09-26 14:36:34'),(47,'App\\Models\\User',12,'auth_token','3091f772c45b9248ad4417800815872a32063f8efb95b03cc8d9deb3a0e1e067','[\"*\"]',NULL,NULL,'2023-09-26 14:37:05','2023-09-26 14:37:05'),(48,'App\\Models\\User',13,'auth_token','8ebcd2f078745b8968a44ac9befe49b63c368591f27786430af56a0070a08f93','[\"*\"]',NULL,NULL,'2023-09-26 14:37:40','2023-09-26 14:37:40'),(49,'App\\Models\\User',14,'auth_token','4b6a166be41da035a4007f5732128922b4d2e5a57d5b46ade4202a6c7a6a9e27','[\"*\"]',NULL,NULL,'2023-09-26 14:38:30','2023-09-26 14:38:30'),(50,'App\\Models\\User',15,'auth_token','1920c51ec608f74d9be52c63b26830d62b0305a5731b93cd901a27b7ecb59e41','[\"*\"]',NULL,NULL,'2023-09-26 14:42:29','2023-09-26 14:42:29'),(51,'App\\Models\\Admin',1,'admin_access_token','714252b923640af1c8fe92d098e1b84318ad8ad0a24c79d7cac7bd23b13e6c0c','[\"*\"]',NULL,NULL,'2023-09-26 16:39:24','2023-09-26 16:39:24'),(52,'App\\Models\\Admin',1,'admin_access_token','06c25fcde702d03e5e5171d4f945831e50009499ccbc981fb904f4f12739deab','[\"*\"]',NULL,NULL,'2023-09-26 17:11:14','2023-09-26 17:11:14'),(53,'App\\Models\\Admin',1,'admin_access_token','af069f0d550c284b6ab19cd00220613537870b830af066aa8b81907f29e0af78','[\"*\"]',NULL,NULL,'2023-09-26 17:14:29','2023-09-26 17:14:29'),(54,'App\\Models\\Admin',1,'admin_access_token','64d0fc7bc44f496f8276fd908e9ef6101e267602cfb4e4b6b1bb5f7fdd661111','[\"*\"]',NULL,NULL,'2023-09-26 17:15:14','2023-09-26 17:15:14'),(55,'App\\Models\\Admin',1,'admin_access_token','580acf579f986bc6a9edd00fb75be446e3091f9081fa1553c9d3774e4dd8f3e1','[\"*\"]',NULL,NULL,'2023-09-26 17:17:42','2023-09-26 17:17:42'),(56,'App\\Models\\Admin',1,'admin_access_token','7620169d030a35e48d8131814978c2d7c2832e3bda7157c6c0ec48ca3feb324a','[\"*\"]',NULL,NULL,'2023-09-26 17:24:38','2023-09-26 17:24:38'),(57,'App\\Models\\Admin',1,'admin_access_token','0016196297b1ee47202c10fdfe078a4841a46cf72beb76d4c7d0d6362ad29a93','[\"*\"]',NULL,NULL,'2023-09-27 01:00:35','2023-09-27 01:00:35'),(58,'App\\Models\\Admin',1,'admin_access_token','8d98ae69193e1bc79ef89d9403707a759a51f14b72502eb8e0e9ef33f91eb0a7','[\"*\"]',NULL,NULL,'2023-09-27 01:00:36','2023-09-27 01:00:36'),(59,'App\\Models\\Admin',1,'admin_access_token','dcdef50bd34883d962a5e740b3a5fe13e84739598c879780cdfa9d73474fa1e8','[\"*\"]',NULL,NULL,'2023-09-27 01:02:56','2023-09-27 01:02:56'),(60,'App\\Models\\Admin',1,'admin_access_token','096c689e5b572e689817380a75632be2fb99de100c2f95781408413323868b93','[\"*\"]',NULL,NULL,'2023-09-27 01:03:44','2023-09-27 01:03:44'),(61,'App\\Models\\Admin',1,'admin_access_token','31d77f76c807c3b052d7e9d186c2a63a6ad013cf8c4be3620045e894a5ece710','[\"*\"]',NULL,NULL,'2023-09-27 01:04:21','2023-09-27 01:04:21'),(62,'App\\Models\\Admin',1,'admin_access_token','965ee19fbf212bc5214552ca4d4b91e98679cf5ca7d53ec9b516d5f351dde0f9','[\"*\"]',NULL,NULL,'2023-09-27 01:13:02','2023-09-27 01:13:02'),(63,'App\\Models\\Admin',1,'admin_access_token','a0e7a44e5d26a4b24a3186b6818ce605718ed551d699eb64c641eaa8a78f21f4','[\"*\"]',NULL,NULL,'2023-09-27 01:51:17','2023-09-27 01:51:17'),(64,'App\\Models\\Admin',1,'admin_access_token','3f716067fa68ebae2fe63e23fd543e709e2c9904fad6dc307e59877fb6f94292','[\"*\"]',NULL,NULL,'2023-09-27 01:57:32','2023-09-27 01:57:32'),(65,'App\\Models\\Admin',1,'admin_access_token','a61cc2eed1f01add15134d834b81ac120d546b1cb1009624ef78ce83b347a851','[\"*\"]',NULL,NULL,'2023-09-27 02:00:55','2023-09-27 02:00:55'),(66,'App\\Models\\Admin',1,'admin_access_token','85ae2631372826ee185c2fae7aea234d46f9d499ea631a972de533a36a232cb8','[\"*\"]',NULL,NULL,'2023-09-27 02:03:14','2023-09-27 02:03:14'),(67,'App\\Models\\Admin',1,'admin_access_token','d0874f8a6376dfff59a053609beb721ec37354834e01ef99920992a28247d877','[\"*\"]',NULL,NULL,'2023-09-27 02:27:39','2023-09-27 02:27:39'),(68,'App\\Models\\Admin',1,'admin_access_token','d4b2262d3a8d941cba21fb56dc74f8714c9a72ec9a23a23b77aa0b369983e0d5','[\"*\"]',NULL,NULL,'2023-09-27 02:30:22','2023-09-27 02:30:22'),(69,'App\\Models\\Admin',1,'admin_access_token','ac89357131fa2f218f7237b64d7dc263b86ad2f38fafda53c124cdc0c484d742','[\"*\"]',NULL,NULL,'2023-09-27 02:31:57','2023-09-27 02:31:57'),(70,'App\\Models\\Admin',1,'admin_access_token','77761cf76e5acbe6f360f1a484681853481399a949103efe88b81e119eb43479','[\"*\"]',NULL,NULL,'2023-09-27 02:43:12','2023-09-27 02:43:12');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `press_reviews`
--

DROP TABLE IF EXISTS `press_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `press_reviews` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `press_reviews`
--

LOCK TABLES `press_reviews` WRITE;
/*!40000 ALTER TABLE `press_reviews` DISABLE KEYS */;
INSERT INTO `press_reviews` VALUES (4,'Sustainable Tulsa gets set to ‘Recharge’ with fundraiser at Cain’s Ballroom','<p>“Recharge” is designed to help guests explore the “Three Ps of Sustainability,” namely “people, profit and planet,” through an immersive experience of sight, sound, touch and taste.</p><p>&nbsp;</p><p><a href=\"https://www.tulsaworld.com/scene/artsandentertainment/sustainable-tulsa-gets-set-to-recharge-with-fundraiser-at-cain/article_c5fbc9da-dc65-5dd5-b9ab-5f8e010722d2.html\">Full Article</a></p>','JADON','images/1695744037.png','2023-09-26 12:01:13','2023-09-26 16:00:37'),(5,'Sustainable Tulsa Presents “Recharge”','<p>SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM)</p><p>&nbsp;</p><p>CAIN’S BALLROOM</p><p>&nbsp;</p><p>423 N. MAIN ST.</p><p>&nbsp;</p><p>918-808-6576</p><p>&nbsp;</p><p>WWW.SUSTAINABLETULSAINC.ORG</p><p>&nbsp;</p><p>Watch Full Video Here</p>','JADON','images/1695730026.png','2023-09-26 12:07:06','2023-09-26 12:07:06'),(6,'WH Tulsa: Are You Smarter than a KIPPster? 2018','<p>GET IN THE GAME!</p><p><br>Be a part of our LIVE studio audience, as Tulsa’s top community leaders compete against KIPP Tulsa students in this LIVE challenge!</p><p>&nbsp;</p><p><a href=\"https://whtulsa.com/event/are-you-smarter-than-a-kippster-2018/\">Full Article</a></p>','JADON','images/1695730089.png','2023-09-26 12:08:09','2023-09-26 12:08:09'),(7,'1,000 walk to raise funds, awareness to find a cure for multiple sclerosis','<p>Guthrie Green was dappled with orange early Saturday as at least 1,000 individuals dotted the lawn for an annual walk to raise funds and awareness for multiple sclerosis research.</p><p>&nbsp;</p><p><a href=\"http://www.tulsaworld.com/news/local/walk-to-raise-funds-awareness-to-find-a-cure-for/article_988abf5d-adf1-58aa-98e6-a4b6dc054be0.html?mode=story\">Full Article</a></p>','Admin 1','images/1695734392.png','2023-09-26 13:19:52','2023-09-26 13:19:52'),(8,'Inner Circle Vodka Bar to host all-ages Potter Fest on Oct. 29 By Take Heart Events October 17, 2017 Press','<p>Grab your wands, it’s time for the annual Potter Fest at Inner Circle Vodka Bar, 410 N. Main St.</p><p>&nbsp;</p><p><a href=\"http://www.tulsaworld.com/scene/inner-circle-vodka-bar-to-host-all-ages-potter-fest/article_0eef79cf-914f-5327-9f7b-e519a38063c6.html\">Full Article</a></p>','Admin 3','images/1695734532.png','2023-09-26 13:22:12','2023-09-26 13:22:12'),(9,'OK2Grow Redbud Celebration & Lip Sync Event','<p>TUESDAY, APRIL 10TH, 5:30PM</p><p>THE BOND EVENT CENTER</p><p>&nbsp;</p><p><a href=\"https://ktul.com/good-day-tulsa/segments/ok2grow-redbud-celebration-lip-sync-event\">Watch Full Video Here</a></p>','Admin 2','images/1695745765.png','2023-09-26 16:29:25','2023-09-26 16:29:25'),(10,'TYPros Foundation Announced at Boomtown Awards','<p>In an effort to expand the organization’s reach, respond to community needs, and offer diverse and consistent opportunities for its members to volunteer, Tulsa’s Young Professionals announced the creation of the&nbsp;TYPros Foundation at the organization’s annual Boomtown Awards, held Oct. 30 at Legends Dance Hall in downtown Tulsa.</p><p>&nbsp;</p><p><a href=\"http://gtrnews.com/greater-tulsa-reporter/13217/typros-foundation-announced-at-boomtown-awards\">Full Article</a></p>','Admin 1','images/1695745819.jpg','2023-09-26 16:30:19','2023-09-26 16:30:19'),(11,'Tulsa Habitat for Humanity holds Opening Doors art project','<p>Tulsa Habitat for Humanity kicked off its Opening Doors art project Wednesday. Six local artists teamed up with the organization to create uniquely-designed doors in an effort to open even more doors to help build more houses, communities and hope throughout the city.</p><p>&nbsp;</p><p><a href=\"http://www.kjrh.com/news/local-news/tulsa-habitat-for-humanity-holds-opening-doors-art-project\">Full Article</a></p>','Admin 2','images/1695745905.jpeg','2023-09-26 16:31:45','2023-09-26 16:31:45'),(12,'Don’t Hate the 918 Project','<p>Welcome to the Don’t Hate the 918 project! I (Steve Cluck) am photographing people who live in the 918 area code, wearing Don’t Hate the 918 T-shirts. The goal is to ultimately photograph 918 different people!</p><p>&nbsp;</p><p><a href=\"http://donthatethe918.blogspot.com/2014/09/dont-hate-918-project-057-of-918.html\">Full Article</a></p>','Admin 3','images/1695745955.jpg','2023-09-26 16:32:35','2023-09-26 16:32:35');
/*!40000 ALTER TABLE `press_reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slides`
--

DROP TABLE IF EXISTS `slides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slides` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slides`
--

LOCK TABLES `slides` WRITE;
/*!40000 ALTER TABLE `slides` DISABLE KEYS */;
INSERT INTO `slides` VALUES (4,'Weddings','Need help planning your wedding? We\'ve got you covered! With our event planning and unique event design expertise, your wedding will look amazing!','images/1695710517.jpg','2023-09-25 16:18:57','2023-09-26 06:41:57'),(5,'Social Events','From Seasonal Celebrations, Reunions, Parties, and more - Don\'t fear, Take Heart!','images/1695663042.jpg','2023-09-25 17:30:42','2023-09-25 17:30:42'),(6,'Corporate Events','Holiday Parties, Product Launches, Conferences, Team Building Workshops, and more! We can help with that!','images/1695663142.jpg','2023-09-25 17:32:22','2023-09-25 17:32:22'),(7,'Non-Profit Events','Have a non-profit walk or run to plan? What about a gala? Any non-profit event from award dinners to auctions and unique fundraisers, we\'ll take care of it!','images/1695663186.jpg','2023-09-25 17:33:06','2023-09-25 17:33:06');
/*!40000 ALTER TABLE `slides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'User 1','user1@gmail.com',NULL,'$2y$10$IAkWtQJZd7hzo.11lG5Xgu1trQmbzAOE..GoSp7CbctHRguZ1uyhG',NULL,'2023-09-23 14:53:06','2023-09-26 15:43:37'),(4,'User 2','user2@gmail.com',NULL,'$2y$10$dzfNGefWyUujQgJLQ12tueyZW9KUfm1NFeTv4qjW4pFtZfEu4Qzby',NULL,'2023-09-23 14:53:06','2023-09-23 14:53:06'),(7,'User 3','user345678@gmail.com',NULL,'$2y$10$RgsRbWQVjeZFEjp2lXbPw.5zNq4BJde0pdMi5S7eVy8TLuSEn/EHm',NULL,'2023-09-25 17:04:46','2023-09-25 17:04:46'),(8,'user 4','user4567890@gmail.com',NULL,'$2y$10$rtn9FJkH8.Qt6CUe1UWoTus9orpUIKZp54AreRALVfOPMsGDgHP.6',NULL,'2023-09-26 14:18:51','2023-09-26 14:18:51'),(9,'Lionel Messi','messi12345@footbal.com',NULL,'$2y$10$ExxwwgZyqwLyJ5bdoxmlqOHBqPmngWb8ajGCWZSUV2xdj4acbJcka',NULL,'2023-09-26 14:21:08','2023-09-26 14:21:08'),(10,'Ronaldo','ronaldo12345@footbal.com',NULL,'$2y$10$VlPxhrs16jwQ39lyT40fMODa826K52wWiYSnzjfkWYzcmlavKBfui',NULL,'2023-09-26 14:21:30','2023-09-26 14:21:30'),(11,'RogerFederer','fedex123123@tennis.com',NULL,'$2y$10$Q5N1wxM6auAn9/edzhJ33uElf1zfN4r/Lcl4gTwrejkEFWf7tkLV6',NULL,'2023-09-26 14:36:34','2023-09-26 14:36:34'),(12,'NovakDjokovic','djoker25gs@tennis.com',NULL,'$2y$10$XHkG5YbMGP8C4yw10/3f0ORi9hfGTOvubPmzMXTM9nYdnna5Rk5fK',NULL,'2023-09-26 14:37:05','2023-09-26 14:37:05'),(13,'RafaelNadal','rafa123321@tennis.com',NULL,'$2y$10$v0n4zf9mW9KG0x9wwT/BNOng2udmRqwyCAXVA5yLCi0TBdI49OWDm',NULL,'2023-09-26 14:37:40','2023-09-26 14:37:40'),(14,'ZlatanIbrahimovic','zlatan00000@footbal.com',NULL,'$2y$10$LIumM.iTm.1OWHHzStF8teV.I8oSUihraILAlwqwAmXnrfG1F7idy',NULL,'2023-09-26 14:38:30','2023-09-26 14:38:30'),(15,'TaylorSwift','countryprincess@singer.com',NULL,'$2y$10$vXVSeen8RVU3DeAsDXLifug4FOwLob0XtdGRkMQymZigPdEwYY0Vq',NULL,'2023-09-26 14:42:29','2023-09-26 14:42:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-27 13:24:34
