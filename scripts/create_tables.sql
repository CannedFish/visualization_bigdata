CREATE TABLE IF NOT EXISTS phy_health (
  `timestamp` TIMESTAMP NOT NULL,
  `host_running` SMALLINT,
  `host_down` SMALLINT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS cluster_resource (
  `cluster` TINYINT NOT NULL,
  `nodes` SMALLINT,
  `cores` SMALLINT,
  `memory` INT,
  `disk` INT,
  PRIMARY KEY (`cluster`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
    
CREATE TABLE IF NOT EXISTS cluster_status (
  `timestamp` TIMESTAMP NOT NULL,
  `cluster` TINYINT NOT NULL,
  `cpu_percent` FLOAT,
  `mem_used` INT,
  `disk_used` INT,
  `disk_input` FLOAT,
  `disk_output` FLOAT,
  `net_input` FLOAT,
  `net_output` FLOAT,
  `health` TINYINT,
  PRIMARY KEY (`timestamp`, `cluster`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS vir_resource (
  `vcores` INT,
  `vmems` INT,
  `hdfs_capacity` INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS vir_res_status (
  `timestamp` TIMESTAMP NOT NULL,
  `vcore_used` INT,
  `vmem_used` INT,
  `hdfs_used` INT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS service_status (
  `timestamp` TIMESTAMP NOT NULL,
  `service_name` VARCHAR(128) NOT NULL,
  `cluster` TINYINT,
  `health` TINYINT,
  PRIMARY KEY (`timestamp`, `service_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS data_collector_volume (
  `timestamp` TIMESTAMP NOT NULL,
  `volume` FLOAT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS msg_queue_volume (
  `timestamp` TIMESTAMP NOT NULL,
  `volume_in` FLOAT,
  `volume_out` FLOAT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS data_statistics (
  `timestamp` TIMESTAMP NOT NULL,
  `records` INT,
  PRIMARY KEY (`timestamp`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS user_statistics (
  `timestamp` TIMESTAMP NOT NULL,
  `job_id` VARCHAR(128),
  `user` VARCHAR(128),
  `vcore_used` INT,
  `memory_used` INT,
  `during_time` INT,
  `status` VARCHAR(32),
  PRIMARY KEY (`timestamp`, `job_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

