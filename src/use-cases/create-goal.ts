import { db } from '../database';
import { goals } from '../database/schema';
import type { GoalDTO } from '../entities/goal';

type CreateGoalRequest = {
  title: string;
  desiredWeeklyFrequency: number;
};

type CreateGoalResponse = {
  goal: GoalDTO;
};

export const createGoal = async ({
  desiredWeeklyFrequency,
  title,
}: CreateGoalRequest) => {
  const goalsInserted = await db
    .insert(goals)
    .values({ title, desiredWeeklyFrequency })
    .returning();

  const goal = goalsInserted[0];

  return { goal };
};
