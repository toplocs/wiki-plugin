const prisma = require('./lib/prisma.js');

async function findWiki(query) {
  try {
    const wikis = await prisma.wiki.findMany({
      where: {
        title: {
          contains: query.title,
          mode: 'insensitive'
        }
      },
      take: 20,
    });

    return { success: wikis };
  } catch (e) {
    console.error(e);
    return { error: e.message };
  }
}

const createWiki = async (
  formData,
) => {
  try {
    const interests = JSON.parse(formData.interests);
    const locations = JSON.parse(formData.locations);
    if (!interests.length && !locations.length) {
      throw new Error('The wiki room needs at leats one reference point');
    }
    if (formData.title.length < 3) throw new Error('The title is too short');
    const wiki = await prisma.wiki.create({
      data: {
        title: formData.title,
        content: formData.content,
        ids: [
          ...interests.map(x => x.id),
          ...locations.map(x => x.id)
        ],
        interests: interests,
        locations: locations,
      },
    });
    console.log(`Wiki ${wiki.title} has been created!`);
    console.log(wiki);

    return { success: wiki };
  } catch (e) {
    console.error(e);
    return { error: e.message };
  }
}

const updateWiki = async (
  formData,
) => {
  try {
    const wiki = await prisma.wiki.update({
      where: {
        id: formData.wikiId,
      },
      data: {
        content: formData.content,
      },
    });

    return { success: wiki };
  } catch(e) {
    console.error(e);
    return { error: e.message };
  }
}

const getWikiById = async (params) => {
  try {
    const wiki = await prisma.wiki.findUnique({
      where: {
        id: params?.id,
      },
    });

    return { success: wiki };
  } catch(e) {
    console.error(e);
    return { error: e.message };
  }
}

const getWikiPages = async (params) => {
  try {
    const wikis = await prisma.wiki.findMany({
      where: {
        ids: { has: params.prop }
      },
      select: {
        id: true,
        title: true,
      },
      take: 20,
    });

    return { success: wikis };
  } catch (e) {
    console.error(e);
    return { error: e.message };
  }
}

module.exports = {
  createWiki,
  updateWiki,
  getWikiById,
  getWikiPages,
};