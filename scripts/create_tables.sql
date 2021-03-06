CREATE TABLE IF NOT EXISTS phy_health (
  `timestamp` VARCHAR(64) NOT NULL,
  `host_running` SMALLINT,
  `host_down` SMALLINT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS cluster_resource (
  `timestamp` VARCHAR(64) NOT NULL,
  `cluster` TINYINT NOT NULL,
  `nodes` SMALLINT,
  `cores` SMALLINT,
  `memory` BIGINT UNSIGNED,
  `disk` BIGINT UNSIGNED,
  PRIMARY KEY (`timestamp`, `cluster`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
    
CREATE TABLE IF NOT EXISTS cluster_status (
  `timestamp` VARCHAR(64) NOT NULL,
  `cluster` TINYINT NOT NULL,
  `cpu_percent` FLOAT,
  `mem_used` BIGINT UNSIGNED,
  `disk_used` BIGINT UNSIGNED,
  `disk_input` FLOAT,
  `disk_output` FLOAT,
  `net_input` FLOAT,
  `net_output` FLOAT,
  `health` TINYINT,
  PRIMARY KEY (`timestamp`, `cluster`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS vir_resource (
  `timestamp` VARCHAR(64) NOT NULL,
  `vcores` INT,
  `vmems` BIGINT UNSIGNED,
  `hdfs_capacity` BIGINT UNSIGNED,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS vir_res_status (
  `timestamp` VARCHAR(64) NOT NULL,
  `vcore_used` INT,
  `vmem_used` BIGINT UNSIGNED,
  `hdfs_used` BIGINT UNSIGNED,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS service_status (
  `timestamp` VARCHAR(64) NOT NULL,
  `service_name` VARCHAR(128) NOT NULL,
  `cluster` TINYINT,
  `health` TINYINT,
  PRIMARY KEY (`timestamp`, `service_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS data_collector_volume (
  `timestamp` VARCHAR(64) NOT NULL,
  `volume` FLOAT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS msg_queue_volume (
  `timestamp` VARCHAR(64) NOT NULL,
  `volume_in` FLOAT,
  `volume_out` FLOAT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS data_statistics (
  `timestamp` VARCHAR(64) NOT NULL,
  `records` BIGINT UNSIGNED,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS user_statistics (
  `timestamp` VARCHAR(64) NOT NULL,
  `job_id` VARCHAR(128),
  `user` VARCHAR(128),
  `vcore_seconds` INT,
  `memory_used` BIGINT UNSIGNED,
  `during_time` INT,
  `status` VARCHAR(32),
  PRIMARY KEY (`timestamp`, `job_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

