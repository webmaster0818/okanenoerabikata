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
    id: '00',
    title: '先払い買取おすすめランキング【2026年最新版】｜安全な優良業者TOP4を徹底比較',
    slug: 'recommended-ranking-2026',
    keywords: '先払い買取 おすすめ、先払い買取 ランキング、先払い買取 最新',
    badge: '🔥 2026年最新版'
  },
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
    id: '12',
    title: '先払い買取の口コミ・評判は？利用者の声とトラブル事例を徹底調査',
    slug: 'reviews',
    keywords: '先払い買取 口コミ'
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
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)' }}>
      {/* ヘッダー */}
      <header className="sticky top-0 z-50">
        {/* トップアクセントバー */}
        <div style={{ 
          background: 'linear-gradient(90deg, #fcc419 0%, #fab005 30%, #f59f00 60%, #fcc419 100%)', 
          height: '3px' 
        }}></div>
        
        {/* メインヘッダー */}
        <div style={{ 
          background: 'linear-gradient(135deg, #050d1a 0%, #0f1f3d 25%, #1a3358 50%, #1e3a5f 75%, #0f1f3d 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                {/* ロゴアイコン */}
                <div style={{
                  background: 'linear-gradient(135deg, #fcc419, #f59f00)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 12px rgba(252,196,25,0.3)'
                }}>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#0a1628' }}>¥</span>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    <span style={{ color: '#fcc419' }}>先払い買取</span>比較・おすすめ業者ガイド
                  </h1>
                  <p className="text-[11px] md:text-xs text-gray-400 -mt-0.5 tracking-wider">
                    お金の選び方研究所 — 2026年最新版・優良業者厳選
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <span className="text-[10px] text-gray-400 border border-gray-700 rounded-full px-3 py-1">
                  最終更新: 2026.03.17
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* ナビゲーションバー */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1a3358, #243f6b)',
          borderBottom: '1px solid rgba(255,255,255,0.04)'
        }}>
          <div className="container mx-auto px-4">
            <nav className="py-2 overflow-x-auto">
              <ul className="flex gap-1 text-sm whitespace-nowrap">
                <li>
                  <Link href="/" className="px-3 md:px-4 py-1.5 rounded-md text-white font-semibold text-xs md:text-sm" 
                    style={{ background: 'rgba(76,110,245,0.3)' }}>
                    トップ
                  </Link>
                </li>
                <li>
                  <Link href="/comparison" 
                    className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                    業者比較
                  </Link>
                </li>
                <li>
                  <Link href="/articles" 
                    className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                    記事一覧
                  </Link>
                </li>
                <li>
                  <Link href="/articles/what-is-advance-purchase" 
                    className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                    先払い買取とは
                  </Link>
                </li>
                <li>
                  <Link href="/faq" 
                    className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                    よくある質問
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* ヒーローセクション - キャラクター会話形式 */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(160deg, #f0f4ff 0%, #e8eeff 50%, #f5f0ff 100%)'
      }}>
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* メインビジュアル: キャラクター + テキスト */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* 左: 困っている利用者 */}
            <div className="flex-shrink-0 flex flex-row md:flex-col items-center gap-3 md:gap-0 md:relative">
              <img src="/images/characters/user-worried.png" alt="お金に困っている利用者" className="w-20 md:w-44 h-auto" />
              <div className="relative md:absolute md:-top-2 md:right-auto md:-left-4 bg-white rounded-2xl rounded-bl-none shadow-md px-4 py-2 max-w-[180px]">
                <p className="text-xs text-gray-700 font-medium">今月ピンチ…<br />すぐに現金が必要なの😢</p>
              </div>
            </div>

            {/* 中央: メインコピー */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-blue-700 text-xs font-bold">2026年4月 最新版</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                <span className="text-[#1e3a5f]">先払い買取</span>で<br />
                <span style={{
                  background: 'linear-gradient(135deg, #f59f00, #fcc419)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>最短5分</span>
                <span className="text-[#1e3a5f]">で現金化</span>
              </h2>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-lg">
                商品券・ギフトカードを<strong className="text-[#1e3a5f]">発送前に現金化</strong>できるサービス。<br />
                古物商許可取得の<strong className="text-[#1e3a5f]">優良業者4社</strong>を厳選比較しました。
              </p>

              {/* 統計バッジ横並び */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-2xl font-black text-[#1e3a5f]">4<span className="text-sm font-bold">社</span></p>
                  <p className="text-[10px] text-gray-500 font-medium">厳選業者</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-2xl font-black text-green-600">95<span className="text-sm font-bold">%</span></p>
                  <p className="text-[10px] text-gray-500 font-medium">最高買取率</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-2xl font-black text-blue-600">5<span className="text-sm font-bold">分</span></p>
                  <p className="text-[10px] text-gray-500 font-medium">最短入金</p>
                </div>
              </div>

              <Link href="#ranking" className="inline-block bg-[#1e3a5f] hover:bg-[#152d47] text-white font-bold px-8 py-3 rounded-xl transition shadow-lg text-sm">
                おすすめ業者を見る ↓
              </Link>
            </div>

            {/* 右: 指南役アドバイザー */}
            <div className="flex-shrink-0 flex flex-row-reverse md:flex-col items-center gap-3 md:gap-0 md:relative">
              <img src="/images/characters/advisor.png" alt="先払い買取アドバイザー" className="w-28 md:w-56 h-auto" />
              <div className="relative md:absolute md:-top-2 md:left-auto md:-right-4 bg-[#1e3a5f] rounded-2xl rounded-br-none shadow-md px-4 py-2 max-w-[200px]">
                <p className="text-xs text-white font-medium">安心してください！<br />優良業者だけを<br />厳選しました💼</p>
              </div>
            </div>
          </div>

          {/* 注意喚起バナー */}
          <div className="mt-8 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 max-w-3xl mx-auto">
            <p className="text-xs text-gray-700">
              ⚠️ 本サイトは先払い買取サービスの利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
            </p>
          </div>
        </div>
      </section>

      {/* 利用の流れ（キャラクター付き） */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-2">先払い買取の流れ</h2>
            <p className="text-sm text-gray-500">たった3ステップでカンタン</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="flex-1 bg-blue-50 rounded-2xl p-5 text-center border border-blue-100">
              <div className="w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
              <p className="font-bold text-sm text-[#1e3a5f] mb-1">業者に申込み</p>
              <p className="text-xs text-gray-500">LINEやWebフォームから<br />最短1分で申込完了</p>
            </div>
            <div className="text-2xl text-gray-300 hidden md:block">→</div>
            <div className="text-gray-300 md:hidden">↓</div>
            <div className="flex-1 bg-green-50 rounded-2xl p-5 text-center border border-green-100">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
              <p className="font-bold text-sm text-green-700 mb-1">査定＆入金</p>
              <p className="text-xs text-gray-500">最短5分で査定完了<br />即日お振込み</p>
            </div>
            <div className="text-2xl text-gray-300 hidden md:block">→</div>
            <div className="text-gray-300 md:hidden">↓</div>
            <div className="flex-1 bg-amber-50 rounded-2xl p-5 text-center border border-amber-100">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
              <p className="font-bold text-sm text-amber-700 mb-1">商品を発送</p>
              <p className="text-xs text-gray-500">入金後に商品券を<br />業者に発送するだけ</p>
            </div>
          </div>
          {/* キャラクターコメント */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <img src="/images/characters/user-happy.png" alt="" className="w-16 h-auto" />
            <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-2">
              <p className="text-xs text-gray-700">え、こんなに簡単なの！？<br />これなら私でもすぐできそう✨</p>
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">

        {/* おすすめ業者比較表 */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-black mb-2" style={{
              background: 'linear-gradient(135deg, #1e3a5f, #4c6ef5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              先払い買取おすすめ業者 TOP4
            </h2>
            <p className="text-sm text-gray-600">先払い買取で安全・高買取率の優良業者を徹底比較｜古物商許可取得済</p>
          </div>
          
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
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-black mb-2" style={{
              background: 'linear-gradient(135deg, #1e3a5f, #4c6ef5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              先払い買取業者の詳細スペック
            </h2>
            <p className="text-sm text-gray-600">先払い買取率・入金スピード・古物商許可を徹底比較</p>
          </div>
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
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-black mb-2" style={{
              background: 'linear-gradient(135deg, #1e3a5f, #4c6ef5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              先払い買取の完全ガイド
            </h2>
            <p className="text-sm text-gray-600">先払い買取の仕組み・安全性・トラブル回避法を徹底解説</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link 
                key={article.id}
                href={`/articles/${article.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              >
                {article.badge && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold" style={{
                    background: 'linear-gradient(135deg, #ffd43b, #fab005)',
                    color: '#0a1628'
                  }}>
                    {article.badge}
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="mt-4 text-blue-600 text-sm font-semibold">
                  続きを読む →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 注意喚起（下部） */}
        <div className="rounded-xl p-6" style={{
          background: 'linear-gradient(135deg, #fff5f5, #ffe3e3)',
          border: '2px solid #fca5a5'
        }}>
          <h3 className="font-bold mb-3 flex items-center gap-2 text-red-700">
            <span className="text-2xl">🚨</span>
            悪質な業者にご注意ください
          </h3>
          <p className="text-sm text-gray-800 leading-relaxed">
            買取契約のキャンセルを前提としたサービスを提供し高額なキャンセル料を請求する、悪質な取り立てや個人情報を悪用するなど、先払い買取の仕組みを悪用した違法な業者が存在しています。
            こうしたトラブルを避けるためにも、利用の際は契約内容をよく確認し十分に検討を行ってください。
          </p>
          <p className="text-sm text-gray-800 mt-3">
            参考：<a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-700">金融庁 注意喚起 →</a>
          </p>
        </div>
      </main>

      {/* フッター */}
      <footer className="mt-12" style={{
        background: 'linear-gradient(135deg, #0f1f3d, #1a3358)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div style={{
              background: 'linear-gradient(135deg, #fcc419, #f59f00)',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '16px', fontWeight: 900, color: '#0a1628' }}>¥</span>
            </div>
            <p className="text-white font-bold">お金の選び方研究所</p>
          </div>
          <p className="text-sm text-gray-400 mb-4">© 2026 MONEY CHOICE LAB - 先払い買取比較メディア</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">よくある質問</Link>
            <Link href="/comparison" className="text-gray-300 hover:text-white transition-colors">比較・ランキング</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
