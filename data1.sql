-- DROP DATABASE IF EXISTS jadon_eproject;
-- CREATE DATABASE jadon_eproject;
USE jadon_eproject;

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
-- Table structure for table `add_on`
--

DROP TABLE IF EXISTS `add_on`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_on` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responsible` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `add_on_event_id_foreign` (`event_id`),
  CONSTRAINT `add_on_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_on`
--

LOCK TABLES `add_on` WRITE;
/*!40000 ALTER TABLE `add_on` DISABLE KEYS */;
INSERT INTO `add_on` VALUES (1,'D1','mr A',13,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(2,'D2','mr B',13,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(3,'Dept 1','Res 1',14,'2023-09-23 23:54:52','2023-09-23 23:54:52'),(4,'Dept 2','Res 2',14,'2023-09-23 23:54:52','2023-09-23 23:54:52'),(5,'123','14',15,'2023-09-24 00:20:56','2023-09-24 00:20:56'),(6,'123','sdasd',16,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(7,'hjghgj','123',16,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(8,'hghj','gfjhd',17,'2023-09-24 06:58:04','2023-09-24 06:58:04'),(9,'uygg','edsđ',18,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(10,'jkhjh','srdzrsre',18,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(11,'khb','uyg',18,'2023-09-24 07:37:40','2023-09-24 07:37:40');
/*!40000 ALTER TABLE `add_on` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Admin','admin@gmail.com','$2y$10$G8Emwlbv1wPyTZnnt7bj9udaX48Ht1qU.HQIkGVUoPhoV5ZdD7YEq');
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'NON-PROFIT EVENTS','NON-PROFIT','2023-09-23 14:07:51','2023-09-24 15:15:20'),(2,'SOCIAL EVENTS','SOCIAL','2023-09-23 14:08:11','2023-09-23 14:08:11'),(3,'WEDDING EVENTS','WEDDINGS','2023-09-23 14:08:32','2023-09-23 14:08:32'),(4,'CORPORATE EVENTS','CORPORATE','2023-09-23 14:09:03','2023-09-23 14:09:03');
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
  CONSTRAINT `events_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'evetn 1','2023-09-25','2023-09-30',1,3,'2023-09-23 15:37:00','2023-09-23 15:37:00'),(2,'abc','2023-09-05','2023-10-03',1,3,'2023-09-23 22:55:04','2023-09-23 22:55:04'),(3,'abc','2023-09-05','2023-10-03',2,4,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(4,'event 10','2023-09-05','2023-10-03',3,3,'2023-09-23 23:15:02','2023-09-23 23:15:02'),(5,'event 10','2023-09-05','2023-10-03',3,3,'2023-09-23 23:15:59','2023-09-23 23:15:59'),(6,'event 10','2023-09-05','2023-10-03',3,3,'2023-09-23 23:17:05','2023-09-23 23:17:05'),(7,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(8,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(9,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(10,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(11,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(12,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(13,'Event 100','2023-08-29','2023-08-31',3,4,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(14,'evetn test','2023-09-05','2023-09-07',4,3,'2023-09-23 23:54:52','2023-09-23 23:54:52'),(15,'dat','2023-09-05','2023-09-28',4,4,'2023-09-24 00:20:56','2023-09-24 00:20:56'),(16,'datkkk','2023-09-13','2023-09-08',2,4,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(17,'12314','2023-09-01','2023-09-28',2,3,'2023-09-24 06:58:04','2023-09-24 06:58:04'),(18,'hgyyg','2023-09-07','2023-09-21',3,4,'2023-09-24 07:37:40','2023-09-24 07:37:40');
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
  `user_id` bigint unsigned DEFAULT NULL,
  `event_id` bigint unsigned DEFAULT NULL,
  `category_id` bigint unsigned DEFAULT NULL,
  `slide_id` bigint unsigned DEFAULT NULL,
  `press_review_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_user_id_foreign` (`user_id`),
  KEY `images_event_id_foreign` (`event_id`),
  KEY `images_category_id_foreign` (`category_id`),
  KEY `images_slide_id_foreign` (`slide_id`),
  KEY `images_press_review_id_foreign` (`press_review_id`),
  CONSTRAINT `images_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `images_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE,
  CONSTRAINT `images_press_review_id_foreign` FOREIGN KEY (`press_review_id`) REFERENCES `press_review` (`id`) ON DELETE CASCADE,
  CONSTRAINT `images_slide_id_foreign` FOREIGN KEY (`slide_id`) REFERENCES `slides` (`id`) ON DELETE CASCADE,
  CONSTRAINT `images_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (2,'SOCIAL','images/1695478091.jpg',NULL,NULL,2,NULL,NULL,'2023-09-23 14:08:11','2023-09-23 14:08:11'),(3,'WEDDINGS','images/1695478112.jpg',NULL,NULL,3,NULL,NULL,'2023-09-23 14:08:32','2023-09-23 14:08:32'),(4,'CORPORATE','images/1695478143.jpg',NULL,NULL,4,NULL,NULL,'2023-09-23 14:09:03','2023-09-23 14:09:03'),(6,'1695509704_650f6cc898269.jpg','http://127.0.0.1:8000/images/1695509704_650f6cc898269.jpg',NULL,2,NULL,NULL,NULL,'2023-09-23 22:55:04','2023-09-23 22:55:04'),(7,'1695509704_650f6cc89876c.jpg','http://127.0.0.1:8000/images/1695509704_650f6cc89876c.jpg',NULL,2,NULL,NULL,NULL,'2023-09-23 22:55:04','2023-09-23 22:55:04'),(8,'1695509916_650f6d9c37bd1.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c37bd1.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(9,'1695509916_650f6d9c38117.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c38117.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(10,'1695509916_650f6d9c381f2.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c381f2.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(11,'1695509916_650f6d9c382a8.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c382a8.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(12,'1695509916_650f6d9c38380.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c38380.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(13,'1695509916_650f6d9c38474.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c38474.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(14,'1695509916_650f6d9c385bb.jpg','http://127.0.0.1:8000/images/1695509916_650f6d9c385bb.jpg',NULL,3,NULL,NULL,NULL,'2023-09-23 22:58:36','2023-09-23 22:58:36'),(15,'event 10_image0','http://127.0.0.1:8000/images/1695511025_650f71f1e7afa.jpg',NULL,6,NULL,NULL,NULL,'2023-09-23 23:17:05','2023-09-23 23:17:05'),(16,'event 10_image1','http://127.0.0.1:8000/images/1695511025_650f71f1e8049.jpg',NULL,6,NULL,NULL,NULL,'2023-09-23 23:17:05','2023-09-23 23:17:05'),(17,'event 10_image2','http://127.0.0.1:8000/images/1695511025_650f71f1e8131.jpg',NULL,6,NULL,NULL,NULL,'2023-09-23 23:17:05','2023-09-23 23:17:05'),(18,'Event 100_image0','http://127.0.0.1:8000/images/1695511357_650f733d6b0a2.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(19,'Event 100_image1','http://127.0.0.1:8000/images/1695511357_650f733d6b61e.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(20,'Event 100_image2','http://127.0.0.1:8000/images/1695511357_650f733d6b6e8.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(21,'Event 100_image3','http://127.0.0.1:8000/images/1695511357_650f733d6b7aa.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(22,'Event 100_image4','http://127.0.0.1:8000/images/1695511357_650f733d6b8c6.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(23,'Event 100_image5','http://127.0.0.1:8000/images/1695511357_650f733d6b9b5.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(24,'Event 100_image6','http://127.0.0.1:8000/images/1695511357_650f733d6ba6a.jpg',NULL,7,NULL,NULL,NULL,'2023-09-23 23:22:37','2023-09-23 23:22:37'),(25,'Event 100_image0','http://127.0.0.1:8000/images/1695511415_650f73773cc0e.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(26,'Event 100_image1','http://127.0.0.1:8000/images/1695511415_650f73773d09c.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(27,'Event 100_image2','http://127.0.0.1:8000/images/1695511415_650f73773d177.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(28,'Event 100_image3','http://127.0.0.1:8000/images/1695511415_650f73773d222.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(29,'Event 100_image4','http://127.0.0.1:8000/images/1695511415_650f73773d31c.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(30,'Event 100_image5','http://127.0.0.1:8000/images/1695511415_650f73773d3bd.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(31,'Event 100_image6','http://127.0.0.1:8000/images/1695511415_650f73773d4b0.jpg',NULL,8,NULL,NULL,NULL,'2023-09-23 23:23:35','2023-09-23 23:23:35'),(32,'Event 100_image0','http://127.0.0.1:8000/images/1695511570_650f7412529fe.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(33,'Event 100_image1','http://127.0.0.1:8000/images/1695511570_650f741252f49.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(34,'Event 100_image2','http://127.0.0.1:8000/images/1695511570_650f741253030.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(35,'Event 100_image3','http://127.0.0.1:8000/images/1695511570_650f741253113.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(36,'Event 100_image4','http://127.0.0.1:8000/images/1695511570_650f7412531f8.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(37,'Event 100_image5','http://127.0.0.1:8000/images/1695511570_650f741253295.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(38,'Event 100_image6','http://127.0.0.1:8000/images/1695511570_650f741253362.jpg',NULL,9,NULL,NULL,NULL,'2023-09-23 23:26:10','2023-09-23 23:26:10'),(39,'Event 100_image0','http://127.0.0.1:8000/images/1695511799_650f74f7c8652.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(40,'Event 100_image1','http://127.0.0.1:8000/images/1695511799_650f74f7c8b72.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(41,'Event 100_image2','http://127.0.0.1:8000/images/1695511799_650f74f7c8c58.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(42,'Event 100_image3','http://127.0.0.1:8000/images/1695511799_650f74f7c8d0c.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(43,'Event 100_image4','http://127.0.0.1:8000/images/1695511799_650f74f7c8df9.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(44,'Event 100_image5','http://127.0.0.1:8000/images/1695511799_650f74f7c8e95.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(45,'Event 100_image6','http://127.0.0.1:8000/images/1695511799_650f74f7c8fbf.jpg',NULL,10,NULL,NULL,NULL,'2023-09-23 23:29:59','2023-09-23 23:29:59'),(46,'Event 100_image0','http://127.0.0.1:8000/images/1695511944_650f758897573.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(47,'Event 100_image1','http://127.0.0.1:8000/images/1695511944_650f758897ab6.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(48,'Event 100_image2','http://127.0.0.1:8000/images/1695511944_650f758897bb6.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(49,'Event 100_image3','http://127.0.0.1:8000/images/1695511944_650f758897c6e.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(50,'Event 100_image4','http://127.0.0.1:8000/images/1695511944_650f758897d34.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(51,'Event 100_image5','http://127.0.0.1:8000/images/1695511944_650f758897dd2.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(52,'Event 100_image6','http://127.0.0.1:8000/images/1695511944_650f758897ed6.jpg',NULL,11,NULL,NULL,NULL,'2023-09-23 23:32:24','2023-09-23 23:32:24'),(53,'Event 100_image0','http://127.0.0.1:8000/images/1695512011_650f75cbddcc8.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(54,'Event 100_image1','http://127.0.0.1:8000/images/1695512011_650f75cbde273.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(55,'Event 100_image2','http://127.0.0.1:8000/images/1695512011_650f75cbde383.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(56,'Event 100_image3','http://127.0.0.1:8000/images/1695512011_650f75cbde470.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(57,'Event 100_image4','http://127.0.0.1:8000/images/1695512011_650f75cbde566.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(58,'Event 100_image5','http://127.0.0.1:8000/images/1695512011_650f75cbde680.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(59,'Event 100_image6','http://127.0.0.1:8000/images/1695512011_650f75cbde7a0.jpg',NULL,12,NULL,NULL,NULL,'2023-09-23 23:33:31','2023-09-23 23:33:31'),(60,'Event 100_image0','http://127.0.0.1:8000/images/1695512032_650f75e042296.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(61,'Event 100_image1','http://127.0.0.1:8000/images/1695512032_650f75e0427dc.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(62,'Event 100_image2','http://127.0.0.1:8000/images/1695512032_650f75e0428ca.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(63,'Event 100_image3','http://127.0.0.1:8000/images/1695512032_650f75e042994.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(64,'Event 100_image4','http://127.0.0.1:8000/images/1695512032_650f75e042a5a.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(65,'Event 100_image5','http://127.0.0.1:8000/images/1695512032_650f75e042b14.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(66,'Event 100_image6','http://127.0.0.1:8000/images/1695512032_650f75e042c72.jpg',NULL,13,NULL,NULL,NULL,'2023-09-23 23:33:52','2023-09-23 23:33:52'),(67,'evetn test_image0','http://127.0.0.1:8000/images/1695513292_650f7acc6be1d.jpg',NULL,14,NULL,NULL,NULL,'2023-09-23 23:54:52','2023-09-23 23:54:52'),(68,'evetn test_image1','http://127.0.0.1:8000/images/1695513292_650f7acc6c39b.jpg',NULL,14,NULL,NULL,NULL,'2023-09-23 23:54:52','2023-09-23 23:54:52'),(69,'evetn test_image2','http://127.0.0.1:8000/images/1695513292_650f7acc6c480.jpg',NULL,14,NULL,NULL,NULL,'2023-09-23 23:54:52','2023-09-23 23:54:52'),(70,'dat_image0','http://127.0.0.1:8000/images/1695514856_650f80e86dfa2.jpg',NULL,15,NULL,NULL,NULL,'2023-09-24 00:20:56','2023-09-24 00:20:56'),(71,'dat_image1','http://127.0.0.1:8000/images/1695514856_650f80e86e474.jpg',NULL,15,NULL,NULL,NULL,'2023-09-24 00:20:56','2023-09-24 00:20:56'),(72,'datkkk_image0','http://127.0.0.1:8000/images/1695537468_650fd93c8c8d8.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(73,'datkkk_image1','http://127.0.0.1:8000/images/1695537468_650fd93c8ce9d.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(74,'datkkk_image2','http://127.0.0.1:8000/images/1695537468_650fd93c8cf93.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(75,'datkkk_image3','http://127.0.0.1:8000/images/1695537468_650fd93c8d093.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(76,'datkkk_image4','http://127.0.0.1:8000/images/1695537468_650fd93c8d182.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(77,'datkkk_image5','http://127.0.0.1:8000/images/1695537468_650fd93c8d27e.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(78,'datkkk_image6','http://127.0.0.1:8000/images/1695537468_650fd93c8d374.jpg',NULL,16,NULL,NULL,NULL,'2023-09-24 06:37:48','2023-09-24 06:37:48'),(79,'12314_image0','http://127.0.0.1:8000/images/1695538684_650fddfc57519.jpg',NULL,17,NULL,NULL,NULL,'2023-09-24 06:58:04','2023-09-24 06:58:04'),(80,'12314_image1','http://127.0.0.1:8000/images/1695538684_650fddfc57a3d.jpg',NULL,17,NULL,NULL,NULL,'2023-09-24 06:58:04','2023-09-24 06:58:04'),(81,'12314_image2','http://127.0.0.1:8000/images/1695538684_650fddfc588e6.jpg',NULL,17,NULL,NULL,NULL,'2023-09-24 06:58:04','2023-09-24 06:58:04'),(82,'12314_image3','http://127.0.0.1:8000/images/1695538684_650fddfc589fc.jpg',NULL,17,NULL,NULL,NULL,'2023-09-24 06:58:04','2023-09-24 06:58:04'),(83,'hgyyg_image0','http://127.0.0.1:8000/images/1695541060_650fe744e49a1.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(84,'hgyyg_image1','http://127.0.0.1:8000/images/1695541060_650fe744e4e82.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(85,'hgyyg_image2','http://127.0.0.1:8000/images/1695541060_650fe744e4f4c.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(86,'hgyyg_image3','http://127.0.0.1:8000/images/1695541060_650fe744e502d.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(87,'hgyyg_image4','http://127.0.0.1:8000/images/1695541060_650fe744e5185.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(88,'hgyyg_image5','http://127.0.0.1:8000/images/1695541060_650fe744e528d.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(89,'hgyyg_image6','http://127.0.0.1:8000/images/1695541060_650fe744e5392.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(90,'hgyyg_image7','http://127.0.0.1:8000/images/1695541060_650fe744e546e.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(91,'hgyyg_image8','http://127.0.0.1:8000/images/1695541060_650fe744e5538.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(92,'hgyyg_image9','http://127.0.0.1:8000/images/1695541060_650fe744e5601.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(93,'hgyyg_image10','http://127.0.0.1:8000/images/1695541060_650fe744e56a0.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(94,'hgyyg_image11','http://127.0.0.1:8000/images/1695541060_650fe744e5791.jpg',NULL,18,NULL,NULL,NULL,'2023-09-24 07:37:40','2023-09-24 07:37:40'),(96,'NON-PROFIT','images/1695568933.jpg',NULL,NULL,1,NULL,NULL,'2023-09-24 15:22:13','2023-09-24 15:22:13'),(97,'Weddings','images/1695569026.jpg',NULL,NULL,NULL,2,NULL,'2023-09-24 15:23:46','2023-09-24 15:23:46'),(98,'Corporate Events','images/1695569089.jpg',NULL,NULL,NULL,3,NULL,'2023-09-24 15:24:49','2023-09-24 15:24:49'),(99,'Non-Profit Events','images/1695569123.jpg',NULL,NULL,NULL,4,NULL,'2023-09-24 15:25:23','2023-09-24 15:25:23'),(100,'Social Events','images/1695569146.jpg',NULL,NULL,NULL,5,NULL,'2023-09-24 15:25:46','2023-09-24 15:25:46');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2023_09_23_152941_create_categories_table',1),(2,'2014_10_12_000000_create_users_table',2),(3,'2014_10_12_100000_create_password_resets_table',2),(4,'2019_08_19_000000_create_failed_jobs_table',2),(5,'2019_12_14_000001_create_personal_access_tokens_table',2),(6,'2023_09_23_154514_create_add_on_table',3),(7,'2023_09_23_144203_create_press_review_table',4),(8,'2023_09_23_144223_create_slides_table',5),(9,'2023_09_23_154600_create_images_table',6);
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (5,'App\\Models\\User',3,'auth_token','e3c93d80f4d76e7bf771368b53af7d759db353b4490cd0c05a70887ed55e2d38','[\"*\"]',NULL,NULL,'2023-09-23 14:54:37','2023-09-23 14:54:37'),(17,'App\\Models\\Admin',1,'admin_access_token','ac5424483be743a621d5b8f97b542def1d15ab57862382bfac812fece84d937f','[\"*\"]',NULL,NULL,'2023-09-24 07:44:34','2023-09-24 07:44:34'),(18,'App\\Models\\User',5,'auth_token','591f8767f0dc544568cf134f5629311f7f4617c9aec3eb193aa5a5a16eab4f06','[\"*\"]',NULL,NULL,'2023-09-24 09:19:08','2023-09-24 09:19:08'),(19,'App\\Models\\User',6,'auth_token','718d73ca1b2d45ca99f0077030f34ce8df4f3aac9a33779f8c477f607c71b13e','[\"*\"]',NULL,NULL,'2023-09-24 09:22:07','2023-09-24 09:22:07'),(20,'App\\Models\\Admin',1,'admin_access_token','09ea4d725d188c4be4b686eee26264dcb740cc886789c62d93cc678106c34187','[\"*\"]',NULL,NULL,'2023-09-24 09:58:19','2023-09-24 09:58:19'),(21,'App\\Models\\Admin',1,'admin_access_token','39d087f1ab14a9e2d403a463f49fc88ed3bb6735ff95a2812873915ef5f96755','[\"*\"]',NULL,NULL,'2023-09-24 10:00:35','2023-09-24 10:00:35'),(22,'App\\Models\\Admin',1,'admin_access_token','41df685c5032a865276546aa0dac3d2cc96e298160cf7e524683cc6eeb1e49b5','[\"*\"]',NULL,NULL,'2023-09-24 10:01:14','2023-09-24 10:01:14'),(23,'App\\Models\\Admin',1,'admin_access_token','6f4f628b391dec2fc38828b86bd2267bbe1e1c95471365b607de0f2cb99900b2','[\"*\"]',NULL,NULL,'2023-09-24 10:01:28','2023-09-24 10:01:28'),(24,'App\\Models\\Admin',1,'admin_access_token','a74e82f8f49f7051a4c303523cca06d214138d9af294b9a4256d91b94af3b179','[\"*\"]',NULL,NULL,'2023-09-24 10:03:11','2023-09-24 10:03:11'),(25,'App\\Models\\Admin',1,'admin_access_token','c27e970a85ad4623a4848f2200677d3c1f753a663054b422dfe47b0eef7af713','[\"*\"]',NULL,NULL,'2023-09-24 10:03:37','2023-09-24 10:03:37'),(26,'App\\Models\\Admin',1,'admin_access_token','b2f4d48c9284bad92428ee2eb75b3be6b49def9b2d2aea99dedfe82dcd04b698','[\"*\"]',NULL,NULL,'2023-09-24 10:03:54','2023-09-24 10:03:54'),(27,'App\\Models\\Admin',1,'admin_access_token','82e53b602d3ff3c7446a378baea4c5292357a88cd8535569bbeb2c0deedfaa5d','[\"*\"]',NULL,NULL,'2023-09-24 15:15:12','2023-09-24 15:15:12'),(28,'App\\Models\\Admin',1,'admin_access_token','3d726044c02a77d6812c5bba179999c1f5c6827472ad7e7fd9129c78343b3047','[\"*\"]',NULL,NULL,'2023-09-25 01:35:00','2023-09-25 01:35:00');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `press_review`
--

DROP TABLE IF EXISTS `press_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `press_review` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `press_review`
--

LOCK TABLES `press_review` WRITE;
/*!40000 ALTER TABLE `press_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `press_review` ENABLE KEYS */;
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slides`
--

LOCK TABLES `slides` WRITE;
/*!40000 ALTER TABLE `slides` DISABLE KEYS */;
INSERT INTO `slides` VALUES (2,'Weddings','Need help planning your wedding? We\'ve got you covered! With our event planning and unique event design expertise, your wedding will look amazing!','2023-09-24 15:23:46','2023-09-24 15:23:46'),(3,'Corporate Events','Holiday Parties, Product Launches, Conferences, Team Building Workshops, and more! We can help with that!','2023-09-24 15:24:49','2023-09-24 15:24:49'),(4,'Non-Profit Events','Have a non-profit walk or run to plan? What about a gala? Any non-profit event from award dinners to auctions and unique fundraisers, we\'ll take care of it!','2023-09-24 15:25:23','2023-09-24 15:25:23'),(5,'Social Events','From Seasonal Celebrations, Reunions, Parties, and more - Don\'t fear, Take Heart!','2023-09-24 15:25:46','2023-09-24 15:25:46');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'User 1','user1@gmail.com',NULL,'$2y$10$IAkWtQJZd7hzo.11lG5Xgu1trQmbzAOE..GoSp7CbctHRguZ1uyhG',NULL,'2023-09-23 14:53:06','2023-09-23 14:53:06'),(4,'User 2','user2@gmail.com',NULL,'$2y$10$dzfNGefWyUujQgJLQ12tueyZW9KUfm1NFeTv4qjW4pFtZfEu4Qzby',NULL,'2023-09-23 14:53:06','2023-09-23 14:53:06'),(5,'123','12345678@gmail.com',NULL,'$2y$10$ZXV8AgaTbrYVYEL6KICtvuszZtKJ51hXnVNGKZodQyjHUauxXjcIe',NULL,'2023-09-24 09:19:08','2023-09-24 09:19:08'),(6,'23456789','23456789@gmail.com',NULL,'$2y$10$er7chmhDQzbqV.ZXjg76SehM6ysPckIc9mAnJ.rMEUP5L.JMN.AyC',NULL,'2023-09-24 09:22:07','2023-09-24 09:22:07');
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

-- Dump completed on 2023-09-25 13:54:22
