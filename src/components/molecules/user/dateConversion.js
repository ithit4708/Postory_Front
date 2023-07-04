import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

export function simpleDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth()는 0을 1월로, 11을 12월로 반환하므로 1을 더해줍니다.
  const day = String(date.getDate()).padStart(2, '0'); // getDate()는 일을 반환합니다. padStart()는 두 자릿수를 유지하기 위해 사용됩니다.

  return `${year}.${month}.${day}`;
}

export function countDate(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);

  const diffMinutes = differenceInMinutes(now, date);
  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }

  const diffHours = differenceInHours(now, date);
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  const diffDays = differenceInDays(now, date);
  if (diffDays < 30) {
    return `${diffDays}일 전`;
  }

  const diffMonths = differenceInMonths(now, date);
  if (diffMonths < 12) {
    return `${diffMonths}개월 전`;
  }

  const diffYears = differenceInYears(now, date);
  return `${diffYears}년 전`;
}
