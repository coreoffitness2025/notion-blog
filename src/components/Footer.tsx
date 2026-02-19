import Link from "next/link";

const footerLinks = {
  제품: [
    { href: "/#features", label: "기능 소개" },
    { href: "/coach", label: "AI 코치" },
    {
      href: "https://play.google.com/store/apps/details?id=com.corevia.fitness",
      label: "앱 다운로드",
      external: true,
    },
  ],
  "피트니스 가이드": [
    { href: "/guide/calorie", label: "칼로리 계산기" },
    { href: "/guide/1rm", label: "1RM 계산기" },
    { href: "/guide/exercises", label: "운동 도감" },
    { href: "/guide/programs", label: "운동 프로그램" },
  ],
  회사: [
    { href: "/team", label: "팀 소개" },
    { href: "/posts", label: "블로그" },
    { href: "/contact", label: "문의하기" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="font-extrabold text-xl text-gray-900 mb-2">
              CoreVia
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              스마트폰 하나로,
              <br />
              나만의 PT 선생님
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
            &copy; {new Date().getFullYear()} CoreVia. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">coreoffitness2025@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
