// Utility functions for Advance Clinic Vadodara website

/**
 * Calculates current time in Indian Standard Time (IST, UTC+5:30)
 * and returns whether the Vadodara clinic is currently open.
 */
export function getClinicStatus(): {
  isOpen: boolean;
  message: string;
  badgeClass: string;
} {
  try {
    const now = new Date();
    // Calculate UTC time
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    // Calculate IST (UTC + 5:30)
    const istTime = new Date(utcTime + 3600000 * 5.5);

    const day = istTime.getDay(); // 0 = Sunday, 1 = Monday...
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    // Sunday Check
    if (day === 0) {
      return {
        isOpen: false,
        message: "Closed today (Sunday)",
        badgeClass: "bg-amber-150 text-amber-800 border-amber-300"
      };
    }

    // Shift 1: 10:00 AM to 1:00 PM (600 mins to 780 mins)
    const shift1Start = 10 * 60; // 10:00 AM
    const shift1End = 13 * 60;   // 1:00 PM

    // Shift 2: 5:00 PM to 9:00 PM (1020 mins to 1260 mins)
    const shift2Start = 17 * 60; // 5:00 PM
    const shift2End = 21 * 60;   // 9:00 PM

    if (totalMinutes >= shift1Start && totalMinutes < shift1End) {
      return {
        isOpen: true,
        message: "Open now (Morning Clinic till 1:00 PM)",
        badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200"
      };
    } else if (totalMinutes >= shift2Start && totalMinutes < shift2End) {
      return {
        isOpen: true,
        message: "Open now (Evening Clinic till 9:00 PM)",
        badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200"
      };
    } else if (totalMinutes < shift1Start) {
      return {
        isOpen: false,
        message: `Closed (Opens at 10:00 AM)`,
        badgeClass: "bg-neutral-100 text-neutral-600 border-neutral-300"
      };
    } else if (totalMinutes >= shift1End && totalMinutes < shift2Start) {
      return {
        isOpen: false,
        message: "Closed (Evening clinic opens at 5:00 PM)",
        badgeClass: "bg-sky-50 text-sky-700 border-sky-300"
      };
    } else {
      return {
        isOpen: false,
        message: "Closed for the day (Opens tomorrow at 10:00 AM)",
        badgeClass: "bg-neutral-100 text-neutral-600 border-neutral-300"
      };
    }
  } catch (e) {
    // Fallback if Date manipulation fails
    return {
      isOpen: true,
      message: "Open Daily: 10 AM-1 PM, 5 PM-9 PM",
      badgeClass: "bg-sky-50 text-blue-800 border-blue-300"
    };
  }
}

/**
 * Safe class name generator (Tailwind merge fallback)
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
