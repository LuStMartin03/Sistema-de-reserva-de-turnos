import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.service.createMany({
    data: [
      {
        name: "Semi Permanente",
        price: 10000,
        durationMin: 60,
      },
      {
        name: "Soft Gel",
        price: 20000,
        durationMin: 90,
      },
      {
        name: "Kapping",
        price: 30000,
        durationMin: 75,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Servicios cargados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
