interface CardProps {
  title: string;
  description?: string;
  href: string;
  date?: string;
  icon?: React.ReactNode;
  tags?: string[];
  variant?: "default" | "featured";
}

export function Card({
  title,
  description,
  href,
  date,
  icon,
  tags,
  variant = "default",
}: CardProps) {
  return (
    <a
      href={href}
      className={`
          block p-6 rounded-lg transition-all duration-200 no-underline
  transform hover:-translate-y-1 hover:shadow-md
  ${
    variant === "featured"
      ? "border-2 border-blue-500 hover:border-blue-600"
      : "border border-gray-200 hover:border-gray-400"
  }
        `}
    >
      <div className="flex items-start gap-4">
        {icon && <div className="text-gray-400">{icon}</div>}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          {date && <div className="text-sm text-gray-500 mb-2">{date}</div>}
          {description && <p className="text-gray-600 mb-3">{description}</p>}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export function CardGrid({
  children,
  columns = 2,
}: {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
}) {
  return (
    <div
      className={`
        grid grid-cols-1 gap-4 my-8
        ${columns === 1 ? "md:grid-cols-1" : ""}
        ${columns === 2 ? "md:grid-cols-2" : ""}
        ${columns === 3 ? "md:grid-cols-3" : ""}
        ${columns === 4 ? "md:grid-cols-4" : ""}
      `}
    >
      {children}
    </div>
  );
}
