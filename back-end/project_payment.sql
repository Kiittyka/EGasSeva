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
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mihpay_id` varchar(255) DEFAULT NULL,
  `mode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `product_info` varchar(255) DEFAULT NULL,
  `txn_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,600,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Deve8992e30a30e'),(2,600,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Deve11f49116c3d'),(3,250,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Dev29eb980da8f9'),(4,250,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Devb46b5d87ce93'),(5,610,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Dev5664396b99cb'),(6,490,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Devb63b93563b51'),(7,490,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Dev9810d98f8c15'),(8,540,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Dev73f1a56b6e5d'),(9,390,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Dev86e287ef8e87'),(10,540,'lolakutti@gmail.com',NULL,NULL,'krithika','2019-12-11','Pending','8746844056',NULL,'Dev12da4fc87304');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-11 17:27:28
