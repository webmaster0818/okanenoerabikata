import Link from 'next/link'
import Image from 'next/image'

// 推奨業者データ
const recommendedCompanies = [
  {
    rank: 1,
    id: 'ticket-center',
    name: 'チケットセンター',
    badge: '買取率No.1',
    badgeColor: 'bg-yellow-500',
    url: 'https://ticket-center.jp/',
    image: '/images/companies/ticket-center.png',
    advanceRate: '65%~',
    mailRate: '最大95%',
    speed: '即日お振込み',
    products: '商品券',
    features: [
      '買取査定は最短10分',
      'スマホ1つでOK',
      '査定後も即日お振込み',
      '安心・安全の秘密厳守'
    ]
  },
  {
    rank: 2,
    id: 'sheep-ticket',
    name: 'シープチケット',
    badge: '最短5分入金',
    badgeColor: 'bg-blue-500',
    url: 'https://s-ticket-a-bce.net/',
    image: '/images/companies/sheep-ticket.png',
    advanceRate: '60%',
    mailRate: '70%',
    speed: '最短5分で即日入金',
    products: '商品券、ギフトカードなど',
    features: [
      '提出書類が多くてもLINE完結',
      '対応が早い',
      '高額買取',
      '24時間365日受付'
    ]
  },
  {
    rank: 3,
    id: 'turtle-ticket',
    name: 'タートルチケット',
    badge: '高買取率',
    badgeColor: 'bg-green-500',
    url: 'https://turtle-ticket.com/',
    image: '/images/companies/turtle-ticket.png',
    advanceRate: '60~80%',
    mailRate: '90%',
    speed: '即査定・即振込',
    products: '商品券、ギフト券',
    features: [
      '数分で振込完了',
      'LINEで即査定',
      '来店不要WEB手続きのみ',
      '業界トップクラスの買取率'
    ]
  },
  {
    rank: 4,
    id: 'reset-ticket',
    name: 'リセチケット',
    badge: '24時間対応',
    badgeColor: 'bg-purple-500',
    url: 'https://reseticke.com/',
    image: '/images/companies/reset-ticket.png',
    advanceRate: '最大65%',
    mailRate: '最大90%',
    speed: '即日買取',
    products: '商品券、VJAギフトカード',
    features: [
      '最短15分で査定完了',
      'LINEで完結',
      '他社との相見積もり歓迎',
      '年中無休24時間営業'
    ]
  }
]

