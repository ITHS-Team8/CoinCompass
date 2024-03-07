CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`expenseName` text,
	`expenseAmount` integer,
	`expenseDescription` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP,
	`modifedAt` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text,
	`password` text,
	`email` text,
	`first_name` text,
	`last_name` text,
	`age` integer,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP,
	`modifedAt` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `projects_id_unique` ON `projects` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);