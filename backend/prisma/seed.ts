import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Materiais (idempotente por (name, unit))
  const materials = [
    { name: 'Garrafa PET', unit: 'kg', pointsPerUnit: 50 },
    { name: 'Papel',       unit: 'kg', pointsPerUnit: 20 },
    { name: 'Vidro',       unit: 'kg', pointsPerUnit: 15 },
    { name: 'Alumínio',    unit: 'kg', pointsPerUnit: 80 },
    { name: 'Eletrônicos', unit: 'un', pointsPerUnit: 100 },
  ];
  for (const m of materials) {
    await prisma.materialType.upsert({
      where: { name_unit: { name: m.name, unit: m.unit } }, // usa @@unique([name, unit])
      update: { pointsPerUnit: m.pointsPerUnit },
      create: m,
    });
  }

  // Pontos de coleta (IDs fixos p/ idempotência)
  await prisma.collectionPoint.upsert({
    where: { id: 'cp_fortaleza_centro' },
    update: {},
    create: {
      id: 'cp_fortaleza_centro',
      name: 'Eco Ponto - Centro',
      lat: -3.7319,
      lng: -38.5267,
      address: 'Rua Principal, 100 - Centro, Fortaleza',
      active: true,
    },
  });
  await prisma.collectionPoint.upsert({
    where: { id: 'cp_fortaleza_aldeota' },
    update: {},
    create: {
      id: 'cp_fortaleza_aldeota',
      name: 'Eco Ponto - Aldeota',
      lat: -3.7365,
      lng: -38.4900,
      address: 'Av. das Árvores, 200 - Aldeota, Fortaleza',
      active: true,
    },
  });

  // Parceiros e recompensas
  const partner = await prisma.partner.upsert({
    where: { name: 'Bike&Café' },
    update: {},
    create: { name: 'Bike&Café', contact: '@bikecafe' },
  });
  const partner2 = await prisma.partner.upsert({
    where: { name: 'Mercadinho Verde' },
    update: {},
    create: { name: 'Mercadinho Verde', contact: '(85) 90000-0000' },
  });

  await prisma.reward.upsert({
    where: { id: 'rw_bikecafe_5' },
    update: { active: true, stock: 100 },
    create: {
      id: 'rw_bikecafe_5',
      partnerId: partner.id,
      title: 'R$5 de desconto',
      cost: 150,
      stock: 100,
      active: true,
    },
  });
  await prisma.reward.upsert({
    where: { id: 'rw_bikecafe_10' },
    update: { active: true, stock: 50 },
    create: {
      id: 'rw_bikecafe_10',
      partnerId: partner.id,
      title: 'R$10 de desconto',
      cost: 250,
      stock: 50,
      active: true,
    },
  });
  await prisma.reward.upsert({
    where: { id: 'rw_mercado_eco' },
    update: { active: true, stock: 80 },
    create: {
      id: 'rw_mercado_eco',
      partnerId: partner2.id,
      title: '5% OFF em produtos eco',
      cost: 200,
      stock: 80,
      active: true,
    },
  });

  // Dicas
  const tips = [
    { id: 'tip1', text: 'Lave embalagens antes de reciclar.', order: 1 },
    { id: 'tip2', text: 'Separe vidro, metal, papel e plástico.', order: 2 },
    { id: 'tip3', text: 'Amasse latas para economizar espaço.', order: 3 },
    { id: 'tip4', text: 'Evite misturar recicláveis com orgânicos.', order: 4 },
  ];
  for (const t of tips) {
    await prisma.tip.upsert({
      where: { id: t.id },
      update: { text: t.text, order: t.order, active: true },
      create: { ...t, active: true },
    });
  }
}

main()
  .then(() => console.log('✅ Seed concluído'))
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
