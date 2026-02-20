import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

export default function Footer({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const footerLinks = {
    [dict.footer.product]: [
      { href: `${prefix}/#features`, label: dict.footer.features },
      { href: `${prefix}/coach`, label: dict.footer.aiCoach },
      {
        href: "https://play.google.com/store/apps/details?id=com.corevia.fitness",
        label: dict.footer.download,
        external: true,
      },
    ],
    [dict.footer.fitnessGuide]: [
      { href: `${prefix}/guide/calorie`, label: dict.footer.calorieCalc },
      { href: `${prefix}/guide/1rm`, label: dict.footer.oneRmCalc },
      { href: `${prefix}/guide/exercises`, label: dict.footer.exerciseDb },
      { href: `${prefix}/guide/programs`, label: dict.footer.programs },
    ],
    [dict.footer.company]: [
      { href: `${prefix}/team`, label: dict.footer.team },
      { href: `${prefix}/posts`, label: dict.footer.blog },
      { href: `${prefix}/contact`, label: dict.footer.contactUs },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
          <p className="text-xs text-gray-400">coreoffitness2025@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
