-- AlterTable
ALTER TABLE `saved_schedule` MODIFY `Sched_num` VARCHAR(191) NULL,
    MODIFY `sched_name` VARCHAR(191) NULL,
    MODIFY `start` DATETIME(3) NULL,
    MODIFY `duration` INTEGER NULL,
    MODIFY `increment` INTEGER NULL,
    MODIFY `BreakTime` BOOLEAN NULL;
