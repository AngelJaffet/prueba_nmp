CREATE TABLE IF NOT EXISTS `users` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(255) DEFAULT '',
	`age` int(3) unsigned DEFAULT NULL,
	`gender` char(1) DEFAULT NULL,
	`time_created` timestamp(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
	`time_updated` timestamp(3) NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;