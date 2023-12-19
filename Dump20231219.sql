-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: eventmgt.cfvufltihmhv.us-east-2.rds.amazonaws.com    Database: eventmgt
-- ------------------------------------------------------
-- Server version	8.0.32

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add room',7,'add_room'),(26,'Can change room',7,'change_room'),(27,'Can delete room',7,'delete_room'),(28,'Can view room',7,'view_room'),(29,'Can add category',8,'add_category'),(30,'Can change category',8,'change_category'),(31,'Can delete category',8,'delete_category'),(32,'Can view category',8,'view_category'),(33,'Can add customer',9,'add_customer'),(34,'Can change customer',9,'change_customer'),(35,'Can delete customer',9,'delete_customer'),(36,'Can view customer',9,'view_customer'),(37,'Can add booking',10,'add_booking'),(38,'Can change booking',10,'change_booking'),(39,'Can delete booking',10,'delete_booking'),(40,'Can view booking',10,'view_booking'),(41,'Can add payment',11,'add_payment'),(42,'Can change payment',11,'change_payment'),(43,'Can delete payment',11,'delete_payment'),(44,'Can view payment',11,'view_payment'),(45,'Can add check in',12,'add_checkin'),(46,'Can change check in',12,'change_checkin'),(47,'Can delete check in',12,'delete_checkin'),(48,'Can view check in',12,'view_checkin'),(49,'Can add check out',13,'add_checkout'),(50,'Can change check out',13,'change_checkout'),(51,'Can delete check out',13,'delete_checkout'),(52,'Can view check out',13,'view_checkout'),(53,'Can add room display images',14,'add_roomdisplayimages'),(54,'Can change room display images',14,'change_roomdisplayimages'),(55,'Can delete room display images',14,'delete_roomdisplayimages'),(56,'Can view room display images',14,'view_roomdisplayimages'),(57,'Can add feedback',15,'add_feedback'),(58,'Can change feedback',15,'change_feedback'),(59,'Can delete feedback',15,'delete_feedback'),(60,'Can view feedback',15,'view_feedback'),(61,'Can add outdoor',16,'add_outdoor'),(62,'Can change outdoor',16,'change_outdoor'),(63,'Can delete outdoor',16,'delete_outdoor'),(64,'Can view outdoor',16,'view_outdoor'),(65,'Can add outdoorbooking',17,'add_outdoorbooking'),(66,'Can change outdoorbooking',17,'change_outdoorbooking'),(67,'Can delete outdoorbooking',17,'delete_outdoorbooking'),(68,'Can view outdoorbooking',17,'view_outdoorbooking'),(69,'Can add eventpackage',18,'add_eventpackage'),(70,'Can change eventpackage',18,'change_eventpackage'),(71,'Can delete eventpackage',18,'delete_eventpackage'),(72,'Can view eventpackage',18,'view_eventpackage'),(73,'Can add eventbooking',19,'add_eventbooking'),(74,'Can change eventbooking',19,'change_eventbooking'),(75,'Can delete eventbooking',19,'delete_eventbooking'),(76,'Can view eventbooking',19,'view_eventbooking');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$OzHLhK74Is10Y6jB01l9DH$7heSZSXq1zDW1aoj3i7Crvszv6gfN59m5Hds+4sFtOg=','2023-11-24 09:01:48.753283',1,'hoteladmin','','','seabreezehotelproject@gmail.com',1,1,'2023-11-19 15:18:42.608572'),(2,'pbkdf2_sha256$600000$lIPo8aumRqqyBEz2pKKtOq$vfxBlOuEJsOaylPbyld/5guHPTL3rUi/Cxx6FGvaMJw=',NULL,0,'Kumara','','','hansikaerangi4@gmail.com',0,1,'2023-11-19 19:06:33.743294'),(3,'pbkdf2_sha256$600000$aC45dDf3HQDnSLSCSlJnsV$xM9h4Cs7PZwFvTGNlLSJZ90lIAR8GPIuN2Hdp4LUBmQ=',NULL,0,'Erangi','','','iit19059@std.uwu.ac.lk',0,1,'2023-11-20 04:04:35.294127'),(4,'pbkdf2_sha256$600000$wnxpBuGBTEC9zBHq5hztKO$yr4gLG/Dt3cu0Ux7CKyyQrmt5pq7H9tWWPSnJnlDMPo=',NULL,0,'Pelawage','','','waru@gmail.com',0,1,'2023-11-20 10:38:28.693634'),(5,'pbkdf2_sha256$600000$FvqqKb63f2fyWonBdgWf6w$53t/d21G7AL6QpHbxFR9IjpXIETnEQ3ug5cVICQjEJ8=',NULL,0,'Hansi','','','hansi@gmail.com',0,1,'2023-11-20 13:42:13.917571'),(7,'pbkdf2_sha256$600000$ljFTha0sBVrQkMPN3Lg1LC$0HglGruOpatCSzv6tGs9XxNfUo5CVQt/ptyYVdxuasM=','2023-11-20 15:49:15.382943',1,'adminhotel','','','seabreezehotelproject@gmail.com',1,1,'2023-11-20 15:29:56.805324'),(8,'pbkdf2_sha256$600000$vb6f6vRgDzojctMIq1eKnZ$ZwtluR9o3oS/lNArXSDBkEzIQKqx+mpLcBZ7lckS0B0=','2023-12-12 17:30:05.915842',1,'hotelitadmin','','','admin@gmail.com',1,1,'2023-11-23 16:58:42.580626'),(9,'pbkdf2_sha256$600000$o05OamaOMERvunDIFbtzSM$DMhzEv3++sZngjLP6yvZln3ncJ9Fibd0D7HKs0PEu70=',NULL,0,'Lasantha','','','lsanjeewa18@gmail.com',0,1,'2023-11-26 07:30:11.360288'),(10,'pbkdf2_sha256$600000$BcB2FzpmcA4Afi9Lrr8I8u$zPORHJMQUcp+VdBagihR7XFg3PHAqpKt0yjzNAEQQeI=',NULL,0,'Sanju','','','lsanjeew947@gmail.com',0,1,'2023-12-02 18:19:21.864537'),(11,'pbkdf2_sha256$600000$GwdrmrqxJy9mEso1sGbbly$ijXLC1ttO+MZqTkGL4tOYce5ehFSCgoLg885inpx3nQ=',NULL,0,'TestUser','','','lasanthasanjeewa323@gmail.com',0,1,'2023-12-02 18:54:10.234175'),(12,'pbkdf2_sha256$600000$PrynUVTq1fo4E4w396EyYQ$q+7wXKVAo8fe3ln04xHdlcU8I3ZZT81g/ldPVr1m0dQ=','2023-12-12 19:21:14.678403',1,'hoteladministrator','','','seabreezehotelproject@gmail.com',1,1,'2023-12-12 19:20:34.059723'),(13,'pbkdf2_sha256$600000$v6vYRbXUw38l5EtDG8znrI$3bfuEB9CwdIa8OJCeK0aqXomMdbf9I/pMbamtcviYF8=','2023-12-19 10:08:15.542381',1,'administrator','','','admin@gmail.com',1,1,'2023-12-12 19:41:01.093395'),(14,'pbkdf2_sha256$600000$qJRXjmn5stHZnbnT2UrmZw$ZwEZ1UttzfstM/HgtIMPsyoIkw6dg8Epi5irhMmKKQU=',NULL,0,'TestUser4','','','',0,1,'2023-12-18 18:43:03.505742'),(15,'pbkdf2_sha256$600000$zF8YfWHHM5TeasyWboEHna$6eQuhoJu0XUJNXoPX91A9PSJP751yIPX/3jPYu2EeD8=',NULL,0,'TestUser5','','','TestUser5@gmail.com',0,1,'2023-12-18 18:57:20.737315'),(16,'pbkdf2_sha256$600000$DbFVS4rj9BOBp342oiBYwZ$Gxsd0Sj+N5yxCu+5+xXDfPEQrWlztLQOs1QavexzyX8=',NULL,0,'TestUser7','','','TestUser7@gmail.com',0,1,'2023-12-18 18:59:17.050202'),(17,'pbkdf2_sha256$600000$Buoe9k7Yjiv3iKUk9hkCnV$xy3kstKKa1BkugMqnWmlUu8qaARKP9nyo8uBypLpAQ8=',NULL,0,'User9','','','user9@gmail.com',0,1,'2023-12-19 05:16:13.263510'),(18,'pbkdf2_sha256$600000$0iGJ2GMh3AOIZfXuvJr0Qk$apm83DUqOYpvSVmzjJEhJlXj5w6J+ejAi5B4h9IJPRw=',NULL,0,'Gayani','','','gayani7@gmail.com',0,1,'2023-12-19 07:35:53.100932'),(19,'pbkdf2_sha256$600000$B1r0VxxtwuiF2MNGrmB7KK$yxjZr4e5jlo3dboXGYUtkhtk+k3lr9NFXkGxZCONd1g=',NULL,0,'Tharu','','','tharu@gmail.com',0,1,'2023-12-19 07:43:23.044327'),(20,'pbkdf2_sha256$600000$SugfQ6Yp6lbwBRZEGPk19w$stiF7ItvRat9/M/fS1e+dEwzcGXFwOdPCJHA0D69iCk=',NULL,0,'Tharushii','','','tharu5@gmail.com',0,1,'2023-12-19 09:58:59.994889');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-11-19 16:59:50.289866','1','outdoor object (1)',1,'[{\"added\": {}}]',16,1),(2,'2023-11-19 17:02:06.544688','2','outdoor object (2)',1,'[{\"added\": {}}]',16,1),(3,'2023-11-19 17:03:13.989722','3','outdoor object (3)',1,'[{\"added\": {}}]',16,1),(4,'2023-11-19 19:14:36.721932','1','Silver',1,'[{\"added\": {}}]',8,1),(5,'2023-11-19 19:16:13.131144','1','Room1',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"6\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"6\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"6\"}}]',7,1),(6,'2023-11-20 03:32:37.103164','2','Single',1,'[{\"added\": {}}]',8,1),(7,'2023-11-20 03:32:39.381232','3','Single',1,'[{\"added\": {}}]',8,1),(8,'2023-11-20 03:36:56.007311','2','Room 2',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"1\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"1\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"1\"}}]',7,1),(9,'2023-11-20 03:37:32.755437','1','Room 1',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(10,'2023-11-20 03:40:54.080082','4','Triple Room',1,'[{\"added\": {}}]',8,1),(11,'2023-11-20 03:42:35.929844','3','Room 3',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"3\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"3\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"3\"}}]',7,1),(12,'2023-11-20 03:43:22.631917','5','Single Room',1,'[{\"added\": {}}]',8,1),(13,'2023-11-20 03:43:25.763595','6','Single Room',1,'[{\"added\": {}}]',8,1),(14,'2023-11-20 03:43:36.963480','2','Room 2',2,'[{\"changed\": {\"fields\": [\"Category\"]}}]',7,1),(15,'2023-11-20 03:44:22.377631','7','Silver Room',1,'[{\"added\": {}}]',8,1),(16,'2023-11-20 03:44:40.319404','1','Room 1',2,'[{\"changed\": {\"fields\": [\"Category\"]}}]',7,1),(17,'2023-11-20 03:45:49.088509','8','Double Room',1,'[{\"added\": {}}]',8,1),(18,'2023-11-20 03:47:51.759713','4','Room 4',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"2\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"2\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"2\"}}]',7,1),(19,'2023-11-20 03:48:41.643183','1','Room 1',2,'[{\"changed\": {\"fields\": [\"Price per night\"]}}]',7,1),(20,'2023-11-20 03:49:40.929070','9','Quad Room',1,'[{\"added\": {}}]',8,1),(21,'2023-11-20 03:52:08.189811','5','Room 4',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"4\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"4\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"4\"}}]',7,1),(22,'2023-11-20 03:53:56.037374','5','Room 5',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(23,'2023-11-20 03:55:53.251554','6','Double Room',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"2\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"2\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"2\"}}]',7,1),(24,'2023-11-20 03:57:04.827950','5','Quad Room',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(25,'2023-11-20 03:57:47.940413','4','Double Room',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(26,'2023-11-20 03:58:30.437049','3','Triple Room',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(27,'2023-11-20 03:59:15.157775','2','Single Room',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(28,'2023-11-20 04:02:18.678600','1','Silver Room',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',7,1),(29,'2023-11-20 15:34:24.813569','1','outdoor object (1)',2,'[]',16,7),(30,'2023-11-20 15:38:58.855236','4','outdoor object (4)',1,'[{\"added\": {}}]',16,7),(31,'2023-11-20 15:50:04.307966','5','outdoor object (5)',1,'[{\"added\": {}}]',16,7),(32,'2023-11-20 15:50:34.882709','3','outdoor object (3)',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',16,7),(33,'2023-11-20 16:03:08.558761','7','Room6',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"5\"}}]',7,7),(34,'2023-12-05 18:18:58.871070','8','Room1',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"3\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"3\"}}, {\"added\": {\"name\": \"room display images\", \"object\": \"3\"}}]',7,8),(35,'2023-12-05 18:19:46.996061','9','Room2',1,'[{\"added\": {}}, {\"added\": {\"name\": \"room display images\", \"object\": \"4\"}}]',7,8),(36,'2023-12-12 17:40:35.243723','8','Room1',3,'',7,8),(37,'2023-12-12 17:42:47.779796','9','Room2',3,'',7,8),(38,'2023-12-12 17:44:49.860955','7','Room6',3,'',7,8),(39,'2023-12-16 15:32:54.906595','2','Single Room',2,'[{\"changed\": {\"fields\": [\"Cover image\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"1\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"1\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"1\", \"fields\": [\"Display images\"]}}]',7,13),(40,'2023-12-17 15:53:42.061682','1','outdoorbooking object (1)',1,'[{\"added\": {}}]',17,13),(41,'2023-12-18 09:58:48.161456','6','Double Room',2,'[{\"changed\": {\"fields\": [\"Cover image\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"2\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"2\", \"fields\": [\"Display images\"]}}]',7,13),(42,'2023-12-18 10:02:16.960222','5','Quad Room',2,'[{\"changed\": {\"fields\": [\"Cover image\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"4\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"4\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"4\", \"fields\": [\"Display images\"]}}]',7,13),(43,'2023-12-18 17:00:48.653529','6','Disna',3,'',4,13),(44,'2023-12-18 18:43:04.651428','14','TestUser4',1,'[{\"added\": {}}]',4,13),(45,'2023-12-19 02:57:49.725143','4','Double Room',2,'[{\"changed\": {\"fields\": [\"Cover image\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"2\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"2\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"2\", \"fields\": [\"Display images\"]}}]',7,13),(46,'2023-12-19 02:59:54.119293','3','Triple Room',2,'[{\"changed\": {\"fields\": [\"Cover image\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"3\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"3\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"3\", \"fields\": [\"Display images\"]}}]',7,13),(47,'2023-12-19 03:01:39.961232','1','Silver Room',2,'[{\"changed\": {\"fields\": [\"Cover image\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"6\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"6\", \"fields\": [\"Display images\"]}}, {\"changed\": {\"name\": \"room display images\", \"object\": \"6\", \"fields\": [\"Display images\"]}}]',7,13),(48,'2023-12-19 03:04:04.279573','1','Silver Room',2,'[{\"changed\": {\"fields\": [\"Capacity\"]}}]',7,13),(49,'2023-12-19 03:05:34.997942','1','Silver Room',2,'[{\"changed\": {\"fields\": [\"Room slug\"]}}]',7,13),(50,'2023-12-19 03:06:28.829880','1','Silver Room',2,'[{\"changed\": {\"fields\": [\"Room slug\", \"Capacity\"]}}]',7,13),(51,'2023-12-19 03:09:02.674667','6','Double Room',2,'[{\"changed\": {\"fields\": [\"Price per night\"]}}]',7,13),(52,'2023-12-19 03:10:10.502864','6','Double Room',2,'[{\"changed\": {\"fields\": [\"Price per night\"]}}]',7,13);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(19,'eventbooking','eventbooking'),(18,'eventpackage','eventpackage'),(15,'feedback','feedback'),(10,'hotel_app','booking'),(8,'hotel_app','category'),(12,'hotel_app','checkin'),(13,'hotel_app','checkout'),(9,'hotel_app','customer'),(11,'hotel_app','payment'),(7,'hotel_app','room'),(14,'hotel_app','roomdisplayimages'),(16,'outdoor','outdoor'),(17,'outdoorbooking','outdoorbooking'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-11-19 11:44:19.417871'),(2,'auth','0001_initial','2023-11-19 11:44:26.682452'),(3,'admin','0001_initial','2023-11-19 11:44:28.724168'),(4,'admin','0002_logentry_remove_auto_add','2023-11-19 11:44:29.353196'),(5,'admin','0003_logentry_add_action_flag_choices','2023-11-19 11:44:29.886552'),(6,'contenttypes','0002_remove_content_type_name','2023-11-19 11:44:32.216090'),(7,'auth','0002_alter_permission_name_max_length','2023-11-19 11:44:33.139757'),(8,'auth','0003_alter_user_email_max_length','2023-11-19 11:44:33.961884'),(9,'auth','0004_alter_user_username_opts','2023-11-19 11:44:34.490970'),(10,'auth','0005_alter_user_last_login_null','2023-11-19 11:44:35.395708'),(11,'auth','0006_require_contenttypes_0002','2023-11-19 11:44:36.009463'),(12,'auth','0007_alter_validators_add_error_messages','2023-11-19 11:44:36.537899'),(13,'auth','0008_alter_user_username_max_length','2023-11-19 11:44:37.435010'),(14,'auth','0009_alter_user_last_name_max_length','2023-11-19 11:44:38.283578'),(15,'auth','0010_alter_group_name_max_length','2023-11-19 11:44:39.181705'),(16,'auth','0011_update_proxy_permissions','2023-11-19 11:44:40.486718'),(17,'auth','0012_alter_user_first_name_max_length','2023-11-19 11:44:41.287328'),(18,'sessions','0001_initial','2023-11-19 11:44:42.561809'),(19,'eventbooking','0001_initial','2023-11-19 15:11:48.057126'),(20,'eventpackage','0001_initial','2023-11-19 15:11:48.991312'),(21,'feedback','0001_initial','2023-11-19 15:11:49.936749'),(22,'hotel_app','0001_initial','2023-11-19 15:11:58.290604'),(23,'hotel_app','0002_room_cover_image','2023-11-19 15:11:59.209857'),(24,'hotel_app','0003_auto_20200906_1309','2023-11-19 15:12:00.289684'),(25,'hotel_app','0004_room_featured','2023-11-19 15:12:01.548893'),(26,'hotel_app','0005_auto_20200910_2016','2023-11-19 15:12:02.173320'),(27,'hotel_app','0006_auto_20200910_2029','2023-11-19 15:12:03.490439'),(28,'hotel_app','0007_remove_room_display_images','2023-11-19 15:12:04.453263'),(29,'hotel_app','0008_roomdisplayimages','2023-11-19 15:12:06.087664'),(30,'hotel_app','0009_auto_20200912_1231','2023-11-19 15:12:08.723530'),(31,'hotel_app','0010_auto_20200912_1313','2023-11-19 15:12:11.892406'),(32,'hotel_app','0011_auto_20200912_1549','2023-11-19 15:12:13.537317'),(33,'hotel_app','0012_auto_20200914_1929','2023-11-19 15:12:14.506608'),(34,'hotel_app','0013_auto_20200927_1627','2023-11-19 15:12:19.691946'),(35,'hotel_app','0014_alter_checkin_phone_number','2023-11-19 15:12:20.709565'),(36,'hotel_app','0015_alter_booking_phone_number','2023-11-19 15:12:21.700816'),(37,'outdoor','0001_initial','2023-11-19 15:12:22.653225'),(38,'outdoorbooking','0001_initial','2023-11-19 15:12:23.652516'),(39,'eventbooking','0002_rename_arrivaldate_eventbooking_bookingdate_and_more','2023-12-16 16:58:57.498234'),(40,'eventbooking','0003_rename_bookingdate_eventbooking_arrivaldate','2023-12-16 18:49:56.728879'),(41,'outdoorbooking','0002_alter_outdoorbooking_departuretime','2023-12-17 15:24:47.539640'),(42,'outdoorbooking','0003_rename_departuretime_outdoorbooking_arrivaldate','2023-12-17 16:29:16.517370');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1ceackxhi65758d5jckr7jkoc9me3tuf','.eJxVjMsOgjAQRf-la9MwfYDj0j3fQKYzg6CmTSisjP-uJCx0e88592UG2tZp2KouwyzmYsCcfrdE_NC8A7lTvhXLJa_LnOyu2INW2xfR5_Vw_w4mqtO3ZkcMwpFiCA0wjL7ziuhlRGqUWnCJMERgaVFSdw4Nthi8Mmrk6Jx5fwDtRDfR:1r6S4K:ARhl2VAHrTSn5do6din4YKjOYslg4KDcSRZ8Hit48Tw','2023-12-08 09:01:48.760258'),('9i7vxlelenqw7pnx29esdjro1ip7be5o','.eJxVjMsOwiAQAP-FsyFueRQ8evcbyMJupWpoUtqT8d-FpAe9zkzmLQLuWw575TXMJC7CidMvi5ieXLqgB5b7ItNStnWOsifysFXeFuLX9Wj_Bhlr7lseQVsmBWQtkhoUGJqoQT_5AVIEDc5iPEcyhhQ7tL6l2iRs7ejE5wvcSTd3:1r6bxS:auCVE7aNfTbOewD9CXON-45kh9xNrxGewbtlzD-To1k','2023-12-08 19:35:22.030867'),('cit25x4ujglil4cwvu8u5n3074ngxc9f','.eJxVjDsOwyAQRO9CHSGwEbAp0-cMaGF3g5PIlvyprNw9WHKRFNPMezO7SritNW0Lz2kgdVW2V5ffMmN58XgQeuL4mHSZxnUesj4UfdJF3yfi9-10_w4qLrWthXP0fRRHTN6Ujj32vpMILYEpA5lsAEBQSJyzEAOgdRSaYGxw6vMFKTY4YQ:1rD93z:H9nvEMBVL2zBpY0I3XCW9H-DX6Ei_PBvGdwU7st450c','2023-12-26 20:09:07.372476'),('gj3sn8ni8tihvg8wk14b86902vuzryus','.eJxVjMsOwiAQAP-FsyFueRQ8evcbyMJupWpoUtqT8d-FpAe9zkzmLQLuWw575TXMJC7CidMvi5ieXLqgB5b7ItNStnWOsifysFXeFuLX9Wj_Bhlr7lseQVsmBWQtkhoUGJqoQT_5AVIEDc5iPEcyhhQ7tL6l2iRs7ejE5wvcSTd3:1rAZzO:b96oiEwsru_K05lC8Md0vs3GAzwgFuDUBFolVNhlR7M','2023-12-19 18:17:46.603649'),('iqcoe45mh63mp4367qjyztladk6b92ho','.eJxVjEEOwiAQRe_C2pCRQhlcuu8ZyMBMbdVAUtqV8e7apAvd_vfef6lI2zrFrckSZ1YX5dXpd0uUH1J2wHcqt6pzLesyJ70r-qBND5XleT3cv4OJ2vStLQaAgEjcC_QOfMdmpO5sgZOkbLAXNtlmHzJbAUAYwQVBkC6hM6TeH9NjN6M:1r56WR:apxG58nkrFespX5Uxr57RFsnU79ZaxLFmeL6vDeLPEo','2023-12-04 15:49:15.665228');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventbooking_eventbooking`
--

DROP TABLE IF EXISTS `eventbooking_eventbooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventbooking_eventbooking` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `FullName` varchar(300) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `ContactNo` varchar(15) NOT NULL,
  `Package` varchar(200) NOT NULL,
  `ArrivalDate` date NOT NULL,
  `Price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventbooking_eventbooking`
--

LOCK TABLES `eventbooking_eventbooking` WRITE;
/*!40000 ALTER TABLE `eventbooking_eventbooking` DISABLE KEYS */;
INSERT INTO `eventbooking_eventbooking` VALUES (1,'erangi','hansikaerangi4@gmail.com','0775094902','Test','2023-11-24',2000),(2,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(3,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(4,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(5,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(6,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(7,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(8,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(9,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(10,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(11,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(12,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(13,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(14,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(15,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(16,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(17,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(18,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(19,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(20,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(21,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(22,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(23,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(24,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(25,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(26,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(27,'erangi','hansikaerangi4@gmail.com','0775094902','Test kii','2023-11-24',2000),(28,'Lasanthga','lsanjeewa18@gmail.com','0775094902','Test','2023-11-16',2000),(29,'erangi','hansikaerangi4@gmail.com','0775094902','Package','2023-11-19',2000),(30,'erangi','hansikaerangi4@gmail.com','0775094902','Package','2023-11-20',2000),(31,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(32,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(33,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(34,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(35,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(36,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(37,'erangi','iit19059@std.uwu.ac.lk','0775094902','Package','2023-11-20',2000),(38,'Erangi','iit19059@std.uwu.ac.lk','0775094902','Silver','2023-11-19',545435),(39,'erangi','hansikaerangi4@gmail.com','0775094902','package1','2023-11-21',20000),(40,'erangi','hansikaerangi4@gmail.com','0705891666','cottaage','2023-11-21',10000),(41,'erangi','hansikaerangi4@gmail.com','0705891666','Silver Package','2023-11-21',10000),(42,'dfsdf','fdfd@gmail.com','0775094902','Pckg1','2023-11-16',20000),(43,'d','fdfd@gmail.com','0775094902','Pckg1','2023-11-16',20000),(44,'Test 2','test@gmail.com','234234','Silver Package','2023-12-27',30000),(45,'Test 4','test4@gmail.com','123123213','Silver Package','2023-12-30',500000),(46,'erangi','hansikaerangi4@gmail.com','4662374667','Silver Package','2023-12-18',12500),(47,'Sanjeewa','lsanjeewa18@gmail.com','0775094902','Gold Package','2023-12-17',15000),(48,'Sanjeewa','lsanjeewa18@gmail.com','0775094902','Silver Package','2023-12-18',10000),(49,'sanjeewa','lsanjeewa18@gmail.com','0775094902','Silver Package','2023-12-20',15000),(50,'Lasantha','hansikaerangi4@gmail.com','0775094902','Silver Package','2023-12-19',7500),(51,'Hansika','hansikaerangi4@gmail.com','0775094902','Gold Package','2023-12-20',10000),(52,'Gayani','gayani.mankotte@gmail.com','0776785345','Silver Package','2023-12-19',2500),(53,'erangi','hansikaerangi4@gmail.com','4234324234','Pool Side Package','2023-12-18',30000),(54,'Ushani','gayani.mankotte@gmail.com','4234324234','Pool Side Package','2023-12-19',20000),(55,'Ashra','asra88270@gmail.com','0775094902','Silver Package','2023-12-20',125000),(56,'Tharushi','hansikaerangi4@gmail.com','0779684634','Silver Package','2023-12-19',125000),(57,'Tharushi Navodya','hansikaerangi4@gmail.com','0716565456','Silver Package','2024-01-17',125000),(58,'Gagani karunathilake','hansikaerangi4@gmail.com','0717676665','Silver Package','2023-12-28',92500),(59,'Tharushi','hansikaerangi4@gmail.com','0715458445','Silver Package','2023-12-21',125000),(60,'Hansikaa','hansikaerangi4@gmail.com','0705891656','Silver Package','2023-12-27',125000),(61,'Erangi','hansikaerangi4@gmail.com','705678344','Platinum Package','2023-12-01',7000000);
/*!40000 ALTER TABLE `eventbooking_eventbooking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventpackage_eventpackage`
--

DROP TABLE IF EXISTS `eventpackage_eventpackage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventpackage_eventpackage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `event_name` varchar(100) NOT NULL,
  `desc` varchar(300) NOT NULL,
  `price` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventpackage_eventpackage`
--

LOCK TABLES `eventpackage_eventpackage` WRITE;
/*!40000 ALTER TABLE `eventpackage_eventpackage` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventpackage_eventpackage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback_feedback`
--

DROP TABLE IF EXISTS `feedback_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback_feedback` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `message` varchar(300) NOT NULL,
  `rating` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_feedback`
--

LOCK TABLES `feedback_feedback` WRITE;
/*!40000 ALTER TABLE `feedback_feedback` DISABLE KEYS */;
INSERT INTO `feedback_feedback` VALUES (1,'Erangi','Hiii','4'),(2,'Erangi','Good','9'),(3,'TestUser','Test Msg','5'),(4,'Erangi','good','5'),(5,'Erangi','ftft','5'),(6,'Erangi','good','5'),(7,'Erangi','good','5'),(8,'Erangi Pelawage','hello','5'),(9,'Erangi','Good...','6'),(10,'Pelawagee','goodd','7');
/*!40000 ALTER TABLE `feedback_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_booking`
--

DROP TABLE IF EXISTS `hotel_app_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `room_id` int NOT NULL,
  `booking_date` datetime(6) NOT NULL,
  `checkout_date` datetime(6) DEFAULT NULL,
  `checking_date` datetime(6) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `phone_number` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_booking_room_id_4f53cbb3_fk_hotel_app_room_id` (`room_id`),
  KEY `hotel_app_booking_customer_id_28e51e2a_fk_auth_user_id` (`customer_id`),
  CONSTRAINT `hotel_app_booking_customer_id_28e51e2a_fk_auth_user_id` FOREIGN KEY (`customer_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `hotel_app_booking_room_id_4f53cbb3_fk_hotel_app_room_id` FOREIGN KEY (`room_id`) REFERENCES `hotel_app_room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_booking`
--

LOCK TABLES `hotel_app_booking` WRITE;
/*!40000 ALTER TABLE `hotel_app_booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel_app_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_category`
--

DROP TABLE IF EXISTS `hotel_app_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_category`
--

LOCK TABLES `hotel_app_category` WRITE;
/*!40000 ALTER TABLE `hotel_app_category` DISABLE KEYS */;
INSERT INTO `hotel_app_category` VALUES (1,'Silver'),(2,'Single'),(3,'Single'),(4,'Triple Room'),(5,'Single Room'),(6,'Single Room'),(7,'Silver Room'),(8,'Double Room'),(9,'Quad Room');
/*!40000 ALTER TABLE `hotel_app_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_checkin`
--

DROP TABLE IF EXISTS `hotel_app_checkin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_checkin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `email` varchar(254) DEFAULT NULL,
  `phone_number` varchar(10) DEFAULT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_checkin_room_id_c934201d_fk_hotel_app_room_id` (`room_id`),
  KEY `hotel_app_checkin_customer_id_d7607316_fk_auth_user_id` (`customer_id`),
  CONSTRAINT `hotel_app_checkin_customer_id_d7607316_fk_auth_user_id` FOREIGN KEY (`customer_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `hotel_app_checkin_room_id_c934201d_fk_hotel_app_room_id` FOREIGN KEY (`room_id`) REFERENCES `hotel_app_room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_checkin`
--

LOCK TABLES `hotel_app_checkin` WRITE;
/*!40000 ALTER TABLE `hotel_app_checkin` DISABLE KEYS */;
INSERT INTO `hotel_app_checkin` VALUES (1,2,'hansikaerangi4@gmail.com','0170589166',1),(2,3,'iit19059@std.uwu.ac.lk','0177509490',6),(4,11,'hansikaerangi4@gmail.com','0117058916',3),(5,11,'hansikaerangi4@gmail.com','0117058916',5);
/*!40000 ALTER TABLE `hotel_app_checkin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_checkout`
--

DROP TABLE IF EXISTS `hotel_app_checkout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_checkout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `check_out_date` datetime(6) NOT NULL,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_checkout_customer_id_d0f5f84c_fk_hotel_app_customer_id` (`customer_id`),
  CONSTRAINT `hotel_app_checkout_customer_id_d0f5f84c_fk_hotel_app_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `hotel_app_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_checkout`
--

LOCK TABLES `hotel_app_checkout` WRITE;
/*!40000 ALTER TABLE `hotel_app_checkout` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel_app_checkout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_customer`
--

DROP TABLE IF EXISTS `hotel_app_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_customer_customer_id_0062e7ec_fk_auth_user_id` (`customer_id`),
  CONSTRAINT `hotel_app_customer_customer_id_0062e7ec_fk_auth_user_id` FOREIGN KEY (`customer_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_customer`
--

LOCK TABLES `hotel_app_customer` WRITE;
/*!40000 ALTER TABLE `hotel_app_customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel_app_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_payment`
--

DROP TABLE IF EXISTS `hotel_app_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_payment_customer_id_407f84ea_fk_hotel_app_customer_id` (`customer_id`),
  CONSTRAINT `hotel_app_payment_customer_id_407f84ea_fk_hotel_app_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `hotel_app_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_payment`
--

LOCK TABLES `hotel_app_payment` WRITE;
/*!40000 ALTER TABLE `hotel_app_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel_app_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_room`
--

DROP TABLE IF EXISTS `hotel_app_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `price_per_night` decimal(8,3) NOT NULL,
  `room_slug` varchar(50) NOT NULL,
  `is_booked` tinyint(1) NOT NULL,
  `capacity` int NOT NULL,
  `room_size` varchar(5) NOT NULL,
  `category_id` int NOT NULL,
  `cover_image` varchar(100) NOT NULL,
  `featured` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_room_category_id_f0774359_fk_hotel_app_category_id` (`category_id`),
  KEY `hotel_app_room_room_slug_633fcf94` (`room_slug`),
  CONSTRAINT `hotel_app_room_category_id_f0774359_fk_hotel_app_category_id` FOREIGN KEY (`category_id`) REFERENCES `hotel_app_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_room`
--

LOCK TABLES `hotel_app_room` WRITE;
/*!40000 ALTER TABLE `hotel_app_room` DISABLE KEYS */;
INSERT INTO `hotel_app_room` VALUES (1,'Silver Room',18000.000,'6',1,6,'70*3',7,'6/room_cover/calming-colours-cozy-room.jpg',1),(2,'Single Room',7000.000,'1',0,1,'120*3',6,'1/room_cover/pexels-pixabay-164595.jpg',0),(3,'Triple Room',15000.000,'3',1,3,'260*2',4,'3/room_cover/Port-Orleans-French-Quarter-Standard-Room-compressor_1.jpg',0),(4,'Double Room',12000.000,'2',0,2,'150*2',8,'2/room_cover/twin-room-double-room-jaka-roznica.jpg',0),(5,'Quad Room',25000.000,'4',1,4,'360*3',9,'4/room_cover/pexels-andrew-neel-3201763.jpg',0),(6,'Double Room',15000.000,'2',1,2,'260*2',8,'2/room_cover/pexels-pixabay-271624.jpg',0);
/*!40000 ALTER TABLE `hotel_app_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_app_roomdisplayimages`
--

DROP TABLE IF EXISTS `hotel_app_roomdisplayimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_app_roomdisplayimages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `display_images` varchar(100) NOT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_app_roomdispla_room_id_02c476a3_fk_hotel_app` (`room_id`),
  CONSTRAINT `hotel_app_roomdispla_room_id_02c476a3_fk_hotel_app` FOREIGN KEY (`room_id`) REFERENCES `hotel_app_room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_app_roomdisplayimages`
--

LOCK TABLES `hotel_app_roomdisplayimages` WRITE;
/*!40000 ALTER TABLE `hotel_app_roomdisplayimages` DISABLE KEYS */;
INSERT INTO `hotel_app_roomdisplayimages` VALUES (1,'6/room_display/calming-colours-cozy-room.jpg',1),(2,'6/room_display/calming-colours-cozy-room_UUjKuXB.jpg',1),(3,'6/room_display/calming-colours-cozy-room_iKTAVtv.jpg',1),(4,'1/room_display/pexels-pixabay-164595.jpg',2),(5,'1/room_display/pexels-pixabay-164595_5yjrjZY.jpg',2),(6,'1/room_display/pexels-pixabay-164595_grD3jAQ.jpg',2),(7,'3/room_display/Port-Orleans-French-Quarter-Standard-Room-compressor_1.jpg',3),(8,'3/room_display/Port-Orleans-French-Quarter-Standard-Room-compressor_1_uQQEQaf.jpg',3),(9,'3/room_display/Port-Orleans-French-Quarter-Standard-Room-compressor_1_BBXyOoy.jpg',3),(10,'2/room_display/twin-room-double-room-jaka-roznica.jpg',4),(11,'2/room_display/twin-room-double-room-jaka-roznica_UxhUNwD.jpg',4),(12,'2/room_display/twin-room-double-room-jaka-roznica_7CqRcSO.jpg',4),(13,'4/room_display/pexels-andrew-neel-3201763.jpg',5),(14,'4/room_display/pexels-andrew-neel-3201763_jl2gf3w.jpg',5),(15,'4/room_display/pexels-andrew-neel-3201763_Jn3J3Mr.jpg',5),(16,'2/room_display/pexels-pixabay-271624.jpg',6),(17,'2/room_display/Double_za6ttqm.png',6),(18,'2/room_display/pexels-pixabay-271624_nrv8l89.jpg',6);
/*!40000 ALTER TABLE `hotel_app_roomdisplayimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outdoor_outdoor`
--

DROP TABLE IF EXISTS `outdoor_outdoor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outdoor_outdoor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `location_name` varchar(100) NOT NULL,
  `desc` varchar(300) NOT NULL,
  `price` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outdoor_outdoor`
--

LOCK TABLES `outdoor_outdoor` WRITE;
/*!40000 ALTER TABLE `outdoor_outdoor` DISABLE KEYS */;
INSERT INTO `outdoor_outdoor` VALUES (1,'POOL SIDE LOCATION','We have a pool side with picturesque views','10,000'),(2,'CATTAGE SIDE L','We have Luxury cottages with pleasant sceneries','12,000'),(3,'GARDEN SIDE PACKAGE','We have well managed garden with nice views.','35,000'),(4,'POOL SIDE','AweSome DINNER','20000'),(5,'Garden view','Near flower garden','20000');
/*!40000 ALTER TABLE `outdoor_outdoor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outdoorbooking_outdoorbooking`
--

DROP TABLE IF EXISTS `outdoorbooking_outdoorbooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outdoorbooking_outdoorbooking` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `FullName` varchar(300) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `ContactNo` varchar(200) NOT NULL,
  `Package` varchar(200) NOT NULL,
  `ArrivalTime` time(6) NOT NULL,
  `ArrivalDate` date NOT NULL,
  `Price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outdoorbooking_outdoorbooking`
--

LOCK TABLES `outdoorbooking_outdoorbooking` WRITE;
/*!40000 ALTER TABLE `outdoorbooking_outdoorbooking` DISABLE KEYS */;
INSERT INTO `outdoorbooking_outdoorbooking` VALUES (1,'LAsantha','Sanjeewa@gmail.com','0775094902','asdasd','15:53:25.000000','2023-12-17',3342),(2,'Erangi','hansikaerangi4@gmail.com','0705891666','Pool Side Package','10:05:00.000000','2023-12-19',20000),(3,'Erangi','hansikaerangi4@gmail.com','0705891666','Pool Side Package','16:00:00.000000','2023-12-19',20000),(4,'Test','hansikaerangi4@gmail.com','705891664','Pool Side Package','15:00:00.000000','2023-12-20',10000),(5,'erangi','hansikaerangi4@gmail.com','0705891666','Pool Side Package','13:40:00.000000','2023-12-20',60000);
/*!40000 ALTER TABLE `outdoorbooking_outdoorbooking` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-19 20:05:18
