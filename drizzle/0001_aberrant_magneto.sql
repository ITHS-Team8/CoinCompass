ALTER TABLE `projects` RENAME TO `expenses`;--> statement-breakpoint
DROP INDEX IF EXISTS `projects_id_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `expenses_id_unique` ON `expenses` (`id`);