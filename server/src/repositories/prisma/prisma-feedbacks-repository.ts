import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepo } from '../feedbacks-repo';

export class PrismaFeedbacksRepository implements FeedbacksRepo {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}