# create query for users table
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `userType` tinyint(1) DEFAULT '0' COMMENT '0 - superAdmin 1- admin',
  PRIMARY KEY (`id`)
  ) ;

 # create query for acess-control-list
CREATE TABLE `acl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `read` tinyint(1) DEFAULT '1' COMMENT '1- allowed 0- not allowed',
  `write` tinyint(1) DEFAULT '0' COMMENT '1 - allowed 0- not allowed',
  `delete` tinyint(1) DEFAULT '0' COMMENT '1 - allowed 0- not allowed',
  `update` tinyint(1) DEFAULT '0' COMMENT '1 -allowed 0 - not allowed',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );

# create query for posts table
CREATE TABLE `posts`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posts` varchar(255) DEFAULT NULL,
  `createdBy` int(11) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`),
   FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
