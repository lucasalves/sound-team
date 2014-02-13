-- Creator:       MySQL Workbench 5.2.47/ExportSQLite plugin 2009.12.02
-- Author:        Lucas Alves
-- Caption:       Lucas Alves
-- Project:       Sound-team
-- Changed:       2014-02-08 17:46
-- Created:       2014-02-08 16:47
PRAGMA foreign_keys = OFF;

BEGIN;
CREATE TABLE "menu"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" VARCHAR(45),
  CONSTRAINT "name_UNIQUE"
    UNIQUE("name")
);
CREATE TABLE "component"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" VARCHAR(45),
  "description" TEXT,
  CONSTRAINT "name_UNIQUE"
    UNIQUE("name")
);
CREATE TABLE "album"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(45) NOT NULL,
  "year" DATETIME NOT NULL
);
CREATE TABLE "category"(
  "id" INTEGER PRIMARY KEY NOT NULL,
  "name" VARCHAR(45) NOT NULL,
  "description" TEXT
);
CREATE TABLE "image"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" VARCHAR(200) NOT NULL,
  "description" TEXT,
  "size" INTEGER NOT NULL,
  "format" VARCHAR(45) NOT NULL,
  "width" INTEGER NOT NULL,
  "height" VARCHAR(45) NOT NULL,
  "path" TEXT NOT NULL
);
CREATE TABLE "image_has_category"(
  "image_id" INTEGER NOT NULL,
  "category_id" INTEGER NOT NULL,
  PRIMARY KEY("image_id","category_id"),
  CONSTRAINT "fk_image_has_category_image1"
    FOREIGN KEY("image_id")
    REFERENCES "image"("id"),
  CONSTRAINT "fk_image_has_category_category1"
    FOREIGN KEY("category_id")
    REFERENCES "category"("id")
);
CREATE INDEX "image_has_category.fk_image_has_category_category1_idx" ON "image_has_category"("category_id");
CREATE INDEX "image_has_category.fk_image_has_category_image1_idx" ON "image_has_category"("image_id");
CREATE TABLE "widget"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" VARCHAR(45),
  "description" TEXT,
  "path" VARCHAR(100),
  "order" INTEGER NOT NULL,
  "component_id" INTEGER NOT NULL,
  CONSTRAINT "path_UNIQUE"
    UNIQUE("path"),
  CONSTRAINT "order_UNIQUE"
    UNIQUE("order"),
  CONSTRAINT "fk_widge_component1"
    FOREIGN KEY("component_id")
    REFERENCES "component"("id")
);
CREATE INDEX "widget.fk_widge_component1_idx" ON "widget"("component_id");
CREATE TABLE "menu_item"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" VARCHAR(45) NOT NULL,
  "description" VARCHAR(45),
  "icon" VARCHAR(45) NOT NULL,
  "path" VARCHAR(100) NOT NULL,
  "menu_id" INTEGER NOT NULL,
  "component_id" INTEGER NOT NULL,
  CONSTRAINT "name_UNIQUE"
    UNIQUE("name"),
  CONSTRAINT "fk_itens_menu_menus"
    FOREIGN KEY("menu_id")
    REFERENCES "menu"("id"),
  CONSTRAINT "fk_menu_item_component1"
    FOREIGN KEY("component_id")
    REFERENCES "component"("id")
);
CREATE INDEX "menu_item.fk_itens_menu_menus_idx" ON "menu_item"("menu_id");
CREATE INDEX "menu_item.fk_menu_item_component1_idx" ON "menu_item"("component_id");
CREATE TABLE "media"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(200),
  "legend" LONGTEXT,
  "format" VARCHAR(45) NOT NULL,
  "size" INTEGER NOT NULL,
  "path" TEXT NOT NULL,
  "album_id" INTEGER NOT NULL,
  "component_id" INTEGER NOT NULL,
  "type" VARCHAR(45) NOT NULL,
  CONSTRAINT "fk_movies_albums1"
    FOREIGN KEY()
    REFERENCES "album"(),
  CONSTRAINT "fk_movie_component1"
    FOREIGN KEY("component_id")
    REFERENCES "component"("id")
);
CREATE INDEX "media.fk_movie_component1_idx" ON "media"("component_id");
CREATE TABLE "category_has_media"(
  "category_id" INTEGER NOT NULL,
  "media_id" INTEGER NOT NULL,
  PRIMARY KEY("category_id","media_id"),
  CONSTRAINT "fk_category_has_movie_category1"
    FOREIGN KEY("category_id","media_id")
    REFERENCES "category"("id","id"),
  CONSTRAINT "fk_category_has_movie_movie1"
    FOREIGN KEY("media_id")
    REFERENCES "media"("id")
);
CREATE INDEX "category_has_media.fk_category_has_movie_movie1_idx" ON "category_has_media"("media_id");
CREATE INDEX "category_has_media.fk_category_has_movie_category1_idx" ON "category_has_media"("category_id","media_id");
COMMIT;
