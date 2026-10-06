import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center gap-1.5"
        >
          <Link
            to="/"
            itemProp="item"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-blue-400" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <ChevronRight className="w-3 h-3 text-slate-600" />
        </li>

        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1.5"
            >
              {item.path && !isLast ? (
                <>
                  <Link
                    to={item.path}
                    itemProp="item"
                    className="hover:text-white transition-colors"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                </>
              ) : (
                <span className="text-slate-200 font-semibold" itemProp="name">
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
