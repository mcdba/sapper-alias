import getDb from '@/db';
export async function get(req, res) {
  try {
    const db = await getDb();

    const d = {
      _id: '5fcdfbe5dac2f434805303e6',
      published: true,
      images: ['N396_N397.jpg'],
      oldId: 3827,
      catalogCategoryId: '134',
      name: 'N397',
      description: 'Фильтр сеточный для кофемашины 36mm',
      image: 'N396_N397.jpg',
      position: 40,
      nnum: 51431,
      orderedCount: 3,
      __v: 0,
      createdAt: '2020-12-07T09:54:48.056Z',
      updatedAt: '2020-12-07T09:54:48.056Z',
    };
    const data = await db
      .collection('catalogitems')
      .find(
        {
          published: true,
          catalogCategoryId: req.params.menuId,
        },
        {
          projection: {
            _id: false,
            oldId: true,
            name: true,
            images: true,
            description: true,
            nnum: true,
            orderedCount: true,
          },
        }
      )
      .sort({ orderedCount: -1, position: 1, name: 1 })
      .toArray();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