//記事データ
const articles = [
  {
    id: '01',
    title: '先払い買取とは？おすすめ業者や安全に即日現金化できる方法をご紹介',
    slug: 'what-is-advance-purchase',
    keywords: '先払い買取、リセチケット、シープチケット、タートルチケット'
  },
  {
    id: '02',
    title: '先払い買取は審査なしでも借りられる？即日利用可能な厳選4社をご紹介',
    slug: 'no-screening',
    keywords: '先払い買取 審査なし'
  },
  {
    id: '03',
    title: '先払い買取の5chで話題の即日・爆速入金の先払い買取業者厳選4選をご紹介',
    slug: '5ch-latest',
    keywords: '先払い買取 5ch 最新'
  },
  {
    id: '04',
    title: 'リセチケットの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'reset-ticket',
    keywords: 'リセチケット、先払い買取'
  },
  {
    id: '05',
    title: 'シープチケットの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'sheep-ticket',
    keywords: 'シープチケット、先払い買取'
  },
  {
    id: '06',
    title: 'タートルチケットの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'turtle-ticket',
    keywords: 'タートルチケット、先払い買取'
  },
  {
    id: '07',
    title: 'チケットセンターの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'ticket-center',
    keywords: 'チケットセンター、先払い買取'
  },
  {
    id: '08',
    title: '先払い買取で即日現金化！最短5分入金の優良業者4選を徹底解説',
    slug: 'instant',
    keywords: '先払い買取 即日'
  },
  {
    id: '09',
    title: '先払い買取で安全に現金化する方法｜優良業者の見分け方と注意点',
    slug: 'safe',
    keywords: '先払い買取 安全'
  },
  {
    id: '10',
    title: '先払い買取優良業者の選び方｜安心できる4社と見極めポイント',
    slug: 'reliable',
    keywords: '先払い買取 優良'
  },
  {
    id: '11',
    title: '先払い買取ランキング｜買取率・スピード別おすすめ業者TOP4',
    slug: 'ranking',
    keywords: '先払い買取 ランキング'
  },
  {
    id: '12',
    title: '先払い買取の口コミ・評判は？利用者の声とトラブル事例を徹底調査',
    slug: 'reviews',
    keywords: '先払い買取 口コミ'
  },
  {
    id: '13',
    title: '先払い買取おすすめ業者4選！安全性と買取率で選ぶポイント',
    slug: 'recommended',
    keywords: '先払い買取 おすすめ'
  },
  {
    id: '14',
    title: '先払い買取業者を徹底比較！買取率・スピード・安全性で選ぶ最適な業者',
    slug: 'comparison',
    keywords: '先払い買取 比較'
  },
  {
    id: '15',
    title: '先払い買取は違法？合法との違いと違法業者の見分け方を徹底解説',
    slug: 'illegal',
    keywords: '先払い買取 違法'
  },
  {
    id: '16',
    title: '先払い買取のトラブル事例と対処法｜被害を防ぐための完全ガイド',
    slug: 'trouble',
    keywords: '先払い買取 トラブル'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            お金の選び方研究所
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            先払い買取サービスの比較・情報サイト
          </p>
          
          {/* ナビゲーション */}
          <nav className="mt-4 border-t pt-4">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/" className="text-blue-600 font-semibold">トップ</Link></li>
              <li><Link href="/comparison" className="text-gray-700 hover:text-blue-600">業者比較</Link></li>
              <li><Link href="/articles/what-is-advance-purchase" className="text-gray-700 hover:text-blue-600">先払い買取とは</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-blue-600">よくある質問</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* 注意喚起 */}
        <div className="warning-box mb-8">
          <p className="text-sm font-semibold text-gray-800">
            ⚠️ 本サイトは、先払い買取サービスの利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
          </p>
        </div>

        {/* メインキャッチ */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            先払い買取とは？
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            手元にある商品を売却する前提で、先に査定額を受け取れるサービスです。
            急な出費で現金が必要なときなど、一時的な資金確保の手段として注目されています。
          </p>
        </section>

        {/* おすすめ業者比較表 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">おすすめ先払い買取業者 TOP4</h2>
          
          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-800">
              ※以下の内容は、各業者の公式サイトに掲載されている情報を引用・整理したものであり、当サイトが各業者の適法性・安全性・将来にわたる健全な運営を保証するものではありません。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-2 md:p-4">
            <p className="text-sm text-gray-600 text-center mb-4">厳選した信頼性の高い業者を買取率・スピードで比較</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">順位</th>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">業者名</th>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">先払い買取率</th>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">郵送買取率</th>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">入金スピード</th>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">対応商品</th>
                    <th className="px-2 md:px-4 py-3 text-left text-sm">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {recommendedCompanies.map((company) => (
                    <tr key={company.id} className={company.rank % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 md:px-4 py-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                          {company.rank}
                        </div>
                      </td>
                      <td className="px-2 md:px-4 py-3 font-semibold text-sm">{company.name}</td>
                      <td className="px-2 md:px-4 py-3 text-sm">{company.advanceRate}</td>
                      <td className="px-2 md:px-4 py-3 text-sm">{company.mailRate}</td>
                      <td className="px-2 md:px-4 py-3 text-sm">{company.speed}</td>
                      <td className="px-2 md:px-4 py-3 text-xs">{company.products}</td>
                      <td className="px-2 md:px-4 py-3">
                        <Link 
                          href={`/articles/${company.id}`}
                          className="text-blue-600 hover:text-blue-800 underline text-xs md:text-sm whitespace-nowrap"
                        >
                          詳細 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-4 text-center">
              ※各業者の公式サイトに掲載されている情報を引用・整理したものです。適法性・安全性・将来にわたる健全な運営を保証するものではありません。
            </p>
          </div>
        </section>

        {/* 業者詳細カード */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">各業者の詳細情報</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">スペック・特徴を詳しく比較して最適な業者を見つけましょう</p>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedCompanies.map((company) => (
              <div key={company.id} className="bg-white p-6 rounded-lg shadow-md relative">
                {/* 順位バッジ */}
                <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg z-10">
                  {company.rank}
                </div>
                
                {company.image && (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={640}
                      height={383}
                      className="rounded-lg"
                      unoptimized
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold">{company.name}</h3>
                  <span className={`${company.badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                    {company.badge}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">先払い買取率</p>
                    <p className="font-bold text-blue-600">{company.advanceRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">郵送買取率</p>
                    <p className="font-bold text-blue-600">{company.mailRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">入金スピード</p>
                    <p className="font-semibold">{company.speed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">対応商品</p>
                    <p className="font-semibold text-sm">{company.products}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">おすすめポイント</p>
                  <ul className="space-y-1">
                    {company.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    公式サイト →
                  </a>
                  <Link 
                    href={`/articles/${company.id}`}
                    className="flex-1 bg-gray-100 text-gray-800 text-center px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 記事一覧 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">先払い買取に関する記事</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">業者選びのポイントやリスク対策を詳しく解説</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link 
                key={article.id}
                href={`/articles/${article.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  対策KW: {article.keywords}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-semibold">
                  続きを読む →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 注意喚起（下部） */}
        <div className="warning-box">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-2xl">🚨</span>
            悪質な業者にご注意ください
          </h3>
          <p className="text-sm text-gray-800">
            買取契約のキャンセルを前提としたサービスを提供し高額なキャンセル料を請求する、悪質な取り立てや個人情報を悪用するなど、先払い買取の仕組みを悪用した違法な業者が存在しています。
            こうしたトラブルを避けるためにも、利用の際は契約内容をよく確認し十分に検討を行ってください。
          </p>
          <p className="text-sm text-gray-800 mt-2">
            参考：<a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">金融庁 注意喚起</a>
          </p>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 お金の選び方研究所 - 先払い買取比較サイト</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link>
            <Link href="/faq" className="hover:text-gray-300">よくある質問</Link>
            <Link href="/comparison" className="hover:text-gray-300">比較・ランキング</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
