const prisma = require('../lib/prisma.js');

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
    if (formData.title.length < 3) throw new Error('The title is too short');
    const wiki = await prisma.wiki.create({
      data: {
        title: formData.title,
        content: formData.content,
        locations: JSON.parse(formData.locations),
        interests: JSON.parse(formData.interests),
      },
    });
    console.log(`Wiki ${wiki.title} has been created!`)

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
        OR: [
          { interests: { has: params?.prop } },
          { locations: { has: params?.prop } },
        ]
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