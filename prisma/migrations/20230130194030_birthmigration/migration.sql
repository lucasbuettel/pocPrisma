-- CreateTable
CREATE TABLE "hometown" (
    "id" SERIAL NOT NULL,
    "id-user" INTEGER NOT NULL,
    "hometown" VARCHAR(255) NOT NULL,

    CONSTRAINT "hometown_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthMonth" TEXT NOT NULL,
    "age" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work" (
    "id" SERIAL NOT NULL,
    "id-user" INTEGER NOT NULL,
    "work" VARCHAR(255) NOT NULL,

    CONSTRAINT "work_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "public.users_cpf_key" ON "users"("cpf");
