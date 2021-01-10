import getDb from '@/db';
let menus;
export async function get(req, res) {
  try {
    if (!menus) {
      const db = await getDb();

      const data = await db
        .collection('catalogcategories')
        .find(
          {
            published: true,
          },
          {
            projection: {
              _id: false,
              name: true,
              oldId: true,
              ancestry: true,
            },
          }
        )
        .sort({ ancestry: 1, position: 1, name: 1 })
        .toArray();

      menus = data
        .filter((item) => !item.ancestry)
        .map((item) => {
          const submenus = data
            .filter((c) => c.ancestry == item.oldId)
            .map((c) => {
              return { menuId: c.oldId, name: c.name };
            });
          return { menuId: item.oldId, name: item.name, submenus };
        });
    }
    res.json(menus);
  } catch (error) {
    console.log(error);
  }
}
