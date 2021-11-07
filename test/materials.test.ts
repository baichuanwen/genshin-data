import GenshinData, { languages } from '../src';

describe('Materials Method', () => {
  const genshinData = new GenshinData({ language: 'english' });
  it('should return only fields specified on "select"', async () => {
    const materials = await genshinData.commonMaterials({
      select: ['name', 'id'],
    });

    expect(materials[0].id).toBeDefined();
    expect(materials[0].name).toBeDefined();

    expect(materials[0].description).toBeUndefined();
  });
});

for (const language of languages) {
  describe(`Materials ${language}`, () => {
    const genshinData = new GenshinData({ language });

    it('should return all common materials', async () => {
      const materials = await genshinData.commonMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.source).toBeDefined();
      }
    });

    it('should return all elemental stone materials', async () => {
      const materials = await genshinData.elementalStoneMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.source).toBeDefined();
      }
    });

    it('should return all food', async () => {
      const materials = await genshinData.food();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.dish_type).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.results).toBeDefined();
        expect(material.ingredients).toBeDefined();
      }
    });

    it('should return all ingredients', async () => {
      const materials = await genshinData.ingredients();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
      }
    });

    it('should return all jewels materials', async () => {
      const materials = await genshinData.jewelsMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.source).toBeDefined();
      }
    });

    it('should return all local materials', async () => {
      const materials = await genshinData.localMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.source).toBeDefined();
      }
    });

    it('should return all potions', async () => {
      const materials = await genshinData.potions();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.effect).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.craft).toBeDefined();
      }
    });

    it('should return all talent lvl-up materials', async () => {
      const materials = await genshinData.talentLvlUpMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.source).toBeDefined();
      }
    });

    it('should return all weapon primary materials', async () => {
      const materials = await genshinData.weaponPrimaryMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.source).toBeDefined();
        expect(material.domain).toBeDefined();
        expect(material.days).toBeDefined();
        expect(material.location).toBeDefined();
      }
    });

    it('should return all weapon secondary materials', async () => {
      const materials = await genshinData.weaponSecondaryMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.source).toBeDefined();
      }
    });

    it('should return all weapon experience materials', async () => {
      const materials = await genshinData.weaponExpMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.exp).toBeDefined();
      }
    });

    it('should return all character experience materials', async () => {
      const materials = await genshinData.characterExpMaterials();
      for (const material of materials) {
        expect(material.id).toBeDefined();
        expect(material.name).toBeDefined();
        expect(material.description).toBeDefined();
        expect(material.rarity).toBeDefined();
        expect(material.exp).toBeDefined();
      }
    });
  });
}
