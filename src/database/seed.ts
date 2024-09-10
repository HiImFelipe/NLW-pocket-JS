import dayjs from 'dayjs';
import { client, db } from '.';
import { goalCompletions, goals } from './schema';

const seed = async () => {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const result = await db
    .insert(goals)
    .values([
      { title: 'Learn to play the guitar', desiredWeeklyFrequency: 3 },
      { title: 'Learn to cook', desiredWeeklyFrequency: 2 },
      { title: 'Learn to code', desiredWeeklyFrequency: 5 },
    ])
    .returning();

  const startOfWeek = dayjs().startOf('week');

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: startOfWeek.toDate() },
    {
      goalId: result[1].id,
      createdAt: startOfWeek.subtract(1, 'day').toDate(),
    },
  ]);
};

seed().finally(() => client.end());