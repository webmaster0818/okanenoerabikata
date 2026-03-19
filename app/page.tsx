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
                    お金の選び方<span style={{ color: '#fcc419' }}>研究所</span>
                  </h1>
                  <p className="text-[11px] md:text-xs text-gray-400 -mt-0.5 tracking-wider">
                    MONEY CHOICE LAB — 先払い買取比較メディア
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

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(160deg, #1e3a5f 0%, #2a4a7f 30%, #4c6ef5 60%, #5c7cfa 80%, #748ffc 100%)'
      }}>
        {/* 装飾エフェクト */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 光る球体 */}
          <div className="absolute" style={{
            top: '-80px',
            right: '-60px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(76,110,245,0.15) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          <div className="absolute" style={{
            bottom: '-120px',
            left: '-80px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(252,196,25,0.08) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          {/* グリッドパターン */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full" style={{
              background: 'linear-gradient(135deg, rgba(252,196,25,0.15), rgba(245,159,0,0.1))',
              border: '1px solid rgba(252,196,25,0.3)',
              backdropFilter: 'blur(8px)'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                background: '#fcc419',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(252,196,25,0.6)'
              }}></span>
              <span className="text-yellow-300 text-xs font-bold tracking-wider">2026年3月 最新版</span>
            </div>

            {/* タイトル */}
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
              <span style={{
                background: 'linear-gradient(135deg, #ffd43b 0%, #fab005 40%, #fcc419 60%, #ffe066 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 8px rgba(252,196,25,0.4))'
              }}>先払い買取</span>
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #dbe4ff 50%, #bac8ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.2))'
              }}>とは？</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto text-white" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}>
              手元にある商品を売却する前提で、<span style={{ color: '#ffd43b', fontWeight: 600 }}>先に査定額を受け取れる</span>サービス。<br className="hidden md:block" />
              急な出費で現金が必要なとき、<span style={{ color: '#ffd43b', fontWeight: 600 }}>一時的な資金確保</span>の手段として注目されています。
            </p>

            {/* 統計カード */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 mb-6">
              <div className="flex-1 min-w-[130px] max-w-[180px] rounded-xl p-4 text-center" style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px)'
              }}>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span style={{
                    fontSize: '30px',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #ffd43b, #fab005)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 1px 3px rgba(252,196,25,0.4))'
                  }}>4</span>
                  <span className="text-sm font-bold" style={{ color: '#ffd43b' }}>社</span>
                </div>
                <p className="text-[10px] font-semibold tracking-wider text-white opacity-85">厳選業者数</p>
              </div>
              <div className="flex-1 min-w-[130px] max-w-[180px] rounded-xl p-4 text-center" style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px)'
              }}>
                <div className="flex items-center justify-center gap-0.5 mb-1">
                  <span className="text-xs font-medium text-white opacity-85">最大</span>
                  <span style={{
                    fontSize: '30px',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #51cf66, #22c55e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 1px 3px rgba(34,197,94,0.4))'
                  }}>95</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#51cf66' }}>%</span>
                </div>
                <p className="text-[10px] font-semibold tracking-wider text-white opacity-85">最高買取率</p>
              </div>
              <div className="flex-1 min-w-[130px] max-w-[180px] rounded-xl p-4 text-center" style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px)'
              }}>
                <div className="flex items-center justify-center gap-0.5 mb-1">
                  <span style={{
                    fontSize: '30px',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #74c0fc, #339af0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 1px 3px rgba(51,154,240,0.4))'
                  }}>5</span>
                  <span className="text-sm font-bold" style={{ color: '#74c0fc' }}>分</span>
                </div>
                <p className="text-[10px] font-semibold tracking-wider text-white opacity-85">最短入金時間</p>
              </div>
            </div>

            {/* 注意喚起バナー */}
            <div className="mt-6 px-4 py-3 rounded-lg" style={{
              background: 'rgba(255,243,191,0.12)',
              border: '1px solid rgba(255,243,191,0.3)'
            }}>
              <p className="text-xs text-white opacity-90">
                ⚠️ 本サイトは先払い買取サービスの利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
              </p>
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
              おすすめ先払い買取業者 TOP4
            </h2>
            <p className="text-sm text-gray-600">厳選した信頼性の高い業者を買取率・スピードで比較</p>
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
              各業者の詳細情報
            </h2>
            <p className="text-sm text-gray-600">スペック・特徴を詳しく比較して最適な業者を見つけましょう</p>
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
              先払い買取に関する記事
            </h2>
            <p className="text-sm text-gray-600">業者選びのポイントやリスク対策を詳しく解説</p>
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
