CREATE TABLE IF NOT EXISTS "menu"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" TEXT,
  CONSTRAINT "name_UNIQUE"
    UNIQUE("name")
);
--
CREATE TABLE IF NOT EXISTS "component"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" TEXT,
  "description" TEXT,
  CONSTRAINT "name_UNIQUE"
    UNIQUE("name")
);
--
CREATE TABLE IF NOT EXISTS "album"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "year" NUMERIC NOT NULL
);
--
CREATE TABLE IF NOT EXISTS "category"(
  "id" INTEGER PRIMARY KEY NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT
);
--
CREATE TABLE IF NOT EXISTS "widget"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" TEXT,
  "description" TEXT,
  "path" TEXT,
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
--
CREATE TABLE IF NOT EXISTS "menu_item"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "icon" TEXT NOT NULL,
  "path" TEXT NOT NULL,
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
--
CREATE TABLE IF NOT EXISTS "media"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "legend" TEXT,
  "format" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "path" TEXT NOT NULL,
  "album_id" INTEGER NOT NULL,
  "component_id" INTEGER NOT NULL,
  "type" TEXT NOT NULL,
  CONSTRAINT "fk_movies_albums1"
    FOREIGN KEY("album_id")
    REFERENCES "album"(id),
  CONSTRAINT "fk_movie_component1"
    FOREIGN KEY("component_id")
    REFERENCES "component"("id")
);
--
CREATE TABLE IF NOT EXISTS "category_has_media"(
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