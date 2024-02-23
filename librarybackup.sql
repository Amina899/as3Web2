-- MySQL dump 10.13  Distrib 8.2.0, for macos14.0 (arm64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Мұхтар Ауезов'),(2,'Олжас Сулейменов'),(3,'Сәбит Мұхаммет Жангелдинов'),(4,'Магжан Жұмабаев'),(5,'Құранбай Іманбайұлы'),(6,'Шал Қасымов'),(7,'Мұхаммеджан Тайманов'),(8,'Сәуір Мұлдашев'),(9,'Ібраи Алтынсарин'),(10,'Шоқан Уәлиханов'),(11,'Бейбітшілік Төлегенұлы'),(12,'Қазыбек би'),(13,'Сұлтанмырза Турар'),(14,'Майра Жұсуп'),(15,'Сара Мұкан'),(16,'Author Name');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `publish_year` int NOT NULL,
  `pages_count` int NOT NULL,
  `price` float NOT NULL,
  `author_id` int DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`),
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (61,'Туған Жер','Мұхтар Ауезов',1937,420,15.99,1,1),(62,'Жау жараткан кісілер','Олжас Сулейменов',1956,180,12.5,2,2),(63,'Абай жолы','Сәбит Мұхаммет Жангелдинов',1925,200,10.99,3,3),(64,'Қара Сөз','Магжан Жұмабаев',1961,240,14.75,4,4),(65,'Мыңбала','Құранбай Іманбайұлы',1948,150,8.99,5,5),(66,'Түнгі шағын','Шал Қасымов',1982,320,20.5,6,6),(67,'Бір сатым қызметкерінің қызметінде','Мұхаммеджан Тайманов',1975,280,19.99,7,7),(68,'Қазақ кызы','Сәуір Мұлдашев',1936,160,11.75,8,8),(69,'Сырлы Көпбасты балалар аурулары','Ібраи Алтынсарин',1952,210,16.99,9,9),(70,'Сұлтанмұрат','Шоқан Уәлиханов',1845,190,13.5,10,10),(71,'Алтын шарпан','Бейбітшілік Төлегенұлы',1999,130,9.5,11,11),(72,'Ер Тарғын','Қазыбек би',1912,180,12.99,12,12),(73,'Қолтық май','Сұлтанмырза Турар',1947,250,17.25,13,13),(74,'Жаратар жылдары','Майра Жұсуп',2005,180,15.5,14,14),(75,'Жалбырай','Сара Мұкан',1959,220,18.99,15,15);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Genre 1'),(2,'Genre 2'),(3,'Genre 3'),(4,'Genre 4'),(5,'Genre 5'),(6,'Genre 6'),(7,'Genre 7'),(8,'Genre 8'),(9,'Genre 9'),(10,'Genre 10'),(11,'Genre 11'),(12,'Genre 12'),(13,'Genre 13'),(14,'Genre 14'),(15,'Genre 15'),(16,'Genre 16'),(17,'Genre Name');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 20:56:22
