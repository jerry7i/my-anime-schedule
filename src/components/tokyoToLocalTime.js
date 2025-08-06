import { DateTime } from "luxon";

export function tokyoToLocalTime(day, time) {
  const weekdays = {
    Sundays: 7,
    Mondays: 1,
    Tuesdays: 2,
    Wednesdays: 3,
    Thursdays: 4,
    Fridays: 5,
    Saturdays: 6,
  };

  const [hour, minute] = time.split(":").map(Number);
  const targetWeekday = weekdays[day];

  let tokyoNow = DateTime.now().setZone("Asia/Tokyo");

  // Set to today's date at target time
  let targetTokyo = tokyoNow.set({ hour, minute, second: 0, millisecond: 0 });

  // If the target weekday is before today, or it's today but earlier in time, advance
  while (targetTokyo.weekday !== targetWeekday || targetTokyo <= tokyoNow) {
    targetTokyo = targetTokyo.plus({ days: 1 });
  }

  // Convert to user's local time zone
  const localTime = targetTokyo.setZone(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  return localTime;

  // return localTime.toFormat("cccc, h:mm a"); // e.g., "Thursday, 11:26 AM"
}

export function startToLocalTime(start) {
  return DateTime.fromISO(start);
}
