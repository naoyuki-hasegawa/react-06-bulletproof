import { User } from '@/features/users';
import { BaseEntity } from '@/types';

export type Discussion = {
    title: string;
    body: string;
    teamId: string;
    author: User;
} & BaseEntity;