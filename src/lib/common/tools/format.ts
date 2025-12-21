import { resolve } from '$app/paths';
import type { Presentation } from '@prisma/client';
import { formatDate, formatDistance } from 'date-fns';
import { frCA } from 'date-fns/locale';
import type { User } from '../types/prisma-types';

export function formatDateFrench(date: Date, format = 'PPP') {
  return formatDate(date, format, {
    locale: frCA,
  });
}

export function formatTimeBetween(date1: Date, date2: Date = new Date()) {
  return formatDistance(date1, date2, {
    locale: frCA,
  });
}

export function formatCurrency(value: number) {
  return Intl.NumberFormat('fr-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(value);
}

export function formatUserNames(user: User, options?: { hideUsername?: boolean }) {
  let names = `${user.firstname} ${user.lastname}`;
  if (!options?.hideUsername) {
    names += ` (${user.username})`;
  }
  return names;
}

/**
 * Parse a string to a valid id. Remove accents, spaces and convert to lowercase.
 */
export function formatToId(section: string) {
  return section
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function formatPresentationUrl({ id, courseId }: Presentation) {
  return resolve('/savant/courses/[courseId=number]/presentations/[presentationId=number]', {
    courseId: courseId.toString(),
    presentationId: id.toString(),
  });
}
