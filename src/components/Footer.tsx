import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

export default function Footer({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const footerLinks = {
    [dict.footer.product]: [
      { href: `${prefix}/#features`, label: dict.footer.features },
      { href: `${prefix}/guide`, label: dict.footer.fitnessGuide },
      { href: `${prefix}/#cta`, label: dict.footer.download },
    ],
    "Workout Guide": [
      { href: `${prefix}/guide/workout/1rm`, label: dict.footer.oneRmCalc },
      { href: `${prefix}/guide/workout/programs`, label: dict.footer.programs },
      { href: `${prefix}/guide/workout/exercises`, label: dict.footer.exerciseDb },
    ],
    "Nutrition Guide": [
      { href: `${prefix}/guide/nutrition/calorie`, label: dict.footer.calorieCalc },
      { href: `${prefix}/guide/nutrition/meal-plans`, label: dict.footer.mealPlans || "Meal Plans" },
      { href: `${prefix}/guide/nutrition`, label: dict.footer.nutritionDb },
    ],
    [dict.footer.company]: [
      { href: `${prefix}/team`, label: dict.footer.team },
      { href: `${prefix}/posts`, label: dict.footer.blog },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1120px] mx-auto px-[var(--section-px)] py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="font-extrabold text-xl text-gray-900 mb-2">
              CoreVia Fitness
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {dict.footer.tagline1}
              <br />
              {dict.footer.tagline2}
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-semibold text-sm text-gray-900 mb-3">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-[var(--corevia-primary)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-[var(--corevia-primary)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} CoreVia Fitness. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">support@coreviafitness.com</p>
        </div>
      </div>
    </footer>
  );
}
