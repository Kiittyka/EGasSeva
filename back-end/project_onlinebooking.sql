-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `onlinebooking`
--

DROP TABLE IF EXISTS `onlinebooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `onlinebooking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accept` tinyint(1) DEFAULT NULL,
  `adhaar` varchar(255) DEFAULT NULL,
  `agency` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `contact` bigint(20) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `onlinebooking`
--

LOCK TABLES `onlinebooking` WRITE;
/*!40000 ALTER TABLE `onlinebooking` DISABLE KEYS */;
INSERT INTO `onlinebooking` VALUES (1,0,'1234','Reliance Gas Agency','iyui',231,'dewdw','2131','dewdw','dwd','dwd',3231),(2,1,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 09:12:51','krithikaudupa@gmail.com','3fdb3926','Karnataka',560045),(3,1,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 09:12:11','krithikaudupa@gmail.com','3c0a958f','Karnataka',560045),(4,1,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 09:12:11','krithikaudupa@gmail.com','2a7ab781','Karnataka',560045),(5,1,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 09:12:08','krithikaudupa@gmail.com','df960463','Karnataka',560045),(6,0,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 11:12:55','krithikaudupa@gmail.com','daf6d4e2','Karnataka',560045),(7,1,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 11:12:28','krithikaudupa@gmail.com','a98c1551','Karnataka',560045),(8,0,'1234 1234 1234','Indo Gas Agency','Bangalore ',8746844056,'India','10/12/2019 11:12:06','lolakutti@gmail.com','9546a0d5','Karnataka',560045);
/*!40000 ALTER TABLE `onlinebooking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-11 17:27:27
