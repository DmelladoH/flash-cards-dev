CREATE TABLE `Cards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256) NOT NULL,
	`question` text(256) NOT NULL,
	`answer` text(1000) NOT NULL,
	`category` text(256) NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
