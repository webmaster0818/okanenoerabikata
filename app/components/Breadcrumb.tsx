import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // ホームを常に最初に追加
  const allItems = [
    { name: 'ホーム', url: '/' },
    ...items
  ]

  // 構造化データ（JSON-LD）の生成
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://8bb6ef92.okanenoerabikata-deploy.pages.dev${item.url}`
    }))
  }

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* パンくずリスト（HTML） */}
      <nav aria-label="パンくずリスト" className="py-3 px-4 bg-white border-b">
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {index === allItems.length - 1 ? (
                <span className="font-semibold text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.url} 
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
