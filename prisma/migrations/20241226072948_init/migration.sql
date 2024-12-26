-- CreateTable
CREATE TABLE `AnimeList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `sumber` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `studio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
